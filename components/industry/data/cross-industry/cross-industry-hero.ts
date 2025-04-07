import { HeroSection } from '../../types';
import { CrossIndustrySlug } from '../../types';

export interface CrossIndustryHeroData {
  id: string;
  name: string;
  slug: CrossIndustrySlug;
  hero: HeroSection;
}

export const crossIndustriesHeroData: CrossIndustryHeroData[] = [
  {
    id: 'c1',
    name: 'Administrative Support',
    slug: 'administrative-support',
    hero: {
      title: 'Keep Every Calendar Clear, And Every Message Even Clearer',
      description: 'Support your admin team with the spoken English needed to coordinate schedules, explain changes, and clarify instructions without hesitation.',
      secureAccessLink: '/cross-industry/administrative-support/access',
      brochureLink: '/cross-industry/administrative-support/brochure',
    },
  },
  {
    id: 'c2',
    name: 'Customer Support Staff',
    slug: 'customer-support-staff',
    hero: {
      title: 'Turn Every Support Call Into a Successful Customer Experience',
      description: 'Empower your customer support team with the Business English skills needed to resolve issues, build rapport, and deliver exceptional service across all channels.',
      secureAccessLink: '/cross-industry/customer-support-staff/access',
      brochureLink: '/cross-industry/customer-support-staff/brochure',
    },
  },
  {
    id: 'c3',
    name: 'Operations and Project Management',
    slug: 'operations-project-management',
    hero: {
      title: 'Deliver Projects On Time, Budget, and Scope—In Any Language',
      description: 'Equip your operations and project management teams with the Business English skills to lead initiatives, coordinate resources, and communicate effectively across global stakeholders.',
      secureAccessLink: '/cross-industry/operations-project-management/access',
      brochureLink: '/cross-industry/operations-project-management/brochure',
    },
  },
  // Additional cross-industry roles can be added here
];

export const getCrossIndustryBySlug = (slug: string): CrossIndustryHeroData | undefined => {
  return crossIndustriesHeroData.find(crossIndustry => crossIndustry.slug === slug);
};

export const getAllCrossIndustries = (): CrossIndustryHeroData[] => {
  return crossIndustriesHeroData;
}; 