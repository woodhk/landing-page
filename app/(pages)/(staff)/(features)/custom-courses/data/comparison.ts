export type ComparisonItem = {
  feature: string;
  fluentPro: string;
  traditional: string;
};

export const comparisonData: ComparisonItem[] = [
  {
    feature: "Custom Learning Paths",
    fluentPro: "AI customizes each path based on the user's exact role, industry, and daily tasks. Only relevant, job-specific English is taught.",
    traditional: "Fixed general English levels (A1-C2) or \"business English\" programs with no role-specific tailoring. Content often irrelevant to daily work.",
  },
  {
    feature: "Scenario-Based Courses",
    fluentPro: "1,000+ real-world workplace scenarios auto-built by AI to match actual communication tasks staff face.",
    traditional: "Generic dialogues (e.g., \"ordering at a restaurant\" or \"booking a hotel\") with little connection to professional workplace reality.",
  },
  {
    feature: "Step-by-Step Lesson Structure",
    fluentPro: "Lessons mirror real interactions (e.g., greeting, negotiating, confirming agreements), teaching not just what to say but when to say it.",
    traditional: "Lessons often teach language structures in isolation (e.g., grammar drills, vocabulary lists) without linking to real communication flow.",
  },
  {
    feature: "Role-play Practice with AI",
    fluentPro: "Real-time conversation simulations using AI. Users practice applying language dynamically under workplace conditions.",
    traditional: "Role-play is rare or staged. Often requires a teacher or classmates, making practice limited, unnatural, or inconsistent.",
  },
  {
    feature: "Multiple Scenario Versions",
    fluentPro: "Users practice the same situation with 3 different conversational partners (different personalities, tones, phrasing).",
    traditional: "Single-script practice or repetition with the same partner. Little exposure to language variation, making real-world application harder.",
  },
  {
    feature: "Speed to Proficiency",
    fluentPro: "Learners skip irrelevant content and practice only what they need. Faster skill development with measurable impact (e.g., +17.48% performance).",
    traditional: "Slower progress as time is spent on broad/general content not aligned with the learner's real job needs.",
  },
  {
    feature: "Cost Efficiency",
    fluentPro: "Reduces training hours and costs by streamlining learning to only necessary skills.",
    traditional: "Higher training costs over time due to inefficiencies and time wasted on non-essential content.",
  },
  {
    feature: "Training Outcome",
    fluentPro: "Directly improves job performance by targeting communication tasks critical to workplace success.",
    traditional: "Improves general English ability, but often leaves staff struggling in real job-specific conversations.",
  },
];
