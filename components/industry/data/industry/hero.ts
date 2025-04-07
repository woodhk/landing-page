import { HeroSection } from '../../types';
import { IndustrySlug } from '../../types';

export interface IndustryHeroData {
  id: string;
  name: string;
  slug: IndustrySlug;
  hero: HeroSection;
}

export const industriesHeroData: IndustryHeroData[] = [
  {
    id: '1',
    name: 'Banking & Finance',
    slug: 'banking-finance',
    hero: {
      title: 'Turn Language Barriers into Assets, Not Liabilities',
      description: 'Give your team the Business English Speaking skills needed to articulate complex financial insights persuasively and gain client trust.',
      secureAccessLink: '/industry/banking-finance/access',
      brochureLink: '/industry/banking-finance/brochure',
    },
  },
  {
    id: '2',
    name: 'Shipping & Logistics',
    slug: 'shipping-logistics',
    hero: {
      title: 'Deliver Clear Messages, Not Just Packages',
      description: 'Give staff the right Business English speaking skills to smoothly communicate with clients, suppliers, and partners, avoiding costly misunderstandings.',
      secureAccessLink: '/industry/shipping-logistics/access',
      brochureLink: '/industry/shipping-logistics/brochure',
    },
  },
  {
    id: '3',
    name: 'Hotel & Hospitality',
    slug: 'hotel-hospitality',
    hero: {
      title: 'Make Every Guest Interaction a Five-Star Experience',
      description: 'Help your staff resolve issues smoothly, make guests feel valued, and turn great service into lasting loyalty with confident Business English speaking skills.',
      secureAccessLink: '/industry/hotel-hospitality/access',
      brochureLink: '/industry/hotel-hospitality/brochure',
    },
  },
  {
    id: '4',
    name: 'Real Estate',
    slug: 'real-estate',
    hero: {
      title: 'Your Properties Are Premium. Your Staffs English Should Be Too.',
      description: 'Improve tenant interactions, close deals faster, and enhance team professionalism with tailored Business English training.',
      secureAccessLink: '/industry/real-estate/access',
      brochureLink: '/industry/real-estate/brochure',
    },
  },
  {
    id: '5',
    name: 'Retail',
    slug: 'retail',
    hero: {
      title: "Turn 'Can I Help You?' into 'Would You Like a Receipt?'",
      description: 'Give your retail staff the Business English speaking skills needed to handle customer inquiries with confidence—and increase sales.',
      secureAccessLink: '/industry/retail/access',
      brochureLink: '/industry/retail/brochure',
    },
  },
  {
    id: '6',
    name: 'Telecommunications',
    slug: 'telecommunications',
    hero: {
      title: "Deliver Strong English Communication, Not Just Bandwidth",
      description: 'Help your telecom staff speak clear Business English so they can easily communicate with clients, suppliers, and partners—preventing delays, service issues, and lost deals.',
      secureAccessLink: '/industry/telecommunications/access',
      brochureLink: '/industry/telecommunications/brochure',
    },
  },
];

export const getIndustryBySlug = (slug: string): IndustryHeroData | undefined => {
  return industriesHeroData.find(industry => industry.slug === slug);
};

export const getAllIndustries = (): IndustryHeroData[] => {
  return industriesHeroData;
}; 