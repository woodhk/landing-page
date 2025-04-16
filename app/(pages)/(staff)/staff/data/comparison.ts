// fluentProComparisonData.ts

// Define the types for our data structure
export interface ComparisonFeature {
  groupTitle: string;
  feature: string;
  fluentPro: "✓" | "-" | "coming soon";
  oneOnOneCoaching: "✓" | "-";
  classroomTraining: "✓" | "-";
  otherAIApps: "✓" | "-";
}

// Define header styling configuration
export interface HeaderConfig {
  highlighted: boolean;
  showCrown: boolean;
}

export interface GroupHeaderConfig {
  groupTitle: string;
  fluentPro: HeaderConfig;
  oneOnOneCoaching: HeaderConfig;
  classroomTraining: HeaderConfig;
  otherAIApps: HeaderConfig;
}

// Export the data as a strongly-typed array
export const comparisonData: ComparisonFeature[] = [
  {
    groupTitle: "Personalization & Adaptability",
    feature: "Job-specific training content",
    fluentPro: "✓",
    oneOnOneCoaching: "✓",
    classroomTraining: "-",
    otherAIApps: "-"
  },
  {
    groupTitle: "Personalization & Adaptability",
    feature: "Personalised feedback",
    fluentPro: "✓",
    oneOnOneCoaching: "✓",
    classroomTraining: "-",
    otherAIApps: "✓"
  },
  {
    groupTitle: "Personalization & Adaptability",
    feature: "Customized learning paths for each employee",
    fluentPro: "✓",
    oneOnOneCoaching: "✓",
    classroomTraining: "-",
    otherAIApps: "-"
  },
  {
    groupTitle: "Personalization & Adaptability",
    feature: "Supports different proficiency levels",
    fluentPro: "✓",
    oneOnOneCoaching: "✓",
    classroomTraining: "-",
    otherAIApps: "✓"
  },
  {
    groupTitle: "Personalization & Adaptability",
    feature: "Company-specific personalisation",
    fluentPro: "✓",
    oneOnOneCoaching: "✓",
    classroomTraining: "✓",
    otherAIApps: "-"
  },
  
  // Progress Tracking & Reporting section
  {
    groupTitle: "Progress Tracking & Reporting",
    feature: "Real time performance analytics",
    fluentPro: "✓",
    oneOnOneCoaching: "-",
    classroomTraining: "-",
    otherAIApps: "✓"
  },
  {
    groupTitle: "Progress Tracking & Reporting",
    feature: "General English Improvements (e.g. grammar, pronunciation)",
    fluentPro: "✓",
    oneOnOneCoaching: "✓",
    classroomTraining: "-",
    otherAIApps: "✓"
  },
  {
    groupTitle: "Progress Tracking & Reporting",
    feature: "Business English Improvements (e.g. soft skills, clarity, tone)",
    fluentPro: "✓",
    oneOnOneCoaching: "✓",
    classroomTraining: "-",
    otherAIApps: "-"
  },
  {
    groupTitle: "Progress Tracking & Reporting",
    feature: "Exportable progress reports (e.g. CSV)",
    fluentPro: "✓",
    oneOnOneCoaching: "-",
    classroomTraining: "-",
    otherAIApps: "✓"
  },
  {
    groupTitle: "Progress Tracking & Reporting",
    feature: "Individual progress tracking",
    fluentPro: "✓",
    oneOnOneCoaching: "✓",
    classroomTraining: "-",
    otherAIApps: "✓"
  },
  
  {
    groupTitle: "Scalability & Accessibility",
    feature: "24/7 Access",
    fluentPro: "✓",
    oneOnOneCoaching: "-",
    classroomTraining: "-",
    otherAIApps: "✓"
  },
  {
    groupTitle: "Scalability & Accessibility",
    feature: "Supports large teams simultaneously",
    fluentPro: "✓",
    oneOnOneCoaching: "-",
    classroomTraining: "✓",
    otherAIApps: "✓"
  },
  {
    groupTitle: "Scalability & Accessibility",
    feature: "Easy onboarding and user management",
    fluentPro: "✓",
    oneOnOneCoaching: "-",
    classroomTraining: "-",
    otherAIApps: "✓"
  },
  {
    groupTitle: "Scalability & Accessibility",
    feature: "Affordable per-user cost at scale",
    fluentPro: "✓",
    oneOnOneCoaching: "-",
    classroomTraining: "-",
    otherAIApps: "✓"
  },
  {
    groupTitle: "Engagement & Interactivity",
    feature: "Workplace Role-play simulations",
    fluentPro: "✓",
    oneOnOneCoaching: "✓",
    classroomTraining: "-",
    otherAIApps: "-"
  },
  {
    groupTitle: "Engagement & Interactivity",
    feature: "Gamified progress tracking (points, ranks)",
    fluentPro: "coming soon",
    oneOnOneCoaching: "-",
    classroomTraining: "-",
    otherAIApps: "✓"
  },
  {
    groupTitle: "Engagement & Interactivity",
    feature: "Certificate of completion",
    fluentPro: "✓",
    oneOnOneCoaching: "-",
    classroomTraining: "-",
    otherAIApps: "-"
  },
  {
    groupTitle: "Engagement & Interactivity",
    feature: "Native language support for guidance",
    fluentPro: "✓",
    oneOnOneCoaching: "-",
    classroomTraining: "-",
    otherAIApps: "✓"
  },
];

