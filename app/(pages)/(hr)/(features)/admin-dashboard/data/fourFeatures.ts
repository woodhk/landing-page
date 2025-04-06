export interface FeatureData {
  image: string;
  title: string;
  description: string;
}

const fourFeatures: FeatureData[] = [
  {
    image: "/abstract-bg/imageBackground3.svg",
    title: "Time Spent",
    description: "Spot high-engagement learners and uncover who's investing time in upskilling—so you can reward effort, not just results."
  },
  {
    image: "/abstract-bg/imageBackground3.svg",
    title: "Lesson Completed",
    description: "Get a clear view of learner momentum—know who's staying on track and where to step in before motivation dips."
  },
  {
    image: "/abstract-bg/imageBackground3.svg",
    title: "Course Progression",
    description: "Instantly identify completion risks or fast finishers—perfect for targeted nudges, recognition, or pacing adjustments."
  },
  {
    image: "/abstract-bg/imageBackground3.svg",
    title: "Language Practiced",
    description: "See how well staff are mastering the language that matters most to their role—ensuring real-world impact, not just theory."
  }
];

export default fourFeatures;
