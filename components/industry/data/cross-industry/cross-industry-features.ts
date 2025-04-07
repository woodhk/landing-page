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
  {
    slug: 'marketing-communications',
    features: {
      sectionTitle: 'Flexible and Focused Training for Marketing and Communications Professionals',
      flexibleCard: {
        title: 'Flexible Learning for Any Marketing or Communications Professional',
        description: 'Team members can complete training sessions during content development processes, between campaign launches, or whenever their creative flow allows—ensuring continuous improvement without disrupting critical marketing timelines.',
        imageUrl: '/features/marketing-communications/flexible-learning.svg',
      },
      focusedCard: {
        title: 'Focused Training for Maximum Impact',
        description: 'Our training addresses the essential English-facing scenarios marketing professionals encounter daily. From pitching creative concepts to crafting persuasive content, we deliver targeted training that directly improves audience engagement and campaign effectiveness.',
        imageUrl: '/features/marketing-communications/focused-training.svg',
      },
    },
  },
  {
    slug: 'it-technical-support',
    features: {
      sectionTitle: 'Flexible and Focused Training for IT and Technical Support Professionals',
      flexibleCard: {
        title: 'Flexible Learning for Any IT or Technical Support Professional',
        description: 'Team members can access training sessions between support tickets, during system maintenance windows, or whenever their workload allows—ensuring continuous skill development without disrupting critical support operations.',
        imageUrl: '/features/it-technical-support/flexible-learning.svg',
      },
      focusedCard: {
        title: 'Focused Training for Maximum Impact',
        description: 'Our training addresses the essential English-facing scenarios technical professionals encounter daily. From explaining system errors to guiding users through complex procedures, we deliver targeted training that directly improves resolution times and user satisfaction.',
        imageUrl: '/features/it-technical-support/focused-training.svg',
      },
    },
  },
  {
    slug: 'finance',
    features: {
      sectionTitle: 'Flexible and Focused Training for Finance Professionals',
      flexibleCard: {
        title: 'Flexible Learning for Any Finance Professional',
        description: 'Team members can progress through training materials during non-peak periods, between reporting cycles, or whenever their schedule allows—ensuring continuous development without disrupting critical financial operations.',
        imageUrl: '/features/finance/flexible-learning.svg',
      },
      focusedCard: {
        title: 'Focused Training for Maximum Impact',
        description: 'Our training addresses the essential English-facing scenarios finance professionals encounter daily. From presenting financial results to explaining compliance requirements, we deliver targeted training that directly improves communication effectiveness and stakeholder confidence.',
        imageUrl: '/features/finance/focused-training.svg',
      },
    },
  },
  {
    slug: 'hr-onboarding-staff',
    features: {
      sectionTitle: 'Flexible and Focused Training for HR and Onboarding Professionals',
      flexibleCard: {
        title: 'Flexible Learning for Any HR Professional',
        description: 'Team members can engage with training modules between interviews, during recruitment cycles, or whenever their schedule permits—ensuring continuous skill development without disrupting critical people operations.',
        imageUrl: '/features/hr-onboarding-staff/flexible-learning.svg',
      },
      focusedCard: {
        title: 'Focused Training for Maximum Impact',
        description: 'Our training addresses the essential English-facing scenarios HR professionals encounter daily. From conducting interviews to explaining benefits packages, we deliver targeted training that directly improves employee experience and organizational effectiveness.',
        imageUrl: '/features/hr-onboarding-staff/focused-training.svg',
      },
    },
  },
  {
    slug: 'client-relationship',
    features: {
      sectionTitle: 'Flexible and Focused Training for Client Relationship Professionals',
      flexibleCard: {
        title: 'Flexible Learning for Any Client Management Professional',
        description: 'Account managers can progress through training between client meetings, during travel time, or whenever their schedule allows—ensuring continuous improvement without disrupting critical client relationships.',
        imageUrl: '/features/client-relationship/flexible-learning.svg',
      },
      focusedCard: {
        title: 'Focused Training for Maximum Impact',
        description: 'Our training addresses the essential English-facing scenarios client relationship managers encounter daily. From navigating difficult conversations to presenting new solutions, we deliver targeted training that directly improves client satisfaction and retention rates.',
        imageUrl: '/features/client-relationship/focused-training.svg',
      },
    },
  },
  {
    slug: 'sales-business-development',
    features: {
      sectionTitle: 'Flexible and Focused Training for Sales and Business Development Professionals',
      flexibleCard: {
        title: 'Flexible Learning for Any Sales Professional',
        description: 'Sales teams can complete training modules between calls, during travel time, or whenever their schedule permits—ensuring continuous improvement without disrupting critical deal cycles or prospect engagements.',
        imageUrl: '/features/sales-business-development/flexible-learning.svg',
      },
      focusedCard: {
        title: 'Focused Training for Maximum Impact',
        description: 'Our training addresses the essential English-facing scenarios sales professionals encounter daily. From articulating value propositions to handling objections, we deliver targeted training that directly improves conversion rates and accelerates deal velocity.',
        imageUrl: '/features/sales-business-development/focused-training.svg',
      },
    },
  },
  {
    slug: 'learning-development-staff',
    features: {
      sectionTitle: 'Flexible and Focused Training for Learning and Development Professionals',
      flexibleCard: {
        title: 'Flexible Learning for Any L&D Professional',
        description: 'Training teams can progress through modules between workshops, during preparation time, or whenever their schedule allows—ensuring continuous improvement without disrupting critical learning initiatives and development programs.',
        imageUrl: '/features/learning-development-staff/flexible-learning.svg',
      },
      focusedCard: {
        title: 'Focused Training for Maximum Impact',
        description: 'Our training addresses the essential English-facing scenarios L&D professionals encounter daily. From facilitating workshops to creating engaging materials, we deliver targeted training that directly improves instructional effectiveness and learning outcomes.',
        imageUrl: '/features/learning-development-staff/focused-training.svg',
      },
    },
  },
  {
    slug: 'team-department-leadership',
    features: {
      sectionTitle: 'Flexible and Focused Training for Team and Department Leaders',
      flexibleCard: {
        title: 'Flexible Learning for Any Leadership Level',
        description: 'Leaders can complete training modules between meetings, during travel time, or whenever their busy schedule allows—ensuring continuous development without disrupting critical management responsibilities and team oversight.',
        imageUrl: '/features/team-department-leadership/flexible-learning.svg',
      },
      focusedCard: {
        title: 'Focused Training for Maximum Impact',
        description: 'Our training addresses the essential English-facing scenarios leaders encounter daily. From conducting performance reviews to leading team meetings, we deliver targeted training that directly improves leadership effectiveness and organizational performance.',
        imageUrl: '/features/team-department-leadership/focused-training.svg',
      },
    },
  },
  // Additional cross-industry roles can be added here
];

export const getFeaturesByCrossIndustry = (slug: CrossIndustrySlug): FeaturesSection | undefined => {
  const crossIndustry = crossIndustryFeaturesData.find(item => item.slug === slug);
  return crossIndustry ? crossIndustry.features : undefined;
}; 