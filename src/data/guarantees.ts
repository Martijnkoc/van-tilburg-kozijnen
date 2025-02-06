import type { Guarantee } from '../types';

export const guarantees: Guarantee[] = [
  {
    id: 'kozijnen',
    title: 'Kozijnen Garantie',
    description: 'Garantie op materiaal en constructie van onze kozijnen',
    duration: 10,
    conditions: [
      'Normaal gebruik en onderhoud volgens voorschriften',
      'Jaarlijkse inspectie en onderhoud',
      'Geen aanpassingen door derden'
    ],
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
  },
  {
    id: 'montage',
    title: 'Montage Garantie',
    description: 'Garantie op vakkundige montage en installatie',
    duration: 5,
    conditions: [
      'Installatie door ons erkende monteurs',
      'Geen aanpassingen aan montage door derden',
      'Gebruik volgens voorschriften'
    ],
    icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4'
  },
  {
    id: 'hang-sluitwerk',
    title: 'Hang- en Sluitwerk Garantie',
    description: 'Garantie op alle bewegende delen en sluitingen',
    duration: 2,
    conditions: [
      'Regelmatig onderhoud volgens voorschriften',
      'Geen overbelasting',
      'Normaal gebruik'
    ],
    icon: 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'
  },
  {
    id: 'glaswerk',
    title: 'Glaswerk Garantie',
    description: 'Garantie op isolatieglas en beglazing',
    duration: 10,
    conditions: [
      'Geen mechanische beschadiging',
      'Normale weersomstandigheden',
      'Volgens voorschriften geplaatst'
    ],
    icon: 'M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
  }
];

export const certifications = {
  'komo': {
    title: 'KOMO Certificering',
    description: 'KOMO staat voor onbetwiste kwaliteit in de bouw. Deze certificering waarborgt dat onze producten en processen voldoen aan de hoogste kwaliteitseisen.',
    logo: '/images/certifications/komo.png',
    benefits: [
      'Onafhankelijke kwaliteitscontrole',
      'Voldoet aan alle bouwnormen',
      'Continue procesverbetering',
      'Gegarandeerde productkwaliteit'
    ]
  },
  'skh': {
    title: 'SKH Certificering',
    description: 'SKH is een toonaangevend certificatie-instituut in de kozijnenbranche. Deze certificering bevestigt onze expertise en vakmanschap.',
    logo: '/images/certifications/skh.svg',
    benefits: [
      'Expertise in kozijnen',
      'Voldoet aan alle normen',
      'Regelmatige controles',
      'Gecertificeerd vakmanschap'
    ]
  },
  'fsc': {
    title: 'FSC 100% Certificering',
    description: 'FSC staat voor verantwoord bosbeheer wereldwijd. Deze certificering garandeert dat ons hout afkomstig is uit duurzaam beheerde bossen.',
    logo: '/images/certifications/fsc.png',
    benefits: [
      '100% verantwoord bosbeheer',
      'Bescherming van biodiversiteit',
      'Eerlijke arbeidsomstandigheden',
      'Volledige traceerbaarheid'
    ]
  },
  'pefc': {
    title: 'PEFC Certificering',
    description: 'PEFC is het grootste boscertificeringssysteem ter wereld. Het garandeert dat ons hout afkomstig is uit duurzaam beheerde bossen.',
    logo: '/images/certifications/pefc.png',
    benefits: [
      'Duurzaam bosbeheer',
      'Lokale gemeenschappen',
      'Milieubescherming',
      'Chain of Custody certificering'
    ]
  }
};
