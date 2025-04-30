import { Banknote, Clock, GaugeCircle, LineChart, LucideIcon } from "lucide-react";

export interface Benefit {
  heading: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export const benefitsData: Benefit[] = [
  {
    heading: "Save Miscommunication Costs",
    description: "Save up to $12,500 per employee each year in miscommunication costs.",
    icon: Banknote,
    color: "text-gray-900"
  },
  {
    heading: "Recover Lost Productivity",
    description: "Reclaim up to 7.5 hours per employee each week by avoiding repeated explanations and misunderstandings.",
    icon: Clock,
    color: "text-gray-900"
  },
  {
    heading: "Boost Learning Performance",
    description: "Improve how fast and how well staff understand and use new skills by getting four expert views on every response.",
    icon: GaugeCircle,
    color: "text-gray-900"
  },
  {
    heading: "Increase Staff Motivation",
    description: "Increase staff engagement through interactive AI coaching sessions tailored to individual learning styles and needs.",
    icon: LineChart,
    color: "text-gray-900"
  },
];
