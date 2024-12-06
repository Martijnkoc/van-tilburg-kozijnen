import type { APIRoute } from 'astro';
import ical from 'ical-generator';
import { createTransport } from 'nodemailer';

const COMPANY_EMAIL = 'info@vantilburgkozijnen.nl'; // Vervang dit met jullie email
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
    const { name, email, phone, projectType, preferredDate, preferredTime, message } = data;

    // Bereken start- en eindtijd van de afspraak
    const startTime = new Date(preferredDate);
    if (preferredTime === 'ochtend') {
      startTime.setHours(9, 0, 0);
    } else {
      startTime.setHours(13, 0, 0);
    }
    
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
      summary: `Afspraak ${COMPANY_NAME} - ${projectType}`,
      description: `
Afspraak details:
Type project: ${projectType}
Klant: ${name}
Telefoon: ${phone}
Email: ${email}
Toelichting: ${message}
      `.trim(),
      location: 'Ambachtsweg 6, 5081 NL Hilvarenbeek',
      organizer: {
        name: COMPANY_NAME,
        email: COMPANY_EMAIL
      },
      attendees: [
        {
          name: name,
          email: email,
          rsvp: true
        }
      ]
    });

    // Verstuur email naar klant
    await transporter.sendMail({
      from: `"${COMPANY_NAME}" <${COMPANY_EMAIL}>`,
      to: email,
      subject: `Afspraakbevestiging ${COMPANY_NAME}`,
      text: `
Beste ${name},

Bedankt voor het maken van een afspraak bij ${COMPANY_NAME}.

Details van uw afspraak:
Datum: ${startTime.toLocaleDateString('nl-NL')}
Tijd: ${startTime.toLocaleTimeString('nl-NL')} - ${endTime.toLocaleTimeString('nl-NL')}
Type project: ${projectType}

U vindt in de bijlage een agenda-item dat u kunt toevoegen aan uw agenda.

Met vriendelijke groet,
Team ${COMPANY_NAME}
      `.trim(),
      icalEvent: {
        filename: 'afspraak.ics',
        method: 'REQUEST',
        content: calendar.toString()
      }
    });

    // Verstuur email naar bedrijf
    await transporter.sendMail({
      from: `"${COMPANY_NAME}" <${COMPANY_EMAIL}>`,
      to: COMPANY_EMAIL,
      subject: `Nieuwe afspraak: ${name} - ${projectType}`,
      text: `
Nieuwe afspraak ingepland:

Klant: ${name}
Email: ${email}
Telefoon: ${phone}
Type project: ${projectType}
Datum: ${startTime.toLocaleDateString('nl-NL')}
Tijd: ${startTime.toLocaleTimeString('nl-NL')} - ${endTime.toLocaleTimeString('nl-NL')}
Toelichting: ${message}
      `.trim(),
      icalEvent: {
        filename: 'afspraak.ics',
        method: 'REQUEST',
        content: calendar.toString()
      }
    });

    return new Response(JSON.stringify({
      success: true,
      message: 'Afspraak succesvol ingepland'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'Er is iets misgegaan bij het inplannen van de afspraak'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
