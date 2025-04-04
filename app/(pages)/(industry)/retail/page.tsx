import React from 'react';
import { getIndustryBySlug } from '../../../../components/industry/data/hero';
import IndustryTemplate from '../../../../components/industry/IndustryTemplate';
import { notFound } from 'next/navigation';

export default function RetailPage() {
  const industry = getIndustryBySlug('retail');
  
  if (!industry) {
    notFound();
  }

  return <IndustryTemplate industry={industry} />;
} 