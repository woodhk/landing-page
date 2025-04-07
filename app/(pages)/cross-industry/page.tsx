import React from 'react';
import Link from 'next/link';
import { getAllCrossIndustries, CrossIndustryHeroData } from '../../../components/industry/data/cross-industry-hero';

export default function CrossIndustryLandingPage() {
  const crossIndustries = getAllCrossIndustries();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Cross-Industry Solutions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {crossIndustries.map((crossIndustry: CrossIndustryHeroData) => (
          <Link 
            key={crossIndustry.id}
            href={`/cross-industry/${crossIndustry.slug}`} 
            className="block p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{crossIndustry.name}</h2>
            <p className="text-gray-600 line-clamp-3">{crossIndustry.hero.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
} 