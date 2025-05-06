export interface Admin {
  tag: string;
  title: string;
  description: string;
  image: string;
  href?: string;
}

export const adminFeatures: Admin[] = [
  {
    tag: "Seat Tracking",
    title: "Make Informed Training Decisions",
    description: "Track available seats, waitlisted staff, and active learners to plan future training rollouts based on current seat utilization.",
    image: "/ui-elements/seatTracking.png",
    href: "/training-onboarding"
  },
  {
    tag: "Active vs Inactive Users",
    title: "Maximise Training Usage",
    description: "Keep training seats filled with motivated, active learners by automatically removing inactive users and enrolling staff on the training waiting list.",
    image: "/ui-elements/inactiveUsers.png",
    href: "/company-personalisation"
  },
  {
    tag: "Share Reports",
    title: "Export and Share Reports",
    description: "Share reports with department heads and executives to show the impact of your training.",
    image: "/ui-elements/shareReports.png"
  }
];
