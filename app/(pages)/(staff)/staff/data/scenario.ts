// Service Cards for Scenario section
export type serviceCard = {
  title: string;
  description: string;
  icon: string;
  href: string;
};

export const serviceCardsData: serviceCard[] = [
  {
    title: "Custom Courses & Lessons",
    description: "From HR to sales, we offer scenario based courses tailored to each job role. ",
    icon: "Folder",
    href: "/custom-courses",
  },
  {
    title: "AI Role-Plays",
    description: "Staff practice the conversations they have at work in a stress-free enviornment",
    icon: "MessageSquare",
    href: "/role-plays",
  },
  {
    title: "4 AI Coaches",
    description: "Four specialised AI coaches work together to guide, correct, and assess every interaction.",
    icon: "Users",
    href: "/ai-coaches",
  },
  {
    title: "Native Language Support",
    description: "Staff can spend more time learning and less time translating with native language support.",
    icon: "Globe",
    href: "/language-support",
  },
  {
    title: "Personalised Language Drills",
    description: "Our AI will dynamically create language drills that target mistakes the user made.",
    icon: "Crosshair",
    href: "/language-drills",
  },
  {
    title: "Gamified learning",
    description: "Keep staff motivated throughout their language learning journey.",
    icon: "Trophy",
    href: "/gamified-learning",
  },
];
