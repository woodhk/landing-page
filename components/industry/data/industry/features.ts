import { FeaturesSection } from '../../types';
import { IndustrySlug } from '../../types';

const commonImagePath = "/abstract-bg/imageBackground6.svg";

export const industryFeaturesData: Record<IndustrySlug, FeaturesSection> = {
  'banking-finance': {
    sectionTitle: 'Flexible and Focused Training for Busy Banking & Finance Professionals',
    flexibleCard: {
      title: 'Flexible Learning for Any Banking & Finance Professional',
      description: 'Staff can engage in training without the need for travel or coordinating schedules with trainers, allowing for uninterrupted progress at their convenience.',
      imageUrl: commonImagePath,
    },
    focusedCard: {
      title: 'Focused Training for Maximum Impact',
      description: 'We only cover the essential English-facing scenarios banking & finance professionals encounter with clients, customers, and colleagues. No wasted time, no unnecessary content, just targeted training that maximizes learning efficiency and company ROI.',
      imageUrl: commonImagePath,
    },
  },
  'shipping-logistics': {
    sectionTitle: 'Flexible and Focused Training for Busy Shipping & Logistics Professionals',
    flexibleCard: {
      title: 'Flexible Learning for Any Shipping & Logistic Professional',
      description: 'Staff can engage in training without the need for travel or coordinating schedules with trainers, allowing for uninterrupted progress at their convenience.',
      imageUrl: commonImagePath,
    },
    focusedCard: {
      title: 'Focused Training for Maximum Impact',
      description: 'We only cover the essential English-facing scenarios shipping & logistic professionals encounter with clients, customers, and colleagues. No wasted time, no unnecessary content, just targeted training that maximizes learning efficiency and company ROI.',
      imageUrl: commonImagePath,
    },
  },
  'hotel-hospitality': {
    sectionTitle: 'Flexible and Focused Training for Busy Hospitality Professionals',
    flexibleCard: {
      title: 'Flexible Learning for Any Staff Member',
      description: 'Staff can engage in training without the need for travel or coordinating schedules with trainers, allowing for uninterrupted progress at their convenience.',
      imageUrl: commonImagePath,
    },
    focusedCard: {
      title: 'Focused Training for Maximum Impact',
      description: 'We only cover the essential English-facing scenarios hospitality staff encounter with clients, customers, and colleagues. No wasted time, no unnecessary content, just targeted training that maximizes learning efficiency and company ROI.',
      imageUrl: commonImagePath,
    },
  },
  'real-estate': {
    sectionTitle: 'Flexible and Focused Training for Busy Real Estate Professionals',
    flexibleCard: {
      title: 'Flexible Learning for Any Staff Member',
      description: 'Staff can engage in training without the need for travel or coordinating schedules with trainers, allowing for uninterrupted progress at their convenience.',
      imageUrl: commonImagePath,
    },
    focusedCard: {
      title: 'Focused Training for Maximum Impact',
      description: 'We only cover the essential English-facing scenarios real estate professionals encounter with clients, customers, and colleagues. No wasted time, no unnecessary content, just targeted training that maximizes learning efficiency and company ROI.',
      imageUrl: commonImagePath,
    },
  },
  'retail': {
    sectionTitle: 'Flexible and Focused Training for Busy Retail Professionals',
    flexibleCard: {
      title: 'Flexible Learning for Any Staff Member',
      description: 'Staff can engage in training without the need for travel or coordinating schedules with trainers, allowing for uninterrupted progress at their convenience.',
      imageUrl: commonImagePath,
    },
    focusedCard: {
      title: 'Focused Training for Maximum Impact',
      description: 'We only cover the essential English-facing scenarios retail professionals encounter with clients, customers, and colleagues. No wasted time, no unnecessary content, just targeted training that maximizes learning efficiency and company ROI.',
      imageUrl: commonImagePath,
    },
  },
  'telecommunications': {
    sectionTitle: 'Flexible and Focused Training for Busy Telecommunication Professionals',
    flexibleCard: {
      title: 'Flexible Learning for Any Staff Member',
      description: 'Staff can engage in training without the need for travel or coordinating schedules with trainers, allowing for uninterrupted progress at their convenience.',
      imageUrl: commonImagePath,
    },
    focusedCard: {
      title: 'Focused Training for Maximum Impact',
      description: 'We only cover the essential English-facing scenarios telecom professionals encounter with clients, customers, and colleagues. No wasted time, no unnecessary content, just targeted training that maximizes learning efficiency and company ROI.',
      imageUrl: commonImagePath,
    },
  },
};

export const getFeaturesByIndustry = (industry: IndustrySlug): FeaturesSection => {
  return industryFeaturesData[industry];
}; 