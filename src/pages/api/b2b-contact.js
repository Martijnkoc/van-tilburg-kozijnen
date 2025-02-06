import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function post({ request }) {
  try {
    const data = await request.json();
    
    // Hier zou je de data kunnen verwerken, bijvoorbeeld:
    // - Versturen naar een CRM systeem
    // - Opslaan in een database
    // - Versturen via email
    console.log('Received B2B contact form submission:', data);

    // Verstuur email via Resend
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'your-email@example.com', // Verander dit naar het juiste email adres
      subject: 'Nieuwe B2B Contact Aanvraag',
      html: `
        <h1>Nieuwe B2B Contact Aanvraag</h1>
        <p>Er is een nieuwe aanvraag binnengekomen:</p>
        <pre>${JSON.stringify(data, null, 2)}</pre>
      `
    });

    // Voor nu sturen we een success response
    return new Response(JSON.stringify({
      message: 'Contact form submitted successfully'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error processing B2B contact form:', error);
    
    return new Response(JSON.stringify({
      message: 'Error processing contact form'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
