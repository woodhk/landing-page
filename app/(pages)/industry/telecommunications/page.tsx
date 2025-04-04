import React from 'react';
import { getIndustryBySlug } from '../../../../components/industry/data/hero';
import IndustryTemplate from '../../../../components/industry/IndustryTemplate';
import { notFound } from 'next/navigation';

export default function TelecommunicationsPage() {
  const industry = getIndustryBySlug('telecommunications');
  
  if (!industry) {
    notFound();
  }

  return <IndustryTemplate industry={industry} />;
} 