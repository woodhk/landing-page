import React from 'react';
import { getIndustryBySlug } from '../../../../components/industry/data/industry/hero';
import IndustryTemplate from '../../../../components/industry/templates/IndustryTemplate';
import { notFound } from 'next/navigation';

export default function RealEstatePage() {
  const industry = getIndustryBySlug('real-estate');
  
  if (!industry) {
    notFound();
  }

  return <IndustryTemplate industry={industry} />;
} 