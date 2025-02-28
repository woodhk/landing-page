// app/(pages)/home/data/AutomatedOnboarding.ts

export type OnboardingStep = {
  id: number;
  title: string;
  subtitle: string;
  content: {
    heading: string;
    description: string;
    imagePlaceholder: string;
  };
};

export const onboardingSteps: OnboardingStep[] = [
  {
    id: 1,
    title: "Create Account",
    subtitle: "Access Admin Panel in just a few clicks",
    content: {
      heading: "Create Account",
      description: "To access your admin dashboard, simply click the link provided by your Account Manager, enter the required details, and gain immediate access. Your dashboard will be set up in under a minute—seamless, instant, and entirely hassle-free.",
      imagePlaceholder: "Image of Account Creation Page"
    }
  },
  {
    id: 2,
    title: "Customise",
    subtitle: "Set KPIs and customise lessons to your specific company",
    content: {
      heading: "Customise",
      description: "Personalize training by uploading your company's materials—product guides, policies, or service details—so your staff can practice real-world scenarios relevant to their roles. Set weekly lesson goals for staff, and let FluentPro handle the rest, ensuring consistent progress while you stay focused on bigger priorities.",
      imagePlaceholder: "Split Image of Uploading company Documents and setting weekly goals"
    }
  },
  {
    id: 3,
    title: "Invite Staff",
    subtitle: "Invite staff through our magic link system",
    content: {
      heading: "Invite Staff",
      description: "Getting your team started is effortless—just send one email. Our magic link connects staff to your dashboard instantly, with no extra steps or wasted time.",
      imagePlaceholder: "Image of Inviting Staff Through Magic Link"
    }
  },
  {
    id: 4,
    title: "Monitor",
    subtitle: "Start tracking individual or cohort performance",
    content: {
      heading: "Monitor",
      description: "FluentPro's Admin Dashboard gives you instant access to detailed reports on every staff member's progress—no more waiting for end-of-month updates. Track individual and cohort performance effortlessly, compare department progress, and ensure your training investment is driving real results.",
      imagePlaceholder: "Image of Reports & Analytics Page"
    }
  }
];