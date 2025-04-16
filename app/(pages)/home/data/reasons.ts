import { LucideIcon, MessageCircle, Briefcase, CircleCheckBig, CircleCheck, Check } from "lucide-react";

export type Benefit = {
  title: string;
  icon: LucideIcon;
  description?: string;
};

export const benefits: Benefit[] = [
  {
    title: "Role-Specific Courses & Lessons",
    icon: Check,
  },
  {
    title: "Dedicated Organization Role-Plays",
    icon: Check,
  },
  {
    title: "Native Language Support",
    icon: Check,
  },
  {
    title: "Adaptive, Authentic Conversation",
    icon: Check,
  },
  {
    title: "Dynamic Language Drills",
    icon: Check,
  },
  {
    title: "Tailored and Actionable Feedback",
    icon: Check,
  },
  {
    title: "Gamified Learning",
    icon: Check,
  },
  {
    title: "Certificate of Completion",
    icon: Check,
  },
];
