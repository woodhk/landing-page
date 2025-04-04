import React from 'react';
import { notFound } from 'next/navigation';
import { getIndustryBySlug, getAllIndustries } from '../../../../components/industry/data';
import IndustryTemplate from '../../../../components/industry/IndustryTemplate';

interface IndustryPageProps {
  params: {
    slug: string;
  };
}

export default function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return <IndustryTemplate industry={industry} />;
}

// Generate static params for all industries
export async function generateStaticParams() {
  const industries = getAllIndustries();
  
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
} 