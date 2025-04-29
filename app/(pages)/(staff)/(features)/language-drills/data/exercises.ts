// Type definitions for the exercise cards
export type CarouselItem = {
  title: string;
  description: string;
  image: string;
};

export type ExerciseSection = {
  
  title: string;
  subtitle: string;
  carouselItems: CarouselItem[];
};

// Data for the exercise cards
export const exerciseSections: ExerciseSection[] = [
  {
    title: "Project Confidence With Strong Pronunciation",
    subtitle: "Sharpen your pronunciation for crisp, confident and natural communication",
    carouselItems: [
      {
        title: "Audio Comparisons",
        description: "Learn to identify and correct problematic sounds through direct comparison with native speaker audio.",
        image: "/ui-elements/audioComparison.png"
      },
      {
        title: "Minimal Pairs",
        description: "Practice distinguishing between similar sounds that can change word meaning completely.",
        image: "/ui-elements/minimalPairs.png"
      },
      {
        title: "Intonation & Stress Correction",
        description: "Master the rise and fall patterns of English speech to sound more natural and fluent.",
        image: "/ui-elements/intonation.png"
      }
    ]
  },
  {
    title: "Speak & Think like a Native",
    subtitle: "Fluency Builder drills aim to increase response speed and reduce hesitation through:",
    carouselItems: [
      {
        title: "Time Restricted Speaking Drills",
        description: "Practice responding to prompts with increasingly shorter time limits to build quick thinking skills.",
        image: "/ui-elements/timeRestricted.png"
      },
      {
        title: "Sentence Expansion Challenge",
        description: "Learn to build more complex, sophisticated sentences by expanding on simple ideas systematically.",
        image: "/ui-elements/sentenceExpansion.png"
      },
      {
        title: "Hesitation Reduction Training",
        description: "Eliminate filler words and pauses through targeted exercises that build speaking confidence.",
        image: "/ui-elements/hesitationReduction.png"
      }
    ]
  },
  {
    title: "Sound Like the Director, Not the Intern",
    subtitle: "Enhance word choice variety and expand industry-specific terminology, making staff responses more professional and dynamic.",
    carouselItems: [
      {
        title: "AI-Powered Word Substitution",
        description: "Get instant suggestions for more precise, professional alternatives to common words.",
        image: "/ui-elements/aiSubstitution.png"
      },
      {
        title: "Business-Specific Vocabulary Quiz",
        description: "Master the specialized terminology of your industry to speak with greater authority.",
        image: "/ui-elements/businessQuiz.png"
      },
      {
        title: "Context-Based Vocabulary Use",
        description: "Practice using new vocabulary in realistic business scenarios to reinforce learning.",
        image: "/ui-elements/contextVocabulary.png"
      }
    ]
  },
  {
    title: "Build Trust and Strengthen Influence",
    subtitle: "Ensure responses match professional settings, helping staff sound professional, respectful, and suited to the workplace context through:",
    carouselItems: [
      {
        title: "Formality Level Detection",
        description: "Learn to recognize different levels of formality and when each is appropriate in business settings.",
        image: "/ui-elements/formalityDetection.png"
      },
      {
        title: "Politeness & Softening Strategies",
        description: "Master techniques for making requests, giving feedback, and expressing disagreement professionally.",
        image: "/ui-elements/politenessStrategy.png"
      },
      {
        title: "Culture-Specific Business Etiquette",
        description: "Understand how formality varies across cultures to communicate effectively in global business.",
        image: "/ui-elements/culturalEtiquette.png"
      }
    ]
  }
];