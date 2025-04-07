import React from 'react';
import { getCrossIndustryBySlug } from '../../../../components/industry/data/cross-industry/cross-industry-hero';
import CrossIndustryTemplate from '../../../../components/industry/templates/CrossIndustryTemplate';

export default function ClientRelationshipPage() {
  const crossIndustry = getCrossIndustryBySlug('client-relationship');

  if (!crossIndustry) {
    return <div>Cross-industry role not found</div>;
  }

  return <CrossIndustryTemplate crossIndustry={crossIndustry} />;
}

export const metadata = {
  title: 'Client Relationship & Account Management Staff | Business English Training',
  description: 'Empower your client relationship and account management teams with the Business English skills to strengthen partnerships, handle high-stakes conversations, and deliver exceptional client experiences that drive retention and growth.',
}; 