export async function post({ request }) {
  try {
    const data = await request.json();
    
    // Hier zou je de data kunnen verwerken, bijvoorbeeld:
    // - Versturen naar een CRM systeem
    // - Opslaan in een database
    // - Versturen via email
    console.log('Received B2B contact form submission:', data);

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
