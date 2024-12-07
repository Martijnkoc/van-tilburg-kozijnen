import type { APIRoute } from 'astro';
import ical from 'ical-generator';
import { createTransport } from 'nodemailer';

const COMPANY_EMAIL = 'info@vantilburgkozijnen.nl';
const COMPANY_NAME = 'Van Tilburg Kozijnen';
const APPOINTMENT_DURATION = 90; // Afspraakduur in minuten

const transporter = createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, phone, date, time, message = '' } = data;

    // Bereken start- en eindtijd van de afspraak
    const [hours, minutes] = time.split(':').map(Number);
    const startTime = new Date(date);
    startTime.setHours(hours, minutes, 0);
    
    const endTime = new Date(startTime);
    endTime.setMinutes(endTime.getMinutes() + APPOINTMENT_DURATION);

    // Genereer ICS bestand
    const calendar = ical({
      name: 'Afspraak Van Tilburg Kozijnen',
      timezone: 'Europe/Amsterdam'
    });

    calendar.createEvent({
      start: startTime,
      end: endTime,
      summary: `Afspraak ${COMPANY_NAME}`,
      description: `
Afspraak details:
Naam: ${name}
Telefoon: ${phone}
Email: ${email}
Bericht: ${message}
      `,
      location: 'Nader te bepalen',
      organizer: {
        name: COMPANY_NAME,
        email: COMPANY_EMAIL
      }
    });

    // Stuur bevestigingsmail naar klant
    await transporter.sendMail({
      from: `"${COMPANY_NAME}" <${COMPANY_EMAIL}>`,
      to: email,
      subject: `Afspraakbevestiging - ${COMPANY_NAME}`,
      text: `
Beste ${name},

Bedankt voor het maken van een afspraak bij ${COMPANY_NAME}.

Details van uw afspraak:
Datum: ${startTime.toLocaleDateString('nl-NL')}
Tijd: ${time}

Wij nemen binnen 24 uur contact met u op om de afspraak definitief te bevestigen.

Met vriendelijke groet,
${COMPANY_NAME}
      `,
      icalEvent: {
        filename: 'afspraak.ics',
        method: 'REQUEST',
        content: calendar.toString()
      }
    });

    // Stuur notificatie naar bedrijf
    await transporter.sendMail({
      from: `"Website Afspraken" <${COMPANY_EMAIL}>`,
      to: COMPANY_EMAIL,
      subject: `Nieuwe afspraak aanvraag - ${name}`,
      text: `
Er is een nieuwe afspraak aangevraagd via de website.

Details:
Naam: ${name}
Email: ${email}
Telefoon: ${phone}
Datum: ${startTime.toLocaleDateString('nl-NL')}
Tijd: ${time}
Bericht: ${message}

Neem contact op met de klant om de afspraak definitief te bevestigen.
      `
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Error creating appointment:', error);
    return new Response(JSON.stringify({ error: 'Failed to create appointment' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
