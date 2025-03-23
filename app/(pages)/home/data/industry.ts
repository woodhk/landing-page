// app/(pages)/home/data/industry.ts

/**
 * Interface defining the structure of industry data
 */
export interface IndustryData {
  id: string;
  name: string;
  description: string[];
  hasAnimation?: boolean; // Whether this industry has a custom animation
  clientLogos: {
    name: string;
    logo: string;
  }[];
}

/**
 * Data for each industry section
 */
export const industryData: IndustryData[] = [
  {
    id: "banking-finance",
    name: "FluentPro for Banking & Finance",
    description: [
      "FluentPro helps banking and finance professionals communicate clearly and confidently with clients and colleagues, ensuring smoother transactions and stronger business relationships.",
      "Each job role receives industry-specific scenarios that make learning directly relevant, helping staff master key conversations, whether handling client inquiries, negotiating deals, or delivering financial advice."
    ],
    hasAnimation: true,
    clientLogos: [
      { name: "PwC", logo: "/pwc.png" },
      { name: "ICBC", logo: "/icbc.png" },
      { name: "JP Morgan", logo: "/jpmorgan.png" }
    ]
  },
  {
    id: "real-estate",
    name: "FluentPro for Real Estate",
    description: [
      "FluentPro's Real Estate courses help agents, property managers, and support staff communicate with clients more clearly, building trust and closing deals faster.",
      "Each lesson is tailored to real-life situations in the industry, making it easier for teams to handle negotiations, client questions, and property discussions with confidence."
    ],
    hasAnimation: true,
    clientLogos: [
      { name: "Hutchison", logo: "/hutchison.png" },
      { name: "Sun Hung Kai", logo: "/sun-hung.png" },
      { name: "Sino Group", logo: "/sino.png" }
    ]
  },
  {
    id: "shipping-logistics",
    name: "FluentPro for Shipping & Logistics",
    description: [
      "FluentPro helps shipping and logistics professionals communicate clearly and confidently in real-world job situations, reducing misunderstandings and improving efficiency.",
      "Whether confirming deliveries, handling customer complaints, or coordinating with international teams, each lesson is designed to fit their exact role, making every interaction smoother and more professional."
    ],
    hasAnimation: true,
    clientLogos: [
      { name: "DHL", logo: "/dhl.png" },
      { name: "DB Schenker", logo: "/db-schenker.png" },
      { name: "HK International Airport", logo: "/hk-international-airport.png" }
    ]
  },
  {
    id: "insurance",
    name: "FluentPro for Insurance",
    description: [
      "FluentPro helps insurance professionals confidently communicate with clients, explain policies clearly, and handle claims efficiently—ensuring smoother interactions and stronger customer trust.",
      "From sales agents persuading clients to underwriters assessing risks, every role has tailored lessons that sharpen job-specific English skills, making daily tasks easier and more effective."
    ],
    hasAnimation: true,
    clientLogos: [
      { name: "ING", logo: "/ing.png" },
      { name: "Manulife", logo: "/manulife.png" },
      { name: "Zurich", logo: "/zurich.png" }
    ]
  },
  {
    id: "your Industry?",
    name: "Your Industry and More",
    description: [
      "Our courses cover a vast range of industries and roles, from Retail to Telecoms, and many more.",
      "If an industry isn't covered, our language experts will create personalised course(s) for free based on your requirements."
    ],
    hasAnimation: true,
    clientLogos: [
      { name: "LVMH", logo: "/lvmh.png" },
      { name: "Hong Kong Jockey Club", logo: "/hk-jockey-club.png" },
      { name: "MTR", logo: "/mtr.png" }
    ]
  }
];