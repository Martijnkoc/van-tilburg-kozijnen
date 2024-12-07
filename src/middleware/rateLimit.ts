import rateLimit from 'express-rate-limit';

export const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minuten
  max: 5, // max 5 pogingen per IP
  message: 'Te veel aanvragen vanaf dit IP adres, probeer het later opnieuw.',
  standardHeaders: true,
  legacyHeaders: false,
});

export const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 uur
  max: 10, // max 10 pogingen per IP
  message: 'Te veel contact aanvragen vanaf dit IP adres, probeer het later opnieuw.',
  standardHeaders: true,
  legacyHeaders: false,
});
