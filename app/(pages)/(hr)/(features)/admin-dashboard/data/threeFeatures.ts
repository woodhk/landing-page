export interface ThreeFeatureData {
  image: string;
  title: string;
  description1: string;
  description2: string;
}

const threeFeatures: ThreeFeatureData[] = [
  {
    image: "/abstract-bg/imageBackground5.svg",
    title: "Average Performance & Improvement",
    description1: "It's hard to know which staff are truly improving and which ones are silently falling behind.",
    description2: "FluentPro highlights both individual progress and plateaus—so you can step in early and support where it matters most."
  },
  {
    image: "/abstract-bg/imageBackground5.svg",
    title: "Real-Time Updates",
    description1: "HR often relies on outdated reports to monitor training engagement.",
    description2: "With real-time activity updates, you always know who's active, what they're learning, and when to follow up."
  },
  {
    image: "/abstract-bg/imageBackground5.svg",
    title: "Export Results",
    description1: "Creating performance reports manually wastes time and risks inconsistency.",
    description2: "FluentPro lets you export ready-made, professional-grade report cards with one click—for individuals or entire teams."
  }
];

export default threeFeatures;
