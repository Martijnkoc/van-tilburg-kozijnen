import type { Certification } from '../types';

export const certifications: Certification[] = [
  {
    id: 'iso-9001',
    title: 'ISO 9001',
    description: 'Internationaal erkend kwaliteitsmanagementsysteem',
    validUntil: '2025-12-31',
    issuer: 'TÜV Nederland',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    category: 'kwaliteit'
  },
  {
    id: 'vca',
    title: 'VCA**',
    description: 'Veiligheid, gezondheid en milieu Checklist Aannemers',
    validUntil: '2025-06-30',
    issuer: 'KIWA Nederland',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    category: 'veiligheid'
  },
  {
    id: 'komo',
    title: 'KOMO',
    description: 'Kwaliteitsverklaring voor bouwproducten',
    validUntil: '2026-01-31',
    issuer: 'SKG-IKOB',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    category: 'kwaliteit'
  },
  {
    id: 'skh',
    title: 'SKH-KOMO',
    description: 'Certificaat voor houten gevelelementen',
    validUntil: '2025-09-30',
    issuer: 'SKH',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    category: 'productie'
  },
  {
    id: 'fscc',
    title: 'FSC®',
    description: 'Forest Stewardship Council® certificering voor duurzaam bosbeheer',
    validUntil: '2025-12-31',
    issuer: 'Control Union',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    category: 'duurzaamheid'
  }
];

export const certificationCategories = {
  kwaliteit: 'Kwaliteit',
  veiligheid: 'Veiligheid',
  productie: 'Productie',
  duurzaamheid: 'Duurzaamheid'
} as const;

export type CertificationCategory = keyof typeof certificationCategories;
