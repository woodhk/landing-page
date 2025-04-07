import React from 'react';
import { getCrossIndustryBySlug } from '../../../../components/industry/data/cross-industry/cross-industry-hero';
import CrossIndustryTemplate from '../../../../components/industry/templates/CrossIndustryTemplate';

export default function FinancePage() {
  const crossIndustry = getCrossIndustryBySlug('finance');

  if (!crossIndustry) {
    return <div>Cross-industry role not found</div>;
  }

  return <CrossIndustryTemplate crossIndustry={crossIndustry} />;
}

export const metadata = {
  title: 'Finance | Business English Training',
  description: 'Provide your finance professionals with the Business English skills to present financial data, explain complex concepts, and guide strategic decisions across your global organization.',
}; 