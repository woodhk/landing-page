import { FeaturesSection } from '../../types';
import { IndustrySlug } from '../../types';

const commonImagePath = "/abstract-bg/imageBackground6.svg";

// Common features for all industries
const commonFeatures = [
  {
    title: 'Reduce Miscommunication',
    description: '$12,500/year per employee is lost to poor communication. With job-relevant training, staff can make mistakes with our AI, not your clients.',
    iconName: 'MessageSquare'
  },
  {
    title: 'Reclaim Lost Productivity',
    description: 'Staff reclaim up to 7.5 hours a week by avoiding repeated explanations and misunderstandings.',
    iconName: 'Clock'
  },
  {
    title: 'Real World Practice',
    description: 'Practice real workplace conversations to avoid awkward misunderstandings and streamline team collaboration.',
    iconName: 'Users'
  }
];

// Common section title
const commonSectionTitle = 'Flexible and Focused Training';

// Function to generate mainDescription based on industry
const getMainDescription = (industry: string): string => {
  // Convert industry slug to display format (e.g., 'banking-finance' to 'banking & finance')
  const displayIndustry = industry
    .split('-')
    .map(word => word.trim())
    .join(' & ');
  
  return `Give your ${displayIndustry} staff the speaking practice they need to avoid misunderstandings, save time, and communicate with confidence.`;
};

export const industryFeaturesData: Record<IndustrySlug, FeaturesSection> = {
  'banking-finance': {
    sectionTitle: commonSectionTitle,
    mainDescription: getMainDescription('banking-finance'),
    features: commonFeatures,
    imageUrl: '/app-screenshots/reportsAnalytics.png'
  },
  'shipping-logistics': {
    sectionTitle: commonSectionTitle,
    mainDescription: getMainDescription('shipping-logistics'),
    features: commonFeatures,
    imageUrl: '/app-screenshots/reportsAnalytics.png'
  },
  'hotel-hospitality': {
    sectionTitle: commonSectionTitle,
    mainDescription: getMainDescription('hotel-hospitality'),
    features: commonFeatures,
    imageUrl: '/app-screenshots/reportsAnalytics.png'
  },
  'real-estate': {
    sectionTitle: commonSectionTitle,
    mainDescription: getMainDescription('real-estate'),
    features: commonFeatures,
    imageUrl: '/app-screenshots/reportsAnalytics.png'
  },
  'retail': {
    sectionTitle: commonSectionTitle,
    mainDescription: getMainDescription('retail'),
    features: commonFeatures,
    imageUrl: '/app-screenshots/reportsAnalytics.png'
  },
  'telecommunications': {
    sectionTitle: commonSectionTitle,
    mainDescription: getMainDescription('telecommunications'),
    features: commonFeatures,
    imageUrl: '/app-screenshots/reportsAnalytics.png'
  },
};

export const getFeaturesByIndustry = (industry: IndustrySlug): FeaturesSection => {
  return industryFeaturesData[industry];
}; 