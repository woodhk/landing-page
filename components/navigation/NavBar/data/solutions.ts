import { 
  Building2, 
  Ship, 
  Home, 
  Hotel, 
  ShoppingBag, 
  Phone, 
  Building, 
  Network, 
  Store,
  Users,
  UserCircle,
  ChevronRight,
  UserCog,
  HelpCircle,
  Briefcase,
  Landmark
} from "lucide-react";

// Define types for all menu items
interface MenuItemBase {
  title: string;
  href: string;
}

interface IndustryItem extends MenuItemBase {
  description: string;
  icon: typeof Building2;
}

// Base section types
interface SectionBase {
  title: string;
  icon: typeof Building2;
  href: string;
}

// Tab for Industry
export const industryTab: SectionBase = {
  title: "Industry",
  icon: Building2,
  href: "/solutions/industry",
};

// CTA items
export const requestIndustry = {
  title: "Request an industry",
  description: "If your industry isn't covered, our language experts will create one for free.",
  href: "#request-industry",
  icon: HelpCircle,
};

export const secureEarlyAccess = {
  title: "Secure Early Access",
  href: "https://forms.gle/tLkLiSziGZZDjLpJA",
  icon: ChevronRight,
};

// Industry items
export const industryItems: IndustryItem[] = [
  {
    title: "Banking & Finance",
    description: "Improve client communication and financial discussions in English.",
    icon: Building2,
    href: "/industry/banking-finance",
  },
  {
    title: "Shipping & Logistics",
    description: "Communicate delivery updates, delays, and instructions with clarity.",
    icon: Ship,
    href: "/industry/shipping-logistics",
  },
  {
    title: "Real Estate",
    description: "Master client interactions, property discussions, and negotiations.",
    icon: Home,
    href: "/industry/real-estate",
  },
  {
    title: "Hotels",
    description: "Enhance guest communication and hospitality service.",
    icon: Hotel,
    href: "/industry/hotel-hospitality",
  },
  {
    title: "Retail",
    description: "Build customer rapport and handle transactions professionally.",
    icon: ShoppingBag,
    href: "/industry/retail",
  },
  {
    title: "Telecommunications",
    description: "Deliver clear technical support and customer service responses.",
    icon: Phone,
    href: "/industry/telecommunications",
  },
  {
    title: "Insurance",
    description: "Explain policies, claims, and benefits with confidence.",
    icon: Building,
    href: "/industry/insurance",
  },
  {
    title: "IT",
    description: "Communicate technical concepts and support clients with clarity.",
    icon: Network,
    href: "/industry/it",
  },
  {
    title: "Government",
    description: "Navigate policy discussions and stakeholder engagement effectively.",
    icon: Landmark,
    href: "/industry/government",
  },
];

// Main solutions menu structure
export const solutionsMenu = {
  title: "Solutions",
  tabs: [industryTab],
  industry: industryItems,
  requestIndustry,
  cta: secureEarlyAccess,
};
