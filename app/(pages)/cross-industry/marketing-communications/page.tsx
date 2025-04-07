import React from 'react';
import { getCrossIndustryBySlug } from '../../../../components/industry/data/cross-industry/cross-industry-hero';
import CrossIndustryTemplate from '../../../../components/industry/templates/CrossIndustryTemplate';

export default function MarketingCommunicationsPage() {
  const crossIndustry = getCrossIndustryBySlug('marketing-communications');

  if (!crossIndustry) {
    return <div>Cross-industry role not found</div>;
  }

  return <CrossIndustryTemplate crossIndustry={crossIndustry} />;
}

export const metadata = {
  title: 'Marketing and Communications | Business English Training',
  description: 'Empower your marketing and communications teams with the Business English fluency to create compelling content, engage audiences, and build your brand across global markets.',
}; 