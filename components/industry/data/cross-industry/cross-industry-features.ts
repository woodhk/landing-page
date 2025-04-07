import { FeaturesSection } from '../../types';
import { CrossIndustrySlug } from '../../types';

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
  {
    slug: 'customer-support-staff',
    features: {
      sectionTitle: 'Flexible and Focused Training for Customer Support Professionals',
      flexibleCard: {
        title: 'Flexible Learning for Any Customer Support Professional',
        description: 'Support staff can complete training sessions between calls, during slower periods, or outside of working hours—ensuring consistent skill development without disrupting customer service operations.',
        imageUrl: '/features/customer-support-staff/flexible-learning.svg',
      },
      focusedCard: {
        title: 'Focused Training for Maximum Impact',
        description: 'Our training covers only the essential English-facing scenarios customer support professionals encounter daily. From handling complaints to explaining technical solutions, we deliver targeted training that directly improves customer satisfaction scores.',
        imageUrl: '/features/customer-support-staff/focused-training.svg',
      },
    },
  },
  {
    slug: 'operations-project-management',
    features: {
      sectionTitle: 'Flexible and Focused Training for Operations and Project Management Professionals',
      flexibleCard: {
        title: 'Flexible Learning for Any Operations or Project Management Professional',
        description: 'Team members can progress through training materials between meetings, during travel, or whenever their schedule allows—ensuring continuous improvement without disrupting critical project timelines.',
        imageUrl: '/features/operations-project-management/flexible-learning.svg',
      },
      focusedCard: {
        title: 'Focused Training for Maximum Impact',
        description: 'Our training addresses the essential English-facing scenarios project managers and operations specialists encounter daily. From stakeholder presentations to cross-functional team coordination, we deliver targeted training that directly improves project outcomes.',
        imageUrl: '/features/operations-project-management/focused-training.svg',
      },
    },
  },
  // Additional cross-industry roles can be added here
];

export const getFeaturesByCrossIndustry = (slug: CrossIndustrySlug): FeaturesSection | undefined => {
  const crossIndustry = crossIndustryFeaturesData.find(item => item.slug === slug);
  return crossIndustry ? crossIndustry.features : undefined;
}; 