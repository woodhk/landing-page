// Staff Audience
export type staff = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export const staffData: staff[] = [
  {
    title: "Fluentpro for Staff",
    description: "74% of staff say they would find their job easier if they had better English. Explore our AI-powered features designed to improve your employees' English.",
    image: "/app-screenshots/fp-computer.svg",
    href: "/staff",
  },
];

// HR Audience
export type hr = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export const hrData: hr[] = [
  {
    title: "Fluentpro for HR",
    description: "Training, onboarding, and proving ROI can feel hard to quantify. Explore how FluentPro helps you tailor learning, monitor staff progress, and showcase ROI with features built for HR and team leads.",
    image: "/app-screenshots/fp-computer.svg",
    href: "/admin",
  },
];