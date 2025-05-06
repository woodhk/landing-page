import { Eye, ChartPie, FileSearch, Lightbulb, LucideIcon } from "lucide-react";

export interface Benefit {
  heading: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export const benefitsData: Benefit[] = [
  {
    heading: "Feel in Control",
    description: "Track learner progress in real time to identify low performers early and maintain training consistency.",
    icon: Eye,
    color: "text-gray-900"
  },
  {
    heading: "Prove Training Impact",
    description: "Show measurable results that justify your training budget and strategic decisions.",
    icon: ChartPie,
    color: "text-gray-900"
  },
  {
    heading: "Eliminate Reporting Stress",
    description: "Remove last-minute stress with ready-to-share, executive-level reports always at your fingertips.",
    icon: FileSearch,
    color: "text-gray-900"
  },
  {
    heading: "Make Smarter Decisions",
    description: "Pinpoint training gaps in real time, so you can act decisively, not reactively.",
    icon: Lightbulb,
    color: "text-gray-900"
  },
];
