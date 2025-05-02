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
    title: "Invite Staff",
    shortDescription: "Invite staff through our magic link system",
    description: "Getting your team started is effortless—just send one email. Our magic link connects staff to your dashboard instantly, with no extra steps or wasted time.",
    image: "/app-screenshots/inviteStaff.png",
  },
  {
    id: 2,
    title: "Set Weekly Targets",
    shortDescription: "Assign weekly targets to each staff member",
    description: "Set weekly lesson goals for each staff member, ensuring consistent progress while you stay focused on other priorities.",
    image: "/app-screenshots/setWeeklyGoals.png",
  },
  {
    id: 3,
    title: "Manage Sign Ups",
    shortDescription: "Manage accepted and pending invites",
    description: "Manage training invites by viewing staff that have signed up or resend the magic link to pending invites.",
    image: "/app-screenshots/manageAccount.png",
  },
  {
    id: 4,
    title: "Monitor Progress",
    shortDescription: "Start tracking individual or cohort performance",
    description: "Start tracking individual or cohort performance effortlessly, compare department progress, and ensure your training investment is driving real results.",
    image: "/app-screenshots/reportsAnalytics.png",
  },
];
