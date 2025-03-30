import { 
  BookOpen, 
  Globe, 
  Users, 
  Building2, 
  Award, 
  Zap, 
  ChevronRight,
  Layers,
  Brain,
  MessageSquare,
  Languages,
  FileText,
  BarChart4,
  Upload,
  Trophy,
  Medal,
  UserCircle,
  GanttChart
} from "lucide-react";

// Define types for all menu items
interface MenuItemBase {
  title: string;
  href: string;
}

interface CategoryItem extends MenuItemBase {
  section: string;
  icon: typeof BookOpen;
}

interface FeatureCardItem extends MenuItemBase {
  description: string;
  image: string;
  icon: typeof ChevronRight;
}

export const allFeatures = {
  title: "Features",
  icon: Layers,
  href: "/features",
};

export const secureEarlyAccess = {
  title: "Secure Early Access",
  href: "https://forms.gle/tLkLiSziGZZDjLpJA",
  icon: ChevronRight,
};

export const interactiveLearningItems: CategoryItem[] = [
  {
    title: "Custom Courses & Lessons",
    section: "interactive-learning",
    icon: BookOpen,
    href: "/platform/interactive-learning/custom-courses",
  },
  {
    title: "Role-Specific Scenarios",
    section: "interactive-learning",
    icon: Users,
    href: "/platform/interactive-learning/role-scenarios",
  },
  {
    title: "Industry-Specific Language",
    section: "interactive-learning",
    icon: Building2,
    href: "/platform/interactive-learning/industry-language",
  },
  {
    title: "Real-Time AI Feedback",
    section: "interactive-learning",
    icon: Zap,
    href: "/platform/interactive-learning/ai-feedback",
  },
  {
    title: "Detailed Conversation Analysis",
    section: "interactive-learning",
    icon: MessageSquare,
    href: "/platform/interactive-learning/conversation-analysis",
  },
];

export const localizationItems: CategoryItem[] = [
  {
    title: "Multilingual Interface",
    section: "localization",
    icon: Globe,
    href: "/platform/localization/multilingual-interface",
  },
  {
    title: "AI-Generated Translations",
    section: "localization",
    icon: Brain,
    href: "/platform/localization/ai-translations",
  },
  {
    title: "Native Language Support",
    section: "localization",
    icon: Languages,
    href: "/platform/localization/native-support",
  },
];

export const hrSolutionsItems: CategoryItem[] = [
  {
    title: "Company-Wide Integration",
    section: "hr-solutions",
    icon: Building2,
    href: "/platform/hr-solutions/company-integration",
  },
  {
    title: "Hands-Free Enrollment for Staff",
    section: "hr-solutions",
    icon: UserCircle,
    href: "/platform/hr-solutions/enrollment",
  },
  {
    title: "Training ROI & KPI Monitoring",
    section: "hr-solutions",
    icon: BarChart4,
    href: "/platform/hr-solutions/roi-monitoring",
  },
  {
    title: "Customizable Course Uploads",
    section: "hr-solutions",
    icon: Upload,
    href: "/platform/hr-solutions/course-uploads",
  },
];

export const staffEngagementItems: CategoryItem[] = [
  {
    title: "Gamification System",
    section: "staff-engagement",
    icon: Trophy,
    href: "/platform/staff-engagement/gamification",
  },
  {
    title: "Leaderboard",
    section: "staff-engagement",
    icon: Award,
    href: "/platform/staff-engagement/leaderboard",
  },
  {
    title: "Certificate of Completion",
    section: "staff-engagement",
    icon: Medal,
    href: "/platform/staff-engagement/certificates",
  },
];

export const aiAssessmentsItems: CategoryItem[] = [
  {
    title: "Benchmark/Recruitment Test",
    section: "ai-assessments",
    icon: FileText,
    href: "/platform/ai-assessments/recruitment-test",
  },
];

export const forStaffCard: FeatureCardItem = {
  title: "For Staff",
  description: "Features that enhance staff's Business English speaking skills",
  image: "/app-screenshots/fp-computer.svg",
  icon: ChevronRight,
  href: "/platform/for-staff",
};

export const forHrCard: FeatureCardItem = {
  title: "For HR/L&D",
  description: "Features to track staff performance and progress",
  image: "/app-screenshots/fp-computer.svg",
  icon: ChevronRight,
  href: "/platform/for-hr",
};

// Main menu structure
export const platformMenu = {
  title: "Platform",
  allFeatures,
  categories: [
    {
      title: "Interactive Learning",
      items: interactiveLearningItems,
      icon: BookOpen,
    },
    {
      title: "Localization",
      items: localizationItems,
      icon: Globe,
    },
    {
      title: "HR/L&D Solutions",
      items: hrSolutionsItems, 
      icon: GanttChart,
    },
    {
      title: "Staff Engagement",
      items: staffEngagementItems,
      icon: Users,
    },
    {
      title: "AI-Powered Assessments",
      items: aiAssessmentsItems,
      icon: Brain,
    },
  ],
  featureCards: [forStaffCard, forHrCard],
  cta: secureEarlyAccess,
};
