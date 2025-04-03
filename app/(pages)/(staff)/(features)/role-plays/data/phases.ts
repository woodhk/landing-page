// Types for role-play phases
export interface Phase {
  id: string;
  pill: string;
  title: string;
  description: string;
  analogyTitle: string;
  analogy: string;
  imagePath: string;
  smallImagePath: string;
  hasButton?: boolean;
  buttonText?: string;
}

// Data for the five phases of role-play
const phases: Phase[] = [
  {
    id: "phase-1",
    pill: "Phase 1",
    title: "Guided Practice",
    description: "AI provides step-by-step guidance to help staff understand what an ideal conversation should sound like. The user can also ask follow up questions in their native language if needed.",
    analogyTitle: "Phase 1 Analogy",
    analogy: "Cooking with a chef, step by step. The chef walks you through every step: ingredients, timing, techniques. You can ask questions along the way to fully understand how the dish should turn out.",
    imagePath: "/abstract-bg/imageBackground4.svg",
    smallImagePath: "/app-screenshots/roleplay.png"
  },
  {
    id: "phase-2",
    pill: "Phase 2",
    title: "Real-Time Coaching",
    description: "During this stage, step-by-step guidance is removed, and instead, the AI provides feedback after each reply to help refine staff's response in real time.",
    analogyTitle: "Phase 2 Analogy",
    analogy: "You cook, chef watches and gives tips after each step. You're in charge now, but after each move (like seasoning or flipping), the chef gives feedback to help you adjust and improve.",
    imagePath: "/abstract-bg/imageBackground5.svg",
    smallImagePath: "/app-screenshots/roleplay.png"
  },
  {
    id: "phase-3",
    pill: "Phase 3",
    title: "Independent Practice",
    description: "With this section, there are no hints or immediate feedback, staff complete the full role-play on their own. Only when the conversation is finished, will staff receive a summary from our AI on how they performed.",
    analogyTitle: "Phase 3 Analogy",
    analogy: "You cook the full dish solo. No tips, no interruptions. You plate the dish start to finish whilst the chef is watching and taking notes. Only after you're done does the chef give a full review.",
    imagePath: "/abstract-bg/imageBackground6.svg",
    smallImagePath: "/app-screenshots/roleplay.png"
  },
  {
    id: "phase-4",
    pill: "Phase 4",
    title: "Live Simulation",
    description: "Just like a real conversation, in this section, staff speak naturally in a voice-to-voice role-play with no text, no hints and no feedback. Once completed, their performance is automatically submitted to our AI for grading.",
    analogyTitle: "Phase 4 Analogy",
    analogy: "Cooking in a real kitchen for a guest. No recipes, no help. Just you cooking under real pressure, with someone waiting to eat. Your performance is recorded and judged.",
    imagePath: "/abstract-bg/imageBackground7.svg",
    smallImagePath: "/app-screenshots/roleplay.png"
  },
  {
    id: "phase-5",
    pill: "Phase 5",
    title: "Performance Grade",
    description: "Once submitted, the final role-play is graded. If the score meets the standard set by HR, the scenario is marked as passed. If not, staff will retry with a new scenario, ensuring they're learning not just repeating and memorising answers.",
    analogyTitle: "Phase 5 Analogy",
    analogy: "Guest reviews your dish, chef scores it. If your dish meets the standard, you're cleared to serve it again. If not, you practice with a different recipe to grow your skill — not just repeat what you memorized.",
    imagePath: "/abstract-bg/imageBackground8.svg",
    smallImagePath: "/app-screenshots/roleplay.png",
    hasButton: true,
    buttonText: "Download our grading rubric"
  },
];

export default phases;
