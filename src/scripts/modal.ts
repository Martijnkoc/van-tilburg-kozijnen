export function initializeModals() {
  const modalTriggers = document.querySelectorAll('[data-modal]');
  const modals = document.querySelectorAll('[id$="Modal"]');
  
  function closeModal(modal: Element) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  // Close modal when clicking outside or on close button
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || (e.target as Element).closest('[data-close-modal]')) {
        closeModal(modal);
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal(modal);
      }
    });
  });
  
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const modalId = trigger.getAttribute('data-modal');
      const modal = document.getElementById(`${modalId}Modal`);
      
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';

        // Close mobile menu if it's open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
      }
    });
  });
}
