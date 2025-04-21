export interface HeroSection {
  title: string;
  description: string;
  secureAccessLink: string;
  brochureLink: string;
  industryName: string;
  imageUrl: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  imageUrl: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface FeaturesSection {
  sectionTitle: string;
  mainDescription: string;
  features: Feature[];
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

export type IndustrySlug = 'banking-finance' | 'shipping-logistics' | 'hotel-hospitality' | 'real-estate' | 'retail' | 'telecommunications';

export type CrossIndustrySlug = 'administrative-support' | 'customer-support-staff' | 'operations-project-management' | 'marketing-communications' | 'it-technical-support' | 'finance' | 'hr-onboarding-staff' | 'client-relationship' | 'sales-business-development' | 'learning-development-staff' | 'team-department-leadership';

export type AllSlugs = IndustrySlug | CrossIndustrySlug; 