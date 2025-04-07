import React from 'react';
import { getCrossIndustryBySlug } from '../../../../components/industry/data/cross-industry/cross-industry-hero';
import CrossIndustryTemplate from '../../../../components/industry/templates/CrossIndustryTemplate';

export default function HROnboardingStaffPage() {
  const crossIndustry = getCrossIndustryBySlug('hr-onboarding-staff');

  if (!crossIndustry) {
    return <div>Cross-industry role not found</div>;
  }

  return <CrossIndustryTemplate crossIndustry={crossIndustry} />;
}

export const metadata = {
  title: 'HR and Onboarding Staff | Business English Training',
  description: 'Equip your HR and onboarding teams with the Business English skills to conduct meaningful interviews, deliver effective feedback, and create exceptional employee experiences at every stage of the talent lifecycle.',
}; 