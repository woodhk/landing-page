// types/languageFeatures.ts
export interface LanguageFeature {
  id: string;
  title: string;
  description: string[];
  imagePath: string;
}

export const languageFeatures: LanguageFeature[] = [
  {
    id: "multilingual-interface",
    title: "Multilingual Interface",
    description: [
      "The whole platform can be changed into staffs native language in just 2 clicks.",
      "This allows for more efficient training as staff spend more time learning English rather than understanding instructions or understanding what buttons do."
    ],
    imagePath: "/app-screenshots/nativeHomeScreen.png"
  },
  {
    id: "ai-translations",
    title: "AI-Generated Translations",
    description: [
      "Struggling to understand complex English phrases during training can slow down the learning process by 25%",
      "FluentPro's on-demand AI translation instantly clarifies confusing terms in the user's native language, so learning stays efficient, focused, and frustration-free."
    ],
    imagePath: "/app-screenshots/pronounciation.png"
  },
  {
    id: "native-language-qa",
    title: "Native Language Q&A",
    description: [
      "When users can speak in their native language, they ask more questions, learn faster, and feel more supported",
      "FluentPro's multilingual AI understands and responds in the user's native language, making communication clearer, questions easier to ask, and learning more intuitive."
    ],
    imagePath: "/app-screenshots/rolePlayQuestion.png"
  }
];