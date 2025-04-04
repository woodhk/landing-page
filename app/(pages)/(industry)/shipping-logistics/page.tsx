import React from 'react';
import { getIndustryBySlug } from '../../../../components/industry/data';
import IndustryTemplate from '../../../../components/industry/IndustryTemplate';
import { notFound } from 'next/navigation';

export default function ShippingLogisticsPage() {
  const industry = getIndustryBySlug('shipping-logistics');
  
  if (!industry) {
    notFound();
  }

  return <IndustryTemplate industry={industry} />;
} 