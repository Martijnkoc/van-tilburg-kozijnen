interface Guarantee {
  title: string;
  description: string;
  duration?: string;
  conditions?: string[];
}

export const guarantees: Record<string, Guarantee> = {
  'product': {
    title: 'Productgarantie',
    description: 'Wij staan volledig achter de kwaliteit van onze kozijnen en deuren. Daarom bieden wij een uitgebreide fabrieksgarantie op al onze producten.',
    duration: '10 jaar',
    conditions: [
      'Garantie op constructie en materiaal',
      'Garantie op kleurechtheid',
      'Garantie op hang- en sluitwerk',
      'Garantie op glasproducten'
    ]
  },
  'installation': {
    title: 'Montagegarantie',
    description: 'De montage van uw kozijnen wordt uitgevoerd door onze eigen vakbekwame monteurs. Op de montage krijgt u een uitgebreide garantie.',
    duration: '10 jaar',
    conditions: [
      'Garantie op waterdichtheid',
      'Garantie op luchtdichtheid',
      'Garantie op bevestiging',
      'Garantie op afwerking'
    ]
  },
  'service': {
    title: 'Service Garantie',
    description: 'Ook na de montage staan wij voor u klaar. Onze serviceafdeling is altijd bereikbaar voor vragen of eventuele nazorg.',
    conditions: [
      '24/7 bereikbaarheid bij calamiteiten',
      'Snelle response bij serviceverzoeken',
      'Vakkundige afhandeling van servicemeldingen',
      'Periodiek onderhoud mogelijk'
    ]
  }
};

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
    title: 'FSC® 100% Certificering',
    description: 'FSC® staat voor verantwoord bosbeheer wereldwijd. Deze certificering garandeert dat ons hout afkomstig is uit duurzaam beheerde bossen.',
    logo: '/images/certifications/fsc.png',
    benefits: [
      '100% verantwoord bosbeheer',
      'Bescherming van biodiversiteit',
      'Eerlijke arbeidsomstandigheden',
      'Volledige traceerbaarheid'
    ]
  },
  'pefc': {
    title: 'PEFC™ Certificering',
    description: 'PEFC™ is het grootste boscertificeringssysteem ter wereld. Het garandeert dat ons hout afkomstig is uit duurzaam beheerde bossen.',
    logo: '/images/certifications/pefc.png',
    benefits: [
      'Duurzaam bosbeheer',
      'Lokale gemeenschappen',
      'Milieubescherming',
      'Chain of Custody certificering'
    ]
  },
  'vca': {
    title: 'VCA Certificering',
    description: 'VCA staat voor veiligheid, gezondheid en milieu. Deze certificering waarborgt veilige werkomstandigheden en minimale milieubelasting.',
    logo: '/images/certifications/vca.png',
    benefits: [
      'Veilige werkprocessen',
      'Milieubewust werken',
      'Gecertificeerde medewerkers',
      'Continue verbetering'
    ]
  }
};
