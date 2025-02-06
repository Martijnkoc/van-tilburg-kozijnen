import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  type: 'contact' | 'offerte';
}

export async function sendContactEmail(data: ContactFormData) {
  const subject = data.type === 'contact' 
    ? 'Nieuw contactformulier bericht'
    : 'Nieuwe offerte aanvraag';

  try {
    const { data: emailData, error } = await resend.emails.send({
      from: 'Van Tilburg Kozijnen <noreply@vantilburg-kozijnen.nl>',
      to: 'norain@vantilburg-kozijnen.nl',
      subject,
      html: `
        <h2>${subject}</h2>
        <p><strong>Naam:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Telefoon:</strong> ${data.phone}</p>` : ''}
        <p><strong>Bericht:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Email error:', error);
      throw new Error('Failed to send email');
    }

    return { success: true, data: emailData };
  } catch (error) {
    console.error('Email error:', error);
    throw new Error('Failed to send email');
  }
}
