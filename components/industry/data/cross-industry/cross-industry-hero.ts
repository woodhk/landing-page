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
  {
    id: 'c4',
    name: 'Marketing and Communications',
    slug: 'marketing-communications',
    hero: {
      title: 'Craft Messages That Resonate—In Any Language',
      description: 'Empower your marketing and communications teams with the Business English fluency to create compelling content, engage audiences, and build your brand across global markets.',
      secureAccessLink: '/cross-industry/marketing-communications/access',
      brochureLink: '/cross-industry/marketing-communications/brochure',
    },
  },
  {
    id: 'c5',
    name: 'IT and Technical Support',
    slug: 'it-technical-support',
    hero: {
      title: 'Explain Complex Tech Solutions with Perfect Clarity',
      description: 'Equip your IT and technical support teams with the Business English skills to troubleshoot issues, communicate solutions, and provide seamless support to users across your global organization.',
      secureAccessLink: '/cross-industry/it-technical-support/access',
      brochureLink: '/cross-industry/it-technical-support/brochure',
    },
  },
  {
    id: 'c6',
    name: 'Finance',
    slug: 'finance',
    hero: {
      title: 'Communicate Financial Insights with Confidence and Clarity',
      description: 'Provide your finance professionals with the Business English skills to present financial data, explain complex concepts, and guide strategic decisions across your global organization.',
      secureAccessLink: '/cross-industry/finance/access',
      brochureLink: '/cross-industry/finance/brochure',
    },
  },
  {
    id: 'c7',
    name: 'HR and Onboarding Staff',
    slug: 'hr-onboarding-staff',
    hero: {
      title: 'Connect and Develop Talent with Empathy and Precision',
      description: 'Equip your HR and onboarding teams with the Business English skills to conduct meaningful interviews, deliver effective feedback, and create exceptional employee experiences at every stage of the talent lifecycle.',
      secureAccessLink: '/cross-industry/hr-onboarding-staff/access',
      brochureLink: '/cross-industry/hr-onboarding-staff/brochure',
    },
  },
  {
    id: 'c8',
    name: 'Client Relationship & Account Management Staff',
    slug: 'client-relationship',
    hero: {
      title: 'Build Client Trust and Loyalty Through Effective Communication',
      description: 'Empower your client relationship and account management teams with the Business English skills to strengthen partnerships, handle high-stakes conversations, and deliver exceptional client experiences that drive retention and growth.',
      secureAccessLink: '/cross-industry/client-relationship/access',
      brochureLink: '/cross-industry/client-relationship/brochure',
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