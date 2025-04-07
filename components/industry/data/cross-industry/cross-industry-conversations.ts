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
  {
    slug: 'marketing-communications',
    conversations: {
      mainTitle: 'Marketing Conversations, Without The Pressure...',
      subtitle: 'Realistic Role-plays, real-time coaching and personalised language drills help Marketing and Communications professionals perfect their messaging in a safe environment',
      rolePlaysCard: {
        tag: 'Role-Play Scenarios',
        title: 'Train for Client Pitches & Campaign Presentations',
        description: 'From presenting creative concepts to explaining campaign metrics, FluentPro prepares your marketing team for the real conversations they handle daily with role-plays designed around authentic marketing and communications scenarios.',
        imageUrl: '/conversations/marketing-communications/role-plays.svg',
        learnMoreLink: '/cross-industry/marketing-communications/role-plays',
      },
      coachingCard: {
        tag: 'Real-time Coaching',
        title: 'Refine Your Messaging with AI-Powered Feedback',
        description: 'Whether pitching to clients, briefing creative teams, or presenting to executives, four specialized AI coaches work together to guide, correct, and assess every spoken professional interaction.',
        imageUrl: '/conversations/marketing-communications/coaching.svg',
        learnMoreLink: '/cross-industry/marketing-communications/coaches',
      },
      exercisesCard: {
        tag: 'Personalised Exercises',
        title: 'Dynamic Language Drills for Persuasive Communication',
        description: 'FluentPro\'s language drills target each team member\'s specific communication gaps, so they can focus only on what they need to improve—maximizing persuasiveness and messaging clarity.',
        imageUrl: '/conversations/marketing-communications/exercises.svg',
        learnMoreLink: '/cross-industry/marketing-communications/drills',
      },
    },
  },
  {
    slug: 'it-technical-support',
    conversations: {
      mainTitle: 'Technical Support Conversations, Without The Pressure...',
      subtitle: 'Realistic Role-plays, real-time coaching and personalised language drills help IT and Technical Support professionals communicate complex solutions clearly in a safe environment',
      rolePlaysCard: {
        tag: 'Role-Play Scenarios',
        title: 'Train for Troubleshooting & Technical Explanations',
        description: 'From diagnosing system issues to explaining complex technical concepts, FluentPro prepares your IT team for the real conversations they handle daily with role-plays designed around authentic technical support scenarios.',
        imageUrl: '/conversations/it-technical-support/role-plays.svg',
        learnMoreLink: '/cross-industry/it-technical-support/role-plays',
      },
      coachingCard: {
        tag: 'Real-time Coaching',
        title: 'Master Technical Communication with AI-Powered Feedback',
        description: 'Whether walking users through procedures, explaining error messages, or discussing security protocols, four specialized AI coaches work together to guide, correct, and assess every spoken technical interaction.',
        imageUrl: '/conversations/it-technical-support/coaching.svg',
        learnMoreLink: '/cross-industry/it-technical-support/coaches',
      },
      exercisesCard: {
        tag: 'Personalised Exercises',
        title: 'Dynamic Language Drills for Clear Technical Communication',
        description: 'FluentPro\'s language drills target each team member\'s specific communication challenges, so they can focus only on what they need to improve—transforming complex technical knowledge into clear, accessible explanations.',
        imageUrl: '/conversations/it-technical-support/exercises.svg',
        learnMoreLink: '/cross-industry/it-technical-support/drills',
      },
    },
  },
  {
    slug: 'finance',
    conversations: {
      mainTitle: 'Financial Conversations, Without The Pressure...',
      subtitle: 'Realistic Role-plays, real-time coaching and personalised language drills help Finance professionals communicate complex financial concepts clearly in a safe environment',
      rolePlaysCard: {
        tag: 'Role-Play Scenarios',
        title: 'Train for Financial Presentations & Client Consultations',
        description: 'From explaining financial statements to discussing investment strategies, FluentPro prepares your finance team for the real conversations they handle daily with role-plays designed around authentic financial scenarios.',
        imageUrl: '/conversations/finance/role-plays.svg',
        learnMoreLink: '/cross-industry/finance/role-plays',
      },
      coachingCard: {
        tag: 'Real-time Coaching',
        title: 'Perfect Your Financial Communication with AI-Powered Feedback',
        description: 'Whether presenting quarterly results, explaining tax implications, or discussing risk assessments, four specialized AI coaches work together to guide, correct, and assess every spoken financial interaction.',
        imageUrl: '/conversations/finance/coaching.svg',
        learnMoreLink: '/cross-industry/finance/coaches',
      },
      exercisesCard: {
        tag: 'Personalised Exercises',
        title: 'Dynamic Language Drills for Clear Financial Communication',
        description: 'FluentPro\'s language drills target each team member\'s specific communication challenges, so they can focus only on what they need to improve—transforming complex financial data into clear, accessible insights.',
        imageUrl: '/conversations/finance/exercises.svg',
        learnMoreLink: '/cross-industry/finance/drills',
      },
    },
  },
  {
    slug: 'hr-onboarding-staff',
    conversations: {
      mainTitle: 'HR Conversations, Without The Pressure...',
      subtitle: 'Realistic Role-plays, real-time coaching and personalised language drills help HR and Onboarding professionals navigate sensitive workplace conversations in a safe environment',
      rolePlaysCard: {
        tag: 'Role-Play Scenarios',
        title: 'Train for Interviews & Performance Discussions',
        description: 'From conducting job interviews to delivering performance feedback, FluentPro prepares your HR team for the real conversations they handle daily with role-plays designed around authentic human resources scenarios.',
        imageUrl: '/conversations/hr-onboarding-staff/role-plays.svg',
        learnMoreLink: '/cross-industry/hr-onboarding-staff/role-plays',
      },
      coachingCard: {
        tag: 'Real-time Coaching',
        title: 'Master Workplace Conversations with AI-Powered Feedback',
        description: 'Whether explaining benefits options, mediating conflicts, or welcoming new hires, four specialized AI coaches work together to guide, correct, and assess every spoken HR interaction.',
        imageUrl: '/conversations/hr-onboarding-staff/coaching.svg',
        learnMoreLink: '/cross-industry/hr-onboarding-staff/coaches',
      },
      exercisesCard: {
        tag: 'Personalised Exercises',
        title: 'Dynamic Language Drills for Clear and Empathetic Communication',
        description: 'FluentPro\'s language drills target each team member\'s specific communication challenges, so they can focus only on what they need to improve—balancing professionalism with empathy in every employee interaction.',
        imageUrl: '/conversations/hr-onboarding-staff/exercises.svg',
        learnMoreLink: '/cross-industry/hr-onboarding-staff/drills',
      },
    },
  },
  {
    slug: 'client-relationship',
    conversations: {
      mainTitle: 'Client Relationship Conversations, Without The Pressure...',
      subtitle: 'Realistic Role-plays, real-time coaching and personalised language drills help Client Relationship professionals navigate complex client conversations in a safe environment',
      rolePlaysCard: {
        tag: 'Role-Play Scenarios',
        title: 'Train for Client Meetings & Strategic Discussions',
        description: 'From conducting quarterly business reviews to handling sensitive contract negotiations, FluentPro prepares your client-facing teams for the real conversations they handle daily with role-plays designed around authentic client relationship scenarios.',
        imageUrl: '/conversations/client-relationship/role-plays.svg',
        learnMoreLink: '/cross-industry/client-relationship/role-plays',
      },
      coachingCard: {
        tag: 'Real-time Coaching',
        title: 'Enhance Client Interactions with AI-Powered Feedback',
        description: 'Whether handling difficult client questions, presenting business updates, or navigating renewal discussions, four specialized AI coaches work together to guide, correct, and assess every spoken client interaction.',
        imageUrl: '/conversations/client-relationship/coaching.svg',
        learnMoreLink: '/cross-industry/client-relationship/coaches',
      },
      exercisesCard: {
        tag: 'Personalised Exercises',
        title: 'Dynamic Language Drills for Persuasive and Diplomatic Communication',
        description: 'FluentPro\'s language drills target each team member\'s specific communication challenges, so they can focus only on what they need to improve—balancing assertiveness with diplomacy in every client interaction.',
        imageUrl: '/conversations/client-relationship/exercises.svg',
        learnMoreLink: '/cross-industry/client-relationship/drills',
      },
    },
  },
  // Additional cross-industry roles can be added here
];

export const getConversationsByCrossIndustry = (slug: CrossIndustrySlug): ConversationsSection | undefined => {
  const crossIndustry = crossIndustryConversationsData.find(item => item.slug === slug);
  return crossIndustry ? crossIndustry.conversations : undefined;
}; 