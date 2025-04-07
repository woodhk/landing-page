import React from 'react';
import { getCrossIndustryBySlug } from '../../../../components/industry/data/cross-industry/cross-industry-hero';
import CrossIndustryTemplate from '../../../../components/industry/templates/CrossIndustryTemplate';

export default function ITTechnicalSupportPage() {
  const crossIndustry = getCrossIndustryBySlug('it-technical-support');

  if (!crossIndustry) {
    return <div>Cross-industry role not found</div>;
  }

  return <CrossIndustryTemplate crossIndustry={crossIndustry} />;
}

export const metadata = {
  title: 'IT and Technical Support | Business English Training',
  description: 'Equip your IT and technical support teams with the Business English skills to troubleshoot issues, communicate solutions, and provide seamless support to users across your global organization.',
}; 