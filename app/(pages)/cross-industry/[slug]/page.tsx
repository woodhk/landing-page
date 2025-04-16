import React from 'react';
import { notFound } from 'next/navigation';
import { getCrossIndustryBySlug, getAllCrossIndustries } from '../../../../components/industry/data/cross-industry/cross-industry-hero';
import CrossIndustryTemplate from '../../../../components/industry/templates/CrossIndustryTemplate';

interface CrossIndustryPageProps {
  params: {
    slug: string;
  };
}

export default async function CrossIndustryPage({ params }: CrossIndustryPageProps) {
  const { slug } = params;
  const crossIndustry = getCrossIndustryBySlug(slug);

  if (!crossIndustry) {
    notFound();
  }

  return <CrossIndustryTemplate crossIndustry={crossIndustry} />;
}

// Generate static params for all cross-industry roles
export async function generateStaticParams() {
  const crossIndustries = getAllCrossIndustries();
  
  return crossIndustries.map((crossIndustry) => ({
    slug: crossIndustry.slug,
  }));
} 