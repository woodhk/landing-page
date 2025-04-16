import React from 'react';
import { notFound } from 'next/navigation';
import { getIndustryBySlug, getAllIndustries } from '../../../../components/industry/data/industry/hero';
import IndustryTemplate from '../../../../components/industry/templates/IndustryTemplate';

interface IndustryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
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