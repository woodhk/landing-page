// Types for coach features
export interface CoachFeature {
  pillText: string;
  title: string;
  description: string;
  imageUrl: string;
}

// Extension for the Performance Coach which has a link
export interface PerformanceCoachFeature extends CoachFeature {
  rubricLink: string;
}

// Coach feature data
export const coachFeatures: (CoachFeature | PerformanceCoachFeature)[] = [
  {
    pillText: "Simulation Coach",
    title: "Practice Speaking To Customers Without Speaking To Customers",
    description: "The Simulation Coach role-plays staffs' real customers and clients, making them practice real-world conversations, without the pressure.",
    imageUrl: "/abstract-bg/imageBackground7.svg"
  },
  {
    pillText: "Soft Skills Coach",
    title: "Response-by-Response Guidance",
    description: "The Soft Skills Coach provides staff with the language required in each response to navigate any workplace conversation smoothly.",
    imageUrl: "/abstract-bg/imageBackground7.svg"
  },
  {
    pillText: "Business English Coach",
    title: "Speak in Business, Not Just English",
    description: "Our Business English Coach helps staff structure responses using the right industry terms, correct grammar, and the appropriate level of formality for any given situation.",
    imageUrl: "/abstract-bg/imageBackground7.svg"
  },
  {
    pillText: "Performance Coach",
    title: "Graded on how you handle workplace situations, not quizzes",
    description: "Our performance coach analyses every response from role-play exercises and grades them based on completeness, logical flow, clarity, professionalism & tone.",
    imageUrl: "/abstract-bg/imageBackground7.svg",
    rubricLink: "here." // This would typically be a full URL to download the PDF
  }
];

// Helper function to get coach features
export const getCoachFeatures = (): (CoachFeature | PerformanceCoachFeature)[] => {
  return coachFeatures;
};

// Helper function to check if a feature is a Performance Coach Feature
export const isPerformanceCoachFeature = (
  feature: CoachFeature | PerformanceCoachFeature
): feature is PerformanceCoachFeature => {
  return 'rubricLink' in feature;
};