// TypeScript declarations
declare global {
  interface Window {
    emailjs: any;
  }
}

// EmailJS configuration
export const EMAILJS_CONFIG = {
  USER_ID: "S4g4iJg985aIeUFHC", // Public Key
  SERVICE_ID: "service_n9x8npb", // Email Service ID
  CONTACT_TEMPLATE_ID: "template_rizlq69", // Contact form template
  QUOTE_TEMPLATE_ID: "template_fkz7dbc" // Quote form template
};

// Initialize EmailJS
export const initEmailJS = () => {
  if (typeof window !== 'undefined' && window.emailjs) {
    window.emailjs.init(EMAILJS_CONFIG.USER_ID);
  }
};

// Send email using EmailJS
export const sendEmail = async (templateId: string, templateParams: any) => {
  if (typeof window === 'undefined' || !window.emailjs) {
    throw new Error('EmailJS not initialized');
  }

  try {
    const response = await window.emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      templateId,
      templateParams
    );
    return response;
  } catch (error) {
    console.error('EmailJS error:', error);
    throw error;
  }
};
