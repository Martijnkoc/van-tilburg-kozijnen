export const businessHours = {
  ma: { open: 8, close: 17 },
  di: { open: 8, close: 17 },
  wo: { open: 8, close: 17 },
  do: { open: 8, close: 17 },
  vr: { open: 8, close: 17 },
  za: { open: 9, close: 13 },
  zo: { open: 0, close: 0 }
} as const;

export const companyInfo = {
  name: "Van Tilburg Kozijnen",
  phone: "31612345678", // Vervang met echt nummer
  email: "info@vantilburgkozijnen.nl",
  address: {
    street: "Straatnaam 123",
    postcode: "1234 AB",
    city: "Plaatsnaam",
    country: "Nederland"
  },
  social: {
    facebook: "https://facebook.com/vantilburgkozijnen",
    instagram: "https://instagram.com/vantilburgkozijnen",
    linkedin: "https://linkedin.com/company/vantilburgkozijnen"
  },
  appointments: {
    duration: [30, 60],
    calUsername: "van-tilburg-kozijnen",
    defaultMessage: "Ik wil graag een afspraak maken voor een vrijblijvend gesprek."
  },
  chat: {
    tawkId: "YOUR_TAWK_ID",
    welcomeMessage: "Welkom bij Van Tilburg Kozijnen! Hoe kunnen we u helpen?",
    offlineMessage: "We zijn momenteel niet beschikbaar. Laat een bericht achter en we nemen contact met u op."
  }
} as const;

export function isBusinessOpen() {
  const now = new Date();
  const days = ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'] as const;
  const currentDay = days[now.getDay()];
  const currentHour = now.getHours();
  
  return currentHour >= businessHours[currentDay].open && 
         currentHour < businessHours[currentDay].close;
}

export function getNextOpeningTime() {
  const now = new Date();
  const days = ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'] as const;
  let currentDay = now.getDay();
  let daysChecked = 0;

  while (daysChecked < 7) {
    const dayHours = businessHours[days[currentDay]];
    if (dayHours.open > 0) {
      const nextDate = new Date(now);
      nextDate.setDate(now.getDate() + daysChecked);
      nextDate.setHours(dayHours.open, 0, 0, 0);
      
      if (nextDate > now) {
        return nextDate;
      }
    }
    currentDay = (currentDay + 1) % 7;
    daysChecked++;
  }

  return null;
}
