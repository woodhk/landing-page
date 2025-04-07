import React from 'react';
import { getCrossIndustryBySlug } from '../../../../components/industry/data/cross-industry/cross-industry-hero';
import CrossIndustryTemplate from '../../../../components/industry/templates/CrossIndustryTemplate';

export default function OperationsProjectManagementPage() {
  const crossIndustry = getCrossIndustryBySlug('operations-project-management');

  if (!crossIndustry) {
    return <div>Cross-industry role not found</div>;
  }

  return <CrossIndustryTemplate crossIndustry={crossIndustry} />;
}

export const metadata = {
  title: 'Operations and Project Management | Business English Training',
  description: 'Equip your operations and project management teams with the Business English skills to lead initiatives, coordinate resources, and communicate effectively across global stakeholders.',
}; 