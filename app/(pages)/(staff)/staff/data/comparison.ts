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

  {
    groupTitle: "Progress Tracking & Reporting",
    feature: "Real time performance analytics for HR",
    fluentPro: "✓",
    oneOnOneCoaching: "-",
    classroomTraining: "-",
    otherAIApps: "✓"
  },
  {
    groupTitle: "Progress Tracking & Reporting",
    feature: "General English skill grading (e.g. grammar, pronunciation)",
    fluentPro: "✓",
    oneOnOneCoaching: "✓",
    classroomTraining: "-",
    otherAIApps: "✓"
  },
  {
    groupTitle: "Progress Tracking & Reporting",
    feature: "Business English skill grading (e.g. clarity, logical flow, tone)",
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
    groupTitle: "Scalability & Accessibility",
    feature: "Mobile-friendly",
    fluentPro: "coming soon",
    oneOnOneCoaching: "-",
    classroomTraining: "-",
    otherAIApps: "✓"
  },
  {
    groupTitle: "Engagement & Interactivity",
    feature: "Individual role-play simulations",
    fluentPro: "✓",
    oneOnOneCoaching: "✓",
    classroomTraining: "-",
    otherAIApps: "✓"
  },
  {
    groupTitle: "Engagement & Interactivity",
    feature: "Gamified progress tracking (points, ranks)",
    fluentPro: "✓",
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