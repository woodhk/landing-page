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

// Tab for Industry and Cross-Industry
export const industryTab: SectionBase = {
  title: "Industry",
  icon: Building2,
  href: "/solutions/industry",
};

export const crossIndustryTab: SectionBase = {
  title: "Cross-Industry",
  icon: Users,
  href: "/solutions/cross-industry",
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
    href: "/solutions/industry/banking-finance",
  },
  {
    title: "Shipping & Logistics",
    description: "Communicate delivery updates, delays, and instructions with clarity.",
    icon: Ship,
    href: "/solutions/industry/shipping-logistics",
  },
  {
    title: "Real Estate",
    description: "Master client interactions, property discussions, and negotiations.",
    icon: Home,
    href: "/solutions/industry/real-estate",
  },
  {
    title: "Hotels",
    description: "Enhance guest communication and hospitality service.",
    icon: Hotel,
    href: "/solutions/industry/hotels",
  },
  {
    title: "Retail",
    description: "Build customer rapport and handle transactions professionally.",
    icon: ShoppingBag,
    href: "/solutions/industry/retail",
  },
  {
    title: "Telecommunications",
    description: "Deliver clear technical support and customer service responses.",
    icon: Phone,
    href: "/solutions/industry/telecommunications",
  },
  {
    title: "Insurance",
    description: "Explain policies, claims, and benefits with confidence.",
    icon: Building,
    href: "/solutions/industry/insurance",
  },
  {
    title: "IT",
    description: "Communicate technical concepts and support clients with clarity.",
    icon: Network,
    href: "/solutions/industry/it",
  },
  {
    title: "Government",
    description: "Navigate policy discussions and stakeholder engagement effectively.",
    icon: Landmark,
    href: "/solutions/industry/government",
  },
];

// Cross-Industry items
export const crossIndustryItems: IndustryItem[] = [
  {
    title: "Administrative Support Staff",
    description: "Communicate professionally in office interactions.",
    icon: UserCog,
    href: "/solutions/cross-industry/administrative-support",
  },
  {
    title: "Client Relationship & Account Management Staff",
    description: "Build strong client relationships and handle business discussions effectively.",
    icon: UserCircle,
    href: "/solutions/cross-industry/client-relationship",
  },
  {
    title: "Customer Support Staff",
    description: "Respond to customer inquiries, complaints, and support requests with clarity.",
    icon: Store,
    href: "/solutions/cross-industry/customer-support",
  },
  {
    title: "HR & Onboarding Staff",
    description: "Conduct interviews, onboard employees, and handle HR-related communication confidently.",
    icon: Users,
    href: "/solutions/cross-industry/hr-onboarding",
  },
  {
    title: "Sales & Business Development",
    description: "Persuade clients, negotiate deals, and present business proposals effectively.",
    icon: Briefcase,
    href: "/solutions/cross-industry/sales-business-development",
  },
];

// Main solutions menu structure
export const solutionsMenu = {
  title: "Solutions",
  tabs: [industryTab, crossIndustryTab],
  industry: industryItems,
  crossIndustry: crossIndustryItems,
  requestIndustry,
  cta: secureEarlyAccess,
};
