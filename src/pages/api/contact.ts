import type { APIRoute } from 'astro';
import { sendContactEmail, type ContactFormData } from '../../lib/email';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData: ContactFormData = await request.json();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      return new Response(JSON.stringify({
        error: 'Naam, email en bericht zijn verplicht'
      }), { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return new Response(JSON.stringify({
        error: 'Ongeldig emailadres'
      }), { status: 400 });
    }

    // Send email
    await sendContactEmail(formData);

    return new Response(JSON.stringify({
      message: 'Bericht succesvol verzonden'
    }), { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({
      error: 'Er is iets misgegaan bij het verzenden van het bericht'
    }), { status: 500 });
  }
};
