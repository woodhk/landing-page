import { LucideIcon, Mic, Timer, BookOpen, GraduationCap } from "lucide-react";

interface LanguageDrill {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface LanguageDrillsSection {
  title: string;
  mainHeading: string;
  description: string;
  drills: LanguageDrill[];
}

export const languageDrillsData: LanguageDrillsSection = {
  title: "Dynamic Exercises",
  mainHeading: "Language Drills Created Based On User Mistakes",
  description: "At the end of each lesson, our AI will dynamically create language drills that target mistakes the user made.",
  drills: [
    {
      id: "pronunciation",
      title: "Pronunciation Drills",
      description: "Audio comparisons, phonetic breakdowns, and interactive pronunciation tasks for words staff struggle with.",
      icon: Mic
    },
    {
      id: "fluency",
      title: "Fluency Builders",
      description: "Improves response speed and reduces hesitation by training staff to think and speak fluidly in real-time business situations.",
      icon: Timer
    },
    {
      id: "vocabulary",
      title: "Vocabulary Expansion",
      description: "Improves word choice variety and industry-specific terminology, making staff responses more professional and dynamic.",
      icon: BookOpen
    },
    {
      id: "formality",
      title: "Formality Adjustments",
      description: "Aligns responses with professional settings, ensuring they sound respectful and appropriate for the workplace.",
      icon: GraduationCap
    }
  ]
};
