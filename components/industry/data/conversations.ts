import { ConversationsSection } from '../types';
import { IndustrySlug } from '../types';

const commonImagePath = "/abstract-bg/imageBackground6.svg";

export const bankingFinanceConversations: ConversationsSection = {
  mainTitle: "Workplace Conversations, Without The Pressure...",
  subtitle: "Realistic Role-plays, real-time coaching and personalised language drills help Banking and Finance professionals navigate real-world conversations in a safe environment",
  rolePlaysCard: {
    tag: "Role-Play Scenarios",
    title: "Train for Client Calls & Boardroom Discussions",
    description: "From high-stakes negotiations to compliance discussions, Fluentpro trains your team for the conversations they face daily with real-world, banking & finance role-plays.",
    imageUrl: commonImagePath,
    learnMoreLink: "/role-plays",
  },
  coachingCard: {
    tag: "Real-time Coaching",
    title: "Refine Every Response with AI-Powered Feedback",
    description: "Whether explaining financial products, or negotiating deals, four specialised AI coaches work together to guide, correct, and assess every interaction",
    imageUrl: commonImagePath,
    learnMoreLink: "/coaches",
  },
  exercisesCard: {
    tag: "Personalised Exercises",
    title: "Dynamic Language Drills Personalised to Mistakes",
    description: "FluentPro's language drills target each staff member's specific mistakes, so they can focus only on what they need to improve, not waste time on what they already know.",
    imageUrl: commonImagePath,
    learnMoreLink: "/language-drills",
  },
};

export const shippingLogisticsConversations: ConversationsSection = {
  mainTitle: "Workplace Conversations, Without The Pressure...",
  subtitle: "Realistic Role-plays, real-time coaching and personalised language drills help Shipping & Logistic professionals navigate real-world conversations in a safe environment",
  rolePlaysCard: {
    tag: "Role-Play Scenarios",
    title: "Train for Client Calls & Logistics Negotiations",
    description: "From handling enquiries to contract negotiations, Fluentpro trains your team for the conversations they face daily with real-world, logistic role-plays.",
    imageUrl: commonImagePath,
    learnMoreLink: "/role-plays",
  },
  coachingCard: {
    tag: "Real-time Coaching",
    title: "Refine Every Response with AI-Powered Feedback",
    description: "Whether coordinating shipments, resolving issues, or negotiating rates, our four specialised AI coaches work together to guide, correct, and assess every staff's response.",
    imageUrl: commonImagePath,
    learnMoreLink: "/coaches",
  },
  exercisesCard: {
    tag: "Personalised Exercises",
    title: "Dynamic Language Drills Personalised to Mistakes",
    description: "FluentPro's language drills target each staff member's specific mistakes, so they can focus only on what they need to improve, not waste time on what they already know.",
    imageUrl: commonImagePath,
    learnMoreLink: "/language-drills",
  },
};

export const hospitalityConversations: ConversationsSection = {
  mainTitle: "Guest Interactions, Without The Pressure...",
  subtitle: "Realistic Role-plays, real-time coaching and personalised language drills help hospitality professionals navigate real-world conversations in a safe environment",
  rolePlaysCard: {
    tag: "Tailored for Hotel Professionals",
    title: "Train for Guest Interactions & Service Excellence",
    description: "From handling guest inquiries to reservation requests, Fluentpro trains your team for the conversations they face daily with real-world, hopitality role-plays.",
    imageUrl: commonImagePath,
    learnMoreLink: "/role-plays",
  },
  coachingCard: {
    tag: "Real-time Coaching",
    title: "Refine Every Conversation with AI-Powered Feedback",
    description: "Whether resolving complaints, or upselling services, our four specialised AI coaches work together to guide, correct, and assess every staff's response.",
    imageUrl: commonImagePath,
    learnMoreLink: "/coaches",
  },
  exercisesCard: {
    tag: "Personalised Exercises",
    title: "Dynamic Language Drills Personalised to Mistakes",
    description: "FluentPro's language drills target each staff member's specific mistakes, so they can focus only on what they need to improve, not waste time on what they already know.",
    imageUrl: commonImagePath,
    learnMoreLink: "/language-drills",
  },
};

export const realEstateConversations: ConversationsSection = {
  mainTitle: "Workplace Conversations Without The Pressure...",
  subtitle: "Realistic Role-plays, real-time coaching and personalised language drills help Real Estate professionals navigate real-world conversations in a safe environment",
  rolePlaysCard: {
    tag: "Tailored for Real Estate Professionals",
    title: "Train for Client Interactions & Property Negotiations",
    description: "From handling property inquiries to client negotiations, Fluentpro trains your team for the conversations they face daily with real world, real estate role-plays.",
    imageUrl: commonImagePath,
    learnMoreLink: "/role-plays",
  },
  coachingCard: {
    tag: "Real-time Coaching",
    title: "Refine Every Conversation with AI-Powered Feedback",
    description: "Whether addressing client concerns, or sales interactions, our four specialised AI coaches work together to guide, correct, and assess every staff's response.",
    imageUrl: commonImagePath,
    learnMoreLink: "/coaches",
  },
  exercisesCard: {
    tag: "Personalised Exercises",
    title: "Dynamic Language Drills Personalised to Mistakes",
    description: "FluentPro's language drills target each staff member's specific mistakes, so they can focus only on what they need to improve, not waste time on what they already know.",
    imageUrl: commonImagePath,
    learnMoreLink: "/language-drills",
  },
};

export const industryConversationsData: Record<IndustrySlug, ConversationsSection> = {
  'banking-finance': bankingFinanceConversations,
  'shipping-logistics': shippingLogisticsConversations,
  'hotel-hospitality': hospitalityConversations,
  'real-estate': realEstateConversations,
};

export const getConversationsByIndustry = (industry: IndustrySlug): ConversationsSection => {
  return industryConversationsData[industry];
}; 