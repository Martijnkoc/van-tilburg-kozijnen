// Import EmailJS configuration and functions
import { EMAILJS_CONFIG, initEmailJS, sendEmail } from '../lib/emailjs';

// Initialize EmailJS when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initEmailJS();
  setupQuoteForm();
});

function setupQuoteForm() {
  const quoteForm = document.getElementById('quoteForm');
  if (!quoteForm) return;

  quoteForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(quoteForm);
    const templateParams = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      projectType: formData.get('projectType'),
      message: formData.get('message')
    };

    try {
      // Show loading state
      const submitButton = quoteForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = 'Verzenden...';

      // Send email
      await sendEmail(EMAILJS_CONFIG.QUOTE_TEMPLATE_ID, templateParams);

      // Show success message
      alert('Bedankt voor uw aanvraag! We nemen binnen 24 uur contact met u op.');
      
      // Reset form
      quoteForm.reset();
      
      // Close modal
      const modal = document.getElementById('quoteModal');
      if (modal) {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      alert('Er is iets misgegaan. Probeer het later opnieuw of neem telefonisch contact op.');
    } finally {
      // Reset button state
      const submitButton = quoteForm.querySelector('button[type="submit"]');
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  });
}
