

// Type definitions for the exercise cards
export type CheckItem = {
  text: string;
};

export type ExerciseCard = {
  pill: string;
  title: string;
  description: string;
  checkItems: CheckItem[];
  image: string;
};

// Data for the exercise cards
export const exerciseCards: ExerciseCard[] = [
  {
    pill: "Pronunciation",
    title: "Pronounce \"L's\" Like \"L's\" and \"R's\" Like \"R's\"",
    description: "Refine staff's pronunciation through:",
    checkItems: [
      { text: "Audio comparisons" },
      { text: "Minimal Pairs" },
      { text: "Intonation & Stress Correction" }
    ],
    image: "/abstract-bg/imageBackground8.svg"
  },
  {
    pill: "Fluency Builders",
    title: "Respond Faster & Clearer with less \"umms\" & \"uhhs\"",
    description: "Fluency Builder drills aim to increase response speed and reduce hesitation through:",
    checkItems: [
      { text: "Time Restricted Speaking Drills" },
      { text: "Sentence Expansion Challenge" },
      { text: "Hesitation Reduction Training" }
    ],
    image: "/abstract-bg/imageBackground8.svg"
  },
  {
    pill: "Vocabulary Expansion",
    title: "Speak using the Business English Dictionary",
    description: "Enhance word choice variety and expand industry-specific terminology, making staff responses more professional and dynamic.",
    checkItems: [
      { text: "AI-Powered Word Substitution" },
      { text: "Business-Specific Vocabulary Quiz" },
      { text: "Context-Based Vocabulary Use" }
    ],
    image: "/abstract-bg/imageBackground8.svg"
  },
  {
    pill: "Formality Adjustments",
    title: "Formality Adjustments Based On The Situation",
    description: "Ensure responses match professional settings, helping staff sound professional, respectful, and suited to the workplace context through:",
    checkItems: [
      { text: "Formality Level Detection" },
      { text: "Politeness & Softening Strategies" },
      { text: "Culture-Specific Business Etiquette" }
    ],
    image: "/abstract-bg/imageBackground8.svg"
  }
];