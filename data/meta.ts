export const pageMeta = {
  "/": {
    title: "FluentPro – AI-Powered Business English",
    description: "Train your team in real-world English speaking skills with AI simulations.",
    keywords: "business english, AI language learning, professional english training",
    ogImage: "/images/your-industry.svg",
  },
  "/(hr)/admin": {
    title: "HR Features – FluentPro",
    description: "Track employee English progress, manage teams, and export reports easily.",
    keywords: "HR tools, employee training, progress tracking, team management",
    ogImage: "/images/og/hr-features.png",
  },
  "/(staff)/staff": {
    title: "Staff Features – FluentPro",
    description: "Interactive AI roleplays to help staff master English for their jobs.",
    keywords: "staff training, AI roleplay, business communication, english practice",
    ogImage: "/images/og/staff-features.png",
  },
  "/(staff)/(features)/custom-courses": {
    title: "Custom Courses – FluentPro",
    description: "Custom courses for your team, tailored to your industry and role.",
    keywords: "custom courses, industry-specific training, role-based English, business communication",
    ogImage: "/images/og/custom-courses.png",
  },
  "/(staff)/(features)/role-plays": {
    title: "Role-Plays – FluentPro",
    description: "Role-plays for your team, tailored to your industry and role.",
    keywords: "role-plays, industry-specific training, role-based English, business communication",
    ogImage: "/images/og/role-plays.png",

  },
  "/(staff)/(features)/native-language": {
    title: "Native Language Support – FluentPro",
    description: "Native language support for your team, tailored to your industry and role.",
    keywords: "native language support, industry-specific training, role-based English, business communication",
    ogImage: "/images/og/native-language.png",
  },
  "/(staff)/(features)/language-drills": {
    title: "Language Drills – FluentPro",
    description: "Language drills for your team, tailored to your industry and role.",
    keywords: "language drills, industry-specific training, role-based English, business communication",
    ogImage: "/images/og/language-drills.png",
  },
  "/(staff)/(features)/coaches": {
    title: "Coaches – FluentPro",
    description: "Coaches for your team, tailored to your industry and role.",
    keywords: "coaches, industry-specific training, role-based English, business communication",
    ogImage: "/images/og/coaches.png",
  },
  "/industry/logistics": {
    title: "Logistics Industry – FluentPro",
    description: "Help your delivery and logistics teams communicate clearly in English.",
    keywords: "logistics english, supply chain communication, delivery staff training",
    ogImage: "/images/og/logistics.png",
  },
  "/industry/banking": {
    title: "Banking Industry – FluentPro",
    description: "Empower your banking staff with professional English communication skills.",
    keywords: "banking english, financial communication, customer service training",
    ogImage: "/images/og/banking.png",
  }
} as const;

// Type for accessing metadata
export type PagePath = keyof typeof pageMeta;

// Helper function to get metadata for a specific page
export function getPageMeta(path: PagePath) {
  return pageMeta[path];
}
