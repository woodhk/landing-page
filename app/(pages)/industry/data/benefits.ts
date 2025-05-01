import { UserCog, Clock, GaugeCircle, LineChart, LucideIcon, } from "lucide-react";

export interface Benefit {
  heading: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export const benefitsData: Benefit[] = [
  {
    heading: "Personalise Training",
    description: "Advance learning progress with training made for your field, not a one-size-fits-all syllabus",
    icon: UserCog,
    color: "text-gray-900"
  },
  {
    heading: "Boost Productivity",
    description: "Increase productivity knowing every minute of training focuses only on what staff's job demands.",
    icon: Clock,
    color: "text-gray-900"
  },
  {
    heading: "Meet KPI Targets",
    description: "Reach KPI targets faster with training that is directly relevant to your industry.",
    icon: GaugeCircle,
    color: "text-gray-900"
  },
  {
    heading: "Drive ROI",
    description: "Deliver industry-specific training programs that make an impact on your business, not just grammar.",
    icon: LineChart,
    color: "text-gray-900"
  },
];
