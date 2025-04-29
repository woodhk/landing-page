// Types for role-play phases
export interface Process {
  id: string;
  title: string;
  description: string;
  smallImagePath: string;
  hasButton?: boolean;
  buttonText?: string;
}

// Data for the five phases of role-play
const processes: Process[] = [
  {
    id: "step-1",
    title: "Lesson Analysis",
    description: "Behind the scenes, AI is analysing and taking note of every response made by the user to identify areas for improvement. This ensures the end of lesson language drills are personalised to staff's specific mistakes.",
    smallImagePath: "/ui-elements/processStepOne.png"
  },
  {
    id: "step-2",
    title: "Generate Drills",
    description: "Once the lessons finished, our AI uses its analysis to dynamically generate practice exercises that help improve the users pronunciation, vocabulary, formality and response structure",
    smallImagePath: "/ui-elements/processStepTwo.png"
  },
  {
    id: "step-3",
    title: "Practice Drills",
    description: "AI then takes them through fun yet effective drills, like time-restricted speaking drills or minimal pairs practice, all designed to help them improve their business English proficiency.",
    smallImagePath: "/ui-elements/processStepThree.png"
  },
];

export default processes;
