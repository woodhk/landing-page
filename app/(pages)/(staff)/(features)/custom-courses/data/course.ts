import { ReactNode } from 'react';

export interface CourseStep {
  id: number;
  title: string;
  description: string[];
  imageSrc: string;
  imageAlt: string;
  buttonText?: string;
  stepLabel: string;
}

export const courseSteps: CourseStep[] = [
  {
    id: 1,
    title: "Custom Learning Paths",
    description: [
      "HR teams that use tailored learning paths for staff training experience 20% higher engagement and a 15% increase in retention.",
      "That's why FluentPro uses AI to analyze each staff member’s role and build a custom learning path only including the English required to perform their job better."
    ],
    imageSrc: "/images/onboarding.png",
    imageAlt: "Custom learning paths visualization",
    stepLabel: "Personalisation"
  },
  {
    id: 2,
    title: "Scenario Based Courses",
    description: [
      "Workplace-specific practice leads to faster English progress.",
      "For this reason, FluentPro combines AI and language experts to deliver and create 1000+ scenario based courses that directly reflects staff's daily interactions.",
    ],
    imageSrc: "/images/scenarioCourse.png",
    imageAlt: "Custom learning paths visualization",
    stepLabel: "Efficiency"
  },
  {
    id: 3,
    title: "Step by Step Lessons",
    description: [
      "Each lesson focuses on one specific part of a real workplace conversation, teaching the exact phrases and techniques your team needs for that moment.",
      "By completing all the lessons in a course, your employees will have mastered an entire customer interaction from start to finish."
    ],
    imageSrc: "/images/lesson.png",
    imageAlt: "Custom learning paths visualization",
    stepLabel: "Learning"
  },
  {
    id: 4,
    title: "Role-play Practice",
    description: [
      "Academic studies prove that role-play-based learners outperformed traditional learners by 17.48% — because they weren't just remembering English, they were applying it in context.",
      "In Fluentpro, users converse in a role-play exercise with AI acting as their customer."
    ],
    imageSrc: "/images/rolePlay.png",
    imageAlt: "Custom learning paths visualization",
    buttonText: "Learn more about role-play",
    stepLabel: "Practice"
  },
  {
    id: 5,
    title: "Multiple Scenarios",
    description: [
      "Everyone is different with their own unique personality, using different words to express their ideas and thoughts.",
      "That's why each lesson includes 3 versions of the same role-play scenario. The topic and flow stay the same, but the conversation partner changes—using different wording, tone, or personality. This way, staff can practice the same situation multiple times, just like they would with different people in real life."
    ],
    imageSrc: "/images/scenario.png",
    imageAlt: "Custom learning paths visualization",
    stepLabel: "Growth"
  }
];
