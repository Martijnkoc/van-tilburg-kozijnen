export interface Certification {
  id: string;
  title: string;
  description: string;
  validUntil: string;
  issuer: string;
  icon: string;
  category: 'kwaliteit' | 'veiligheid' | 'productie' | 'duurzaamheid';
}

export interface Certifications {
  [key: string]: Certification;
}

export interface Guarantee {
  id: string;
  title: string;
  description: string;
  duration: number;
  conditions: string[];
  icon: string;
}

export interface Guarantees {
  [key: string]: Guarantee;
}

export interface Project {
  title: string;
  description: string;
  category: string;
  images: string[];
  date: string;
  location: string;
  features?: string[];
}

export interface SeoProps {
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
  nofollow?: boolean;
}
