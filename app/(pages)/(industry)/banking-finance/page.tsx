import React from 'react';
import { getIndustryBySlug } from '../../../../components/industry/data/hero';
import IndustryTemplate from '../../../../components/industry/IndustryTemplate';
import { notFound } from 'next/navigation';

export default function BankingFinancePage() {
  const industry = getIndustryBySlug('banking-finance');
  
  if (!industry) {
    notFound();
  }

  return <IndustryTemplate industry={industry} />;
} 