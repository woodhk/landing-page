// Types for workplace interactions
export interface WorkplaceInteraction {
  id: string;
  title: string;
  description: string;
  imagePath: string;
}

// Data for the four types of workplace interactions
const workplaceInteractions: WorkplaceInteraction[] = [
  {
    id: "one-on-one",
    title: "1-on-1 Conversations",
    description: "Staff practice speaking in workplace conversations involving 2 people.",
    imagePath: "/images/meeting.png"
  },
  {
    id: "group",
    title: "Group Conversations",
    description: "Staff practice speaking in group conversations involving more than 3 people.",
    imagePath: "/images/groupMeeting.png"
  },
  {
    id: "ninety-ten",
    title: "90/10 Conversations",
    description: "Staff practice workplace interactions where they're speaking 90% of the time.",
    imagePath: "/images/presentation.png"
  },
  {
    id: "ten-ninety",
    title: "10/90 Conversations",
    description: "Staff practice workplace interactions where they're speaking 10% of the time.",
    imagePath: "/images/jobinterview.png"
  }
];

export default workplaceInteractions;