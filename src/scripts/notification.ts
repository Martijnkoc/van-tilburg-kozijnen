export function initializeNotifications() {
  const notification = document.getElementById('notification');
  if (!notification) return;

  window.addEventListener('show-notification', ((event: CustomEvent) => {
    const { type, message } = event.detail;
    
    const notificationIcon = notification.querySelector('.notification-icon');
    const notificationMessage = notification.querySelector('.notification-message');
    
    if (notificationIcon && notificationMessage) {
      // Set icon and color based on type
      if (type === 'success') {
        notificationIcon.classList.add('text-green-400');
        notificationIcon.classList.remove('text-red-400');
        notificationIcon.innerHTML = `
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        `;
      } else {
        notificationIcon.classList.add('text-red-400');
        notificationIcon.classList.remove('text-green-400');
        notificationIcon.innerHTML = `
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        `;
      }
      
      // Set message
      notificationMessage.textContent = message;
    }
    
    // Show notification
    notification.classList.remove('hidden');
    
    // Hide after 5 seconds
    setTimeout(() => {
      notification.classList.add('hidden');
    }, 5000);
  }) as EventListener);

  // Close notification when clicking close button
  const closeButton = notification.querySelector('button');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      notification.classList.add('hidden');
    });
  }
}
