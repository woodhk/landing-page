import { ConversationsSection } from '../../types';
import { CrossIndustrySlug } from '../../types';

interface CrossIndustryConversationsData {
  slug: CrossIndustrySlug;
  conversations: ConversationsSection;
}

export const crossIndustryConversationsData: CrossIndustryConversationsData[] = [
  {
    slug: 'administrative-support',
    conversations: {
      mainTitle: 'Workplace Conversations, Without The Pressure...',
      subtitle: 'Realistic Role-plays, real-time coaching and personalised language drills help Administrative Support professionals navigate real-world conversations in a safe environment',
      rolePlaysCard: {
        tag: 'Role-Play Scenarios',
        title: 'Train for Internal Requests & Professional Correspondence',
        description: 'From managing executive calendars to responding to cross-departmental requests, FluentPro prepares your admin staff for the real conversations they handle daily with role-plays designed around authentic administrative scenarios.',
        imageUrl: '/abstract-bg/imageBackground6.svg',
        learnMoreLink: '/cross-industry/administrative-support/role-plays',
      },
      coachingCard: {
        tag: 'Real-time Coaching',
        title: 'Refine Every Response with AI-Powered Feedback',
        description: 'Whether answering calls, coordinating meetings, or communicating with executives, four specialized AI coaches work together to guide, correct, and assess every spoken interaction.',
        imageUrl: '/abstract-bg/imageBackground6.svg',
        learnMoreLink: '/cross-industry/administrative-support/coaches',
      },
      exercisesCard: {
        tag: 'Personalised Exercises',
        title: 'Dynamic Language Drills Personalised to Mistakes',
        description: 'FluentPro\'s language drills target each staff member\'s specific mistakes, so they can focus only on what they need to improve, not waste time on what they already know.',
        imageUrl: '/abstract-bg/imageBackground6.svg',
        learnMoreLink: '/cross-industry/administrative-support/drills',
      },
    },
  },
  // Additional cross-industry roles can be added here
];

export const getConversationsByCrossIndustry = (slug: CrossIndustrySlug): ConversationsSection | undefined => {
  const crossIndustry = crossIndustryConversationsData.find(item => item.slug === slug);
  return crossIndustry ? crossIndustry.conversations : undefined;
}; 