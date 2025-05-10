export interface Feature {
  tag: string;
  title: string;
  description: string;
  image: string;
  buttonText?: string;
  href?: string;
}

export const features: Feature[] = [
  {
    tag: "Magic Link Technology",
    title: "Onboard Staff In Minutes",
    description: "Get your entire team started by sending one email. Our magic link connects staff to your dashboard instantly, with no extra steps or wasted time.",
    image: "/ui-elements/magicLink.png",
    buttonText: "Learn more",
    href: "/training-onboarding"
  },
  {
    tag: "Advanced Tailoring",
    title: "Personalise Training to Your Company",
    description: "Upload company documents related to your products, services, and policies to create realistic workplace role-plays. Each speaking scenario is designed to simulate real conversations, ensuring practical and relevant training.",
    image: "/ui-elements/companyPersonalisation.png",
    buttonText: "Learn more",
    href: "/company-personalisation"
  },
  {
    tag: "Admin Dashboard",
    title: "Track Progress & Minimize Admin Work",
    description: "Gain insights into employee performance with detailed, real time analytics and reporting—designed to reduce HR workload, not add to it.",
    image: "/ui-elements/reportsAnalytics.png",
    buttonText: "Learn more",
    href: "/admin-dashboard"
  },
  {
    tag: "Share Reports",
    title: "Export and Share Reports",
    description: "Share reports with department heads and executives to show the impact of your training.",
    image: "/ui-elements/shareReports.png"
  }
];
