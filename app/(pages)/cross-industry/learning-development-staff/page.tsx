import React from 'react';
import { getCrossIndustryBySlug } from '../../../../components/industry/data/cross-industry/cross-industry-hero';
import CrossIndustryTemplate from '../../../../components/industry/templates/CrossIndustryTemplate';

export default function LearningDevelopmentStaffPage() {
  const crossIndustry = getCrossIndustryBySlug('learning-development-staff');

  if (!crossIndustry) {
    return <div>Cross-industry role not found</div>;
  }

  return <CrossIndustryTemplate crossIndustry={crossIndustry} />;
}

export const metadata = {
  title: 'Learning and Development Staff | Business English Training',
  description: 'Empower your learning and development teams with the Business English skills to deliver impactful training, facilitate engaging workshops, and drive continuous professional growth across your organization.',
}; 