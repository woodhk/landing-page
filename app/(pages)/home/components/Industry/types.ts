import { IndustryData } from '../../data/industry';

// Define types used throughout Industry component
export type IndustryId = string;
export type IndustryRefs = { [key: string]: HTMLDivElement | null };

export interface MobileIndustryListProps {
  expandedIndustry: IndustryId | null;
  industryRefs: React.RefObject<IndustryRefs>;
  onIndustryClick: (id: IndustryId) => void;
}

export interface MobileExpandedContentProps {
  industry: IndustryData;
}

export interface DesktopIndustryListProps {
  selectedIndustry: IndustryId;
  onIndustryClick: (id: IndustryId) => void;
}

export interface DesktopIndustryDetailsProps {
  industry: IndustryData;
}

export interface DesktopClientLogosProps {
  clientLogos: Array<{ name: string; logo: string }>;
}

export interface IndustryAnimationProps {
  industryId: string;
} 