export interface ProcessStep {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Create Account",
    shortDescription: "Access Admin Panel in just a few clicks",
    description: "To access your admin dashboard, simply click the link provided by your Account Manager, enter the required details, and gain immediate access. Your dashboard will be set up in under a minute—seamless, instant, and entirely hassle-free.",
    image: "/abstract-bg/imageBackground5.svg",
  },
  {
    id: 2,
    title: "Customise",
    shortDescription: "Set KPIs and customise lessons to your specific company",
    description: "Personalize training by uploading your company's materials—product guides, policies, or service details—so your staff can practice real-world scenarios relevant to their roles. Set weekly lesson goals for staff, and let FluentPro handle the rest, ensuring consistent progress while you stay focused on bigger priorities.",
    image: "/abstract-bg/imageBackground5.svg",
  },
  {
    id: 3,
    title: "Invite Staff",
    shortDescription: "Invite staff through our magic link system",
    description: "Getting your team started is effortless—just send one email. Our magic link connects staff to your dashboard instantly, with no extra steps or wasted time.",
    image: "/abstract-bg/imageBackground5.svg",
  },
  {
    id: 4,
    title: "Monitor",
    shortDescription: "Start tracking individual or cohort performance",
    description: "FluentPro's Admin Dashboard gives you instant access to detailed reports on every staff member's progress—no more waiting for end-of-month updates. Track individual and cohort performance effortlessly, compare department progress, and ensure your training investment is driving real results.",
    image: "/abstract-bg/imageBackground5.svg",
  },
];
