// app/(pages)/home/data/KeyValueProposition.ts

export interface KeyValueItem {
  id: string;
  title: string;
  description: string;
  animationDescription: string;
}

export const keyValueData: KeyValueItem[] = [
  {
    id: "phrases-jargon",
    title: "Learn Industry-Specific Jargon",
    description: "Helping staff refine their Business English by guiding them on the correct industry-specific terms and professional phrasing, ensuring they can confidently handle real-world workplace conversations.",
    animationDescription: "Animation showing AI giving feedback on a response with the improvement response including industry specific jargon"
  },
  {
    id: "formality-tone",
    title: "Practice Formality and Tone",
    description: "Ensuring staff communicate with the right level of formality and tone for each business scenario, helping them sound professional, respectful, and suited to the workplace context.",
    animationDescription: "Animation showing AI giving feedback on a response with the improvement response including better formality and tone for the given situation"
  },
  {
    id: "culture-awareness",
    title: "Develop Cultural Awareness",
    description: "Helping staff navigate cultural differences in communication by providing feedback on language use, etiquette, and expressions, ensuring their responses align with professional and culturally aware business interactions.",
    animationDescription: "Animation showing AI giving feedback on a response with the improvement response including better cultural awareness"
  }
];