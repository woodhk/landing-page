import { FeaturesSection } from '../types';
import { CrossIndustrySlug } from '../types';

interface CrossIndustryFeaturesData {
  slug: CrossIndustrySlug;
  features: FeaturesSection;
}

export const crossIndustryFeaturesData: CrossIndustryFeaturesData[] = [
  {
    slug: 'administrative-support',
    features: {
      sectionTitle: 'Flexible and Focused Training for Busy Administrative Support Professionals',
      flexibleCard: {
        title: 'Flexible Learning for Any Administrative Support Professional',
        description: 'Staff can engage in training without the need for travel or coordinating schedules with trainers, allowing for uninterrupted progress at their convenience.',
        imageUrl: '/abstract-bg/imageBackground6.svg',
      },
      focusedCard: {
        title: 'Focused Training for Maximum Impact',
        description: 'We only cover the essential English-facing scenarios admin support professionals encounter with clients, customers, and colleagues. No wasted time, no unnecessary content, just targeted training that maximizes learning efficiency and company ROI.',
        imageUrl: '/abstract-bg/imageBackground6.svg',
      },
    },
  },
  // Additional cross-industry roles can be added here
];

export const getFeaturesByCrossIndustry = (slug: CrossIndustrySlug): FeaturesSection | undefined => {
  const crossIndustry = crossIndustryFeaturesData.find(item => item.slug === slug);
  return crossIndustry ? crossIndustry.features : undefined;
}; 