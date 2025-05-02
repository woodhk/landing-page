export interface FeatureData {
  iconName: string;
  title: string;
  description: string;
}

const threeFeatures: FeatureData[] = [
  {
    iconName: "Zap",
    title: "Set Up Training Faster",
    description: "Instantly connect each staff member to your admin dashboard with one email and a magic link."
  },
  {
    iconName: "UserPlus",
    title: "Reduce Sign-Up Friction",
    description: "Onboard and personalise training for each staff member in under 5 minutes"
  },
  {
    iconName: "Send",
    title: "Automate Staff Follow-Ups",
    description: "Enable automated weekly reminders to staff who haven't started training."
  },
 /* {
    iconName: "CalendarCheck",
    title: "Assign Weekly Targets",
    description: "Set weekly lesson goals for each staff member, ensuring consistent progress while you stay focused on other priorities."
  }, */
];

export default threeFeatures;