// Define header styling configuration for each group
export const headerConfigByGroup: GroupHeaderConfig[] = [
  {
    groupTitle: "Personalization & Adaptability",
    fluentPro: { highlighted: true, showCrown: true },
    oneOnOneCoaching: { highlighted: true, showCrown: true },
    classroomTraining: { highlighted: false, showCrown: false },
    otherAIApps: { highlighted: false, showCrown: false }
  },
  {
    groupTitle: "Progress Tracking & Reporting",
    fluentPro: { highlighted: true, showCrown: true },
    oneOnOneCoaching: { highlighted: false, showCrown: false },
    classroomTraining: { highlighted: false, showCrown: false },
    otherAIApps: { highlighted: false, showCrown: false }
  },
  {
    groupTitle: "Scalability & Accessibility",
    fluentPro: { highlighted: true, showCrown: true },
    oneOnOneCoaching: { highlighted: false, showCrown: false },
    classroomTraining: { highlighted: false, showCrown: false },
    otherAIApps: { highlighted: true, showCrown: true }
  },
  {
    groupTitle: "Engagement & Interactivity",
    fluentPro: { highlighted: true, showCrown: true },
    oneOnOneCoaching: { highlighted: false, showCrown: false },
    classroomTraining: { highlighted: false, showCrown: false },
    otherAIApps: { highlighted: false, showCrown: false }
  }
];

// Helper function to get header configuration for a specific group
export const getHeaderConfigForGroup = (groupTitle: string): GroupHeaderConfig => {
  const config = headerConfigByGroup.find(config => config.groupTitle === groupTitle);
  if (!config) {
    // Default configuration if not found
    return {
      groupTitle,
      fluentPro: { highlighted: true, showCrown: true },
      oneOnOneCoaching: { highlighted: false, showCrown: false },
      classroomTraining: { highlighted: false, showCrown: false },
      otherAIApps: { highlighted: false, showCrown: false }
    };
  }
  return config;
};

// Helper function to get unique group titles
export const getUniqueGroupTitles = (): string[] => {
  const uniqueGroupTitles = new Set<string>();
  
  comparisonData.forEach(item => {
    uniqueGroupTitles.add(item.groupTitle);
  });
  
  return Array.from(uniqueGroupTitles);
};

// Helper function to get features by group title
export const getFeaturesByGroup = (groupTitle: string): ComparisonFeature[] => {
  return comparisonData.filter(item => item.groupTitle === groupTitle);
};