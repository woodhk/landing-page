// Custom Courses & Lessons
export type courses = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export const coursesData: courses[] = [
  {
    title: "Custom Courses & Lessons for Any Industry and Role",
    description: "From hospitality to finance, HR to sales, we offer scenario based courses tailored to each job role. AI then personalises each lesson to the specific language needs of staff.",
    image: "/app-screenshots/program-homepage.png",
    href: "/custom-courses",
  },
];



// Role-Play Scenarios
export type rolePlay = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export const rolePlayData: rolePlay[] = [
  {
    title: "Role-Plays That Simulate Customer, Client or Colleague Interactions",
    description: "Staff practice the conversations they have at work in a stress-free enviornment, with realistic AI role-plays, allowing staff to make mistakes without the fear of judgement or without it costing the company.",
    image: "/app-screenshots/scenarios-homepage.png",
    href: "/role-plays",
  },
];
