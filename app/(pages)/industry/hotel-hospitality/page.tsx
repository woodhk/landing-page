import React from 'react';
import { getIndustryBySlug } from '../../../../components/industry/data/industry/hero';
import IndustryTemplate from '../../../../components/industry/IndustryTemplate';
import { notFound } from 'next/navigation';

export default function HotelHospitalityPage() {
  const industry = getIndustryBySlug('hotel-hospitality');
  
  if (!industry) {
    notFound();
  }

  return <IndustryTemplate industry={industry} />;
} 