// app/(pages)/home/data/AiEthics.ts

export interface EthicsCardProps {
  title: string;
  description: string;
  icon: string;
}

export interface AiEthicsProps {
  heading: string;
  subHeading: string;
  description: string;
  cards: EthicsCardProps[];
}

export const aiEthicsData: AiEthicsProps = {
  heading: "Built on the foundations of AI ethics and security",
  subHeading: "People first, always.",
  description: "That's why at LanguageKey, we're dedicated to data privacy and the responsible use of Artifical Intelligence",
  cards: [
    {
      title: "GDPR Compliant",
      description: "Our data handling systems and processes are independently audited and certified.",
      icon: "Shield"
    },
    {
      title: "Trust & Safety team",
      description: "A dedicated team ensures the protection of your data and ethical application of AI.",
      icon: "Lock"
    },
    {
      title: "Content Moderation",
      description: "We use a combination of human and AI moderation to safeguard our users.",
      icon: "Filter"
    },
    {
      title: "AI Policy & Regulations",
      description: "We engage with regulatory bodies and welcome robust AI policies and regulations.",
      icon: "FileText"
    }
  ]
};