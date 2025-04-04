export interface HeroSection {
  title: string;
  description: string;
  secureAccessLink: string;
  brochureLink: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  imageUrl: string;
}

export interface FeaturesSection {
  sectionTitle: string;
  flexibleCard: FeatureCard;
  focusedCard: FeatureCard;
}

export interface CourseCard {
  title: string;
  description: string;
  detailDescription?: string;
  imageUrl: string;
  outlineLink: string;
}

export interface CoursesSection {
  sectionTitle: string;
  sectionDescription: string;
  courseCards: CourseCard[];
  customCoursesLink: string;
}

export interface ConversationCard {
  tag: string;
  title: string;
  description: string;
  imageUrl: string;
  learnMoreLink: string;
}

export interface ConversationsSection {
  mainTitle: string;
  subtitle: string;
  rolePlaysCard: ConversationCard;
  coachingCard: ConversationCard;
  exercisesCard: ConversationCard;
}

export interface HRTab {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

export interface HRSection {
  mainTitle: string;
  subtitle: string;
  description: string;
  tabs: HRTab[];
}

export interface IndustryData {
  id: string;
  name: string;
  slug: string;
  hero: HeroSection;
  features: FeaturesSection;
  // We can add more sections here as needed
  // For example:
  // testimonials?: Testimonial[];
  // benefits?: Benefit[];
  // etc.
}

export type IndustrySlug = 'banking-finance' | 'shipping-logistics' | 'hotel-hospitality' | 'real-estate' | 'retail'; 