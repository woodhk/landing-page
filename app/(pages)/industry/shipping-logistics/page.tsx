import React from 'react';
import { getIndustryBySlug } from '../../../../components/industry/data/industry/hero';
import IndustryTemplate from '../../../../components/industry/templates/IndustryTemplate';
import { notFound } from 'next/navigation';

export default function ShippingLogisticsPage() {
  const industry = getIndustryBySlug('shipping-logistics');
  
  if (!industry) {
    notFound();
  }

  return <IndustryTemplate industry={industry} />;
} 