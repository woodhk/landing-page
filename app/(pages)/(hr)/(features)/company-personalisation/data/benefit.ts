export interface FeatureData {
  iconName: string;
  title: string;
  description: string;
}

const threeFeatures: FeatureData[] = [
  {
    iconName: "ShieldCheck",
    title: "Save Miscommunication Costs",
    description: "Prevent costly misunderstandings by practicing company-specific scenarios in a safe environment."
  },
  {
    iconName: "TrendingUp",
    title: "Boost Training Effectiveness",
    description: "Improve how fast and how well staff understand and use new skills with training that is tailored to your company's products and services."
  },
  {
    iconName: "Rocket",
    title: "Increase Staff Motivation",
    description: "Increase staff engagement by making training feel more relevant to daily responsibilities."
  },
];

export default threeFeatures;
