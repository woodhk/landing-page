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
  {
    slug: 'customer-support-staff',
    conversations: {
      mainTitle: 'Customer Support Conversations, Without The Pressure...',
      subtitle: 'Realistic Role-plays, real-time coaching and personalised language drills help Support professionals navigate real-world customer interactions in a safe environment',
      rolePlaysCard: {
        tag: 'Role-Play Scenarios',
        title: 'Train for Challenging Requests & Complex Problem Resolution',
        description: 'From handling complaints to explaining technical solutions, FluentPro prepares your support staff for the real conversations they handle daily with role-plays designed around authentic customer service scenarios.',
        imageUrl: '/conversations/customer-support-staff/role-plays.svg',
        learnMoreLink: '/cross-industry/customer-support-staff/role-plays',
      },
      coachingCard: {
        tag: 'Real-time Coaching',
        title: 'Improve Every Customer Interaction with AI-Powered Feedback',
        description: 'Whether addressing concerns, explaining policies, or handling escalations, four specialized AI coaches work together to guide, correct, and assess every spoken customer interaction.',
        imageUrl: '/conversations/customer-support-staff/coaching.svg',
        learnMoreLink: '/cross-industry/customer-support-staff/coaches',
      },
      exercisesCard: {
        tag: 'Personalised Exercises',
        title: 'Dynamic Language Drills Tailored to Individual Challenges',
        description: 'FluentPro\'s language drills target each support agent\'s specific communication gaps, so they can focus only on what they need to improve—maximizing efficiency and impact.',
        imageUrl: '/conversations/customer-support-staff/exercises.svg',
        learnMoreLink: '/cross-industry/customer-support-staff/drills',
      },
    },
  },
  {
    slug: 'operations-project-management',
    conversations: {
      mainTitle: 'Project Management Conversations, Without The Pressure...',
      subtitle: 'Realistic Role-plays, real-time coaching and personalised language drills help Operations and Project Management professionals navigate complex stakeholder conversations in a safe environment',
      rolePlaysCard: {
        tag: 'Role-Play Scenarios',
        title: 'Train for Stakeholder Updates & Cross-Functional Collaboration',
        description: 'From presenting progress reports to negotiating resource constraints, FluentPro prepares your project teams for the real conversations they handle daily with role-plays designed around authentic project management scenarios.',
        imageUrl: '/conversations/operations-project-management/role-plays.svg',
        learnMoreLink: '/cross-industry/operations-project-management/role-plays',
      },
      coachingCard: {
        tag: 'Real-time Coaching',
        title: 'Perfect Your Delivery with AI-Powered Feedback',
        description: 'Whether facilitating team meetings, escalating issues, or presenting to executives, four specialized AI coaches work together to guide, correct, and assess every spoken professional interaction.',
        imageUrl: '/conversations/operations-project-management/coaching.svg',
        learnMoreLink: '/cross-industry/operations-project-management/coaches',
      },
      exercisesCard: {
        tag: 'Personalised Exercises',
        title: 'Dynamic Language Drills Focused on Professional Growth',
        description: 'FluentPro\'s language drills target each team member\'s specific communication gaps, so they can focus only on what they need to improve—maximizing productivity and leadership effectiveness.',
        imageUrl: '/conversations/operations-project-management/exercises.svg',
        learnMoreLink: '/cross-industry/operations-project-management/drills',
      },
    },
  },
  // Additional cross-industry roles can be added here
];

export const getConversationsByCrossIndustry = (slug: CrossIndustrySlug): ConversationsSection | undefined => {
  const crossIndustry = crossIndustryConversationsData.find(item => item.slug === slug);
  return crossIndustry ? crossIndustry.conversations : undefined;
}; 