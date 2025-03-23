// app/(pages)/home/data/MissionVision.ts

export interface MissionVisionData {
  mission: {
    title: string;
    description: string;
    image: {
      alt: string;
    };
  };
  vision: {
    title: string;
    description: string;
    image: {
      alt: string;
    };
  };
}

export const missionVisionData: MissionVisionData = {
  mission: {
    title: "Our Mission",
    description: "Our mission is to equip professionals with the Business English speaking skills they need to excel in client, customer, and colleague interactions, all while ensuring performance and progress can be monitored and prove to deliver high ROI.",
    image: {
      alt: "Placeholder Image showing virtual assistant interacting with a professional and giving feedback"
    }
  },
  vision: {
    title: "Our Vision",
    description: "Our vision is to become the global benchmark for Business English speaking excellence. We strive to create a world where every professional communicates with clarity, cultural awareness, and confidence, breaking down language barriers through our innovative AI-powered training.",
    image: {
      alt: "Placeholder Image showing a world map with digital connections linking professionals across different countries"
    }
  }
};