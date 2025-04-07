import React from 'react';
import { getCrossIndustryBySlug } from '../../../../components/industry/data/cross-industry/cross-industry-hero';
import CrossIndustryTemplate from '../../../../components/industry/templates/CrossIndustryTemplate';

export default function TeamDepartmentLeadershipPage() {
  const crossIndustry = getCrossIndustryBySlug('team-department-leadership');

  if (!crossIndustry) {
    return <div>Cross-industry role not found</div>;
  }

  return <CrossIndustryTemplate crossIndustry={crossIndustry} />;
}

export const metadata = {
  title: 'Team and Department Leadership | Business English Training',
  description: 'Equip your team leaders and managers with the Business English skills to motivate teams, provide clear direction, and communicate effectively across all levels of your organization.',
}; 