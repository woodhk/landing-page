import { LucideIcon, MessageCircle, Briefcase, CircleCheck } from "lucide-react";

export type Benefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const benefits: Benefit[] = [
  {
    title: "Dedicated Organization Role-Plays",
    description: "An interactive learning experience that allows employees to practice their language skills in a real-world context.",
    icon: Briefcase,
  },
  {
    title: "Adaptive, Authentic Conversations",
    description: "AI-powered digital humans simulate real-world workplace conversations, providing realistic, relevant language practice that adapts to each learner.",
    icon: MessageCircle,
  },
  {
    title: "Tailored and Actionable Feedback",
    description: "Patented technology evaluates speech, delivering personalized analysis, actionable feedback and future lesson recommendations based on performance.",
    icon: CircleCheck,
  },
  
];
