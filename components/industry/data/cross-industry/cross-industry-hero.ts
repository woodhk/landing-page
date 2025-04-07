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
  // Additional cross-industry roles can be added here
];

export const getCrossIndustryBySlug = (slug: string): CrossIndustryHeroData | undefined => {
  return crossIndustriesHeroData.find(crossIndustry => crossIndustry.slug === slug);
};

export const getAllCrossIndustries = (): CrossIndustryHeroData[] => {
  return crossIndustriesHeroData;
}; 