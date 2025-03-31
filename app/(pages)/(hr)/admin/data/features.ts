export interface Feature {
  tag: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  href: string;
}

export const features: Feature[] = [
  {
    tag: "Magic Link Technology",
    title: "Automated Staff Onboarding",
    description: "Getting your team started is effortless—just send one email. Our magic link connects staff to your dashboard instantly, with no extra steps or wasted time.",
    image: "/app-screenshots/invite-staff.png",
    buttonText: "Learn more",
    href: "/staff/onboarding"
  },
  {
    tag: "Advanced Tailoring",
    title: "Company Specific Personalisation",
    description: "Upload company documents related to your products, services, and policies to create realistic workplace role-plays. Each speaking scenario is designed to simulate real conversations, ensuring practical and relevant training.",
    image: "/app-screenshots/upload.svg",
    buttonText: "Learn more",
    href: "/staff/company-personalisation"
  },
  {
    tag: "Admin Dashboard",
    title: "Track Progress & Minimize Admin Work",
    description: "Gain insights into employee performance with detailed, real time analytics and reporting—designed to reduce HR workload, not add to it.",
    image: "/app-screenshots/admin-dashboard.png",
    buttonText: "Learn more",
    href: "/staff/admin-dashboard"
  }
];
