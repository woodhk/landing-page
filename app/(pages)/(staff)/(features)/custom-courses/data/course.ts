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
      "Increase engagement by 20% and boost retention by 15% with job-specific English training.",
      "FluentPro’s AI tailors each course to your team’s job title, industry, and communication needs—only teaching the English they actually use at work."
    ],
    imageSrc: "/images/onboarding.png",
    imageAlt: "Custom learning paths visualization",
    stepLabel: "Personalisation"
  },
  {
    id: 2,
    title: "Scenario Based Courses",
    description: [
      "Accelerate progress with role-specific speaking practice.",
      "Automatically build and deliver 1,000+ workplace scenarios using AI and expert guidance—each one tailored to the real conversations your team faces on the job.",
    ],
    imageSrc: "/images/scenarioCourse.png",
    imageAlt: "Custom learning paths visualization",
    stepLabel: "Efficiency"
  },
  {
    id: 3,
    title: "Step by Step Lessons",
    description: [
      "Train your team on exactly what to say, and when to say it, by guiding them through each phase of a real customer interaction from first contact to final follow-up."
    ],
    imageSrc: "/images/lesson.png",
    imageAlt: "Custom learning paths visualization",
    stepLabel: "Learning"
  },
  {
    id: 4,
    title: "Role-play Practice",
    description: [
      "Boost real-world readiness through role-play exercises that go beyond memorization.",
      "Let your team simulate customer conversations with AI and start applying English in context—just like top-performing learners who see 17.48% better results."
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
      "Practice the same scenario with three different conversation partners.",
      "This helps your team adapt to different tones, personalities, and phrasing, just like they would at work."
    ],
    imageSrc: "/images/scenario.png",
    imageAlt: "Custom learning paths visualization",
    stepLabel: "Growth"
  }
];
