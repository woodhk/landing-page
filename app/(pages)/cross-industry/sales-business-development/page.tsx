import React from 'react';
import { getCrossIndustryBySlug } from '../../../../components/industry/data/cross-industry/cross-industry-hero';
import CrossIndustryTemplate from '../../../../components/industry/templates/CrossIndustryTemplate';

export default function SalesBusinessDevelopmentPage() {
  const crossIndustry = getCrossIndustryBySlug('sales-business-development');

  if (!crossIndustry) {
    return <div>Cross-industry role not found</div>;
  }

  return <CrossIndustryTemplate crossIndustry={crossIndustry} />;
}

export const metadata = {
  title: 'Sales and Business Development | Business English Training',
  description: 'Equip your sales and business development teams with the Business English skills to articulate value propositions, navigate negotiations, and build profitable relationships in global markets.',
}; 