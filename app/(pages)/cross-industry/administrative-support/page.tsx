import React from 'react';
import { getCrossIndustryBySlug } from '../../../../components/industry/data/cross-industry-hero';
import CrossIndustryTemplate from '../../../../components/industry/CrossIndustryTemplate';

export default function AdministrativeSupportPage() {
  const crossIndustry = getCrossIndustryBySlug('administrative-support');

  if (!crossIndustry) {
    return <div>Cross-industry role not found</div>;
  }

  return <CrossIndustryTemplate crossIndustry={crossIndustry} />;
}

export const metadata = {
  title: 'Administrative Support | Business English Training',
  description: 'Support your admin team with the spoken English needed to coordinate schedules, explain changes, and clarify instructions without hesitation.',
}; 