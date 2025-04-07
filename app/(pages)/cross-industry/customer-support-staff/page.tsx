import React from 'react';
import { getCrossIndustryBySlug } from '../../../../components/industry/data/cross-industry/cross-industry-hero';
import CrossIndustryTemplate from '../../../../components/industry/templates/CrossIndustryTemplate';

export default function CustomerSupportStaffPage() {
  const crossIndustry = getCrossIndustryBySlug('customer-support-staff');

  if (!crossIndustry) {
    return <div>Cross-industry role not found</div>;
  }

  return <CrossIndustryTemplate crossIndustry={crossIndustry} />;
}

export const metadata = {
  title: 'Customer Support Staff | Business English Training',
  description: 'Empower your customer support team with the Business English skills needed to resolve issues, build rapport, and deliver exceptional service across all channels.',
}; 