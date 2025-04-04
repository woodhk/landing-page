import React from 'react';
import { getIndustryBySlug } from '../../../../components/industry/data';
import IndustryTemplate from '../../../../components/industry/IndustryTemplate';
import { notFound } from 'next/navigation';

export default function RealEstatePage() {
  const industry = getIndustryBySlug('real-estate');
  
  if (!industry) {
    notFound();
  }

  return <IndustryTemplate industry={industry} />;
} 