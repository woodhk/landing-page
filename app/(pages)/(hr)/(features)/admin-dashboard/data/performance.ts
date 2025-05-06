export interface PerformanceFeature {
  title: string;
  description: string;
  image: string;
  learnMoreLink?: string;
}

export interface PerformanceSection {
  title: string;
  features: PerformanceFeature[];
}

const performanceData: PerformanceSection[] = [
  {
    title: "Individual",
    features: [
      {
        title: "Average Performance",
        description: "Monitor average performance of all learners in the organization.",
        image: "/ui-elements/averagePerformance.png",
        learnMoreLink: "#"
      },
      {
        title: "Performance Improvements",
        description: "Track the progress of learners and identify areas for improvement.",
        image: "/ui-elements/improvements.png",
        learnMoreLink: "#"
      },
      {
        title: "Mistake Improvements",
        description: "Identify improvements in common language mistakes",
        image: "/ui-elements/mistakeImprovements.png",
        learnMoreLink: "#"
      }
    ]
  },
  {
    title: "Cohort",
    features: [
      {
        title: "Top Learners",
        description: "Identify and recognize your top performing language learners across the organization.",
        image: "/ui-elements/topLearners.png",
        learnMoreLink: "#"
      },
      {
        title: "Power Learners",
        description: "Highlight individuals who consistently excel in language acquisition and practice.",
        image: "/ui-elements/powerLearners.png",
        learnMoreLink: "#"
      },
      {
        title: "Departments or Team Comparison",
        description: "Compare performance metrics across different teams and departments for friendly competition.",
        image: "/ui-elements/departmentComparison.png",
        learnMoreLink: "#"
      }
    ]
  }
];

export default performanceData;
