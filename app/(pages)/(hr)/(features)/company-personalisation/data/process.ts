import { ReactNode } from 'react';

export interface CourseStep {
  id: number;
  title: string;
  description: string[];
  imageSrc: string;
  imageAlt: string;
  buttonText?: string;
  stepLabel: string;
}

export const courseSteps: CourseStep[] = [
  {
    id: 1,
    title: "Upload Company Document",
    description: [
      "Upload company materials so AI can create scenarios that mirror your real workplace."
    ],
    imageSrc: "/abstract-bg/imageBackground7.svg",
    imageAlt: "Custom learning paths visualization",
    stepLabel: "Personalisation"
  },
  {
    id: 2,
    title: "Save Documents",
    description: [
      "Documents are stored securely and used only to tailor learning to your company’s real-world needs.",
    ],
    imageSrc: "/abstract-bg/imageBackground7.svg",
    imageAlt: "Custom learning paths visualization",
    stepLabel: "Efficiency"
  },
  {
    id: 3,
    title: "Assign Roles",
    description: [
      "Link each document to the right team or role, so every scenario reflects their day-to-day tasks. This ensures relevance, reducing wasted training time.",
    ],
    imageSrc: "/abstract-bg/imageBackground7.svg",
    imageAlt: "Custom learning paths visualization",
    stepLabel: "Learning"
  },
  {
    id: 4,
    title: "Role-play Practice",
    description: [
      "The AI now generates role-plays that feel real because they’re built from your world. You stay in control — documents can be removed anytime.",
    ],
    imageSrc: "/abstract-bg/imageBackground7.svg",
    imageAlt: "Custom learning paths visualization",
    buttonText: "Learn more about role-play",
    stepLabel: "Practice"
  },
];
