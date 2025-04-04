export interface HeroSection {
  title: string;
  description: string;
  secureAccessLink: string;
  brochureLink: string;
}

export interface IndustryData {
  id: string;
  name: string;
  slug: string;
  hero: HeroSection;
  // We can add more sections here as needed
  // For example:
  // testimonials?: Testimonial[];
  // features?: Feature[];
  // benefits?: Benefit[];
  // etc.
}

export type IndustrySlug = 'banking-finance' | 'shipping-logistics' | 'hotel-hospitality' | 'real-estate'; 