import { FeaturesSection } from '../../types';
import { IndustrySlug } from '../../types';

const commonImagePath = "/abstract-bg/imageBackground6.svg";

export const industryFeaturesData: Record<IndustrySlug, FeaturesSection> = {
  'banking-finance': {
    sectionTitle: 'Flexible and Focused Training',
    mainDescription: 'FluentPro gives your banking & finance staff the speaking practice they need to avoid misunderstandings, save time, and communicate with confidence.',
    features: [
      {
        title: 'Reduce Miscommunication',
        description: '$12,500/year per employee is lost to poor communication. With job-relevant training, staff can make mistakes with our AI, not your clients.',
      },
      {
        title: 'Reclaim Lost Productivity',
        description: 'Staff reclaim up to 7.5 hours a week by avoiding repeated explanations and misunderstandings.',
      },
      {
        title: 'Real World Practice',
        description: 'Practice real workplace conversations to avoid awkward misunderstandings and streamline team collaboration.',
      },

    ]
  },
  'shipping-logistics': {
    sectionTitle: 'Use video to close more deals',
    mainDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    features: [
      {
        title: 'Engage prospects',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Personalize your pitches',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Inspire action',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      }
    ]
  },
  'hotel-hospitality': {
    sectionTitle: 'Use video to close more deals',
    mainDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    features: [
      {
        title: 'Engage prospects',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Personalize your pitches',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Inspire action',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      }
    ]
  },
  'real-estate': {
    sectionTitle: 'Use video to close more deals',
    mainDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    features: [
      {
        title: 'Engage prospects',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Personalize your pitches',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Inspire action',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      }
    ]
  },
  'retail': {
    sectionTitle: 'Use video to close more deals',
    mainDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    features: [
      {
        title: 'Engage prospects',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Personalize your pitches',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Inspire action',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      }
    ]
  },
  'telecommunications': {
    sectionTitle: 'Use video to close more deals',
    mainDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    features: [
      {
        title: 'Engage prospects',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Personalize your pitches',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Inspire action',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      }
    ]
  },
};

export const getFeaturesByIndustry = (industry: IndustrySlug): FeaturesSection => {
  return industryFeaturesData[industry];
}; 