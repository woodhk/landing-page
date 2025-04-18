import { HRSection } from '@/components/industry/types';

const commonImagePath = "/abstract-bg/imageBackground6.svg";

export const hrSectionData: HRSection = {
  mainTitle: "Designed For Learners",
  subtitle: "Loved by Human Resources",
  description: "FluentPro helps tailor learning, monitor staff progress, and showcase ROI with features built for HR and team leads.",
  tabs: [
    {
      id: "automated-onboarding",
      title: "Automated Onboarding",
      description: "Getting your team started is effortless—just send one email. Our magic link connects staff to your dashboard instantly, with no extra steps or wasted time.",
      link: "/training-onboarding",
      imageUrl: commonImagePath,
    },
    {
      id: "reports-analytics",
      title: "Reports & Analytics",
      description: "Gain insights into employee performance with detailed, real time analytics and reporting—designed to reduce HR workload, not add to it.",
      link: "/admin-dashboard",
      imageUrl: commonImagePath,
    },
    {
      id: "company-personalisation",
      title: "Company Personalisation",
      description: "Upload company documents related to your products, services, and policies to create realistic workplace role-plays. Each speaking scenario is designed to simulate real conversations, ensuring practical and relevant training.",
      link: "/company-personalisation",
      imageUrl: commonImagePath,
    },
  ],
};

export default hrSectionData; 