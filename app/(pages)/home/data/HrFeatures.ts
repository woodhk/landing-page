export interface HrFeature {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imagePlaceholder: string;
  isImageRight?: boolean;
  tag?: string;
  highlights: string[];
}

export const hrFeatures: HrFeature[] = [
  {
    id: 1,
    title: "Track Progress & Minimize Admin Work",
    subtitle: "Admin Dashboard",
    description: "Gain insights into employee performance with detailed, real time analytics and reporting—designed to reduce HR workload, not add to it.",
    imagePlaceholder: "Image of HR Dashboard showing cohort and individual statistics",
    isImageRight: false,
    tag: "Admin Dashboard",
    highlights: [
      "Real-time performance analytics",
      "Automated progress tracking",
      "Simplified compliance reporting"
    ]
  },
  {
    id: 2,
    title: "Flexible Learning for Any Staff Member",
    subtitle: "24/7 Access",
    description: "Staff can engage in training without the need for travel or coordinating schedules with trainers, allowing for uninterrupted progress at their convenience.",
    imagePlaceholder: "Image of User/Staff Dashboard",
    isImageRight: true,
    tag: "24/7 Access",
    highlights: [
      "Learn from anywhere",
      "Self-paced",
      "Continuous improvement"
    ]
  },
  {
    id: 3,
    title: "Focused Training for Maximum Impact",
    subtitle: "Business English Focused",
    description: "We don't cover general Business English—only the essential English Business scenarios you'll encounter with clients, customers, and colleagues. No wasted time, no unnecessary content—just targeted training that maximizes learning efficiency and company ROI.",
    imagePlaceholder: "Image of Program Page showing Users Assigned and Upcoming Courses",
    isImageRight: false,
    tag: "Business English Focused",
    highlights: [
      "Industry-specific vocabulary",
      "Scenario-based learning",
      "Measurable ROI"
    ]
  },
  {
    id: 4,
    title: "Company Specific Personalisation",
    subtitle: "Advanced Tailoring",
    description: "Upload company documents related to your products, services, and policies to create realistic workplace role-plays. Each speaking scenario is designed to simulate real conversations, ensuring practical and relevant training.",
    imagePlaceholder: "Image showing part of the HR Dashboard where they upload Company Documents and assign it to a role",
    isImageRight: true,
    tag: "Advanced Tailoring",
    highlights: [
      "Company documents",
      "Assign to any role",
      "Company specific role plays"
    ]
  }
];

export default hrFeatures;