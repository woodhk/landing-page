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
    heading: "Meet KPI Targets",
    description: "From reaching sustainability targets to fulfilling department head requests, Fluentpro's real-time reports and analytics ensure training meets your KPI needs.",
    icon: GaugeCircle,
    color: "text-gray-900"
  },
  {
    heading: "Drive ROI",
    description: "Deliver training programs that make an impact on your business, not just grammar.",
    icon: LineChart,
    color: "text-gray-900"
  },
];
