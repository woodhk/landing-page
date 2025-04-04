import React from 'react';
import Link from 'next/link';
import { getAllIndustries } from '../../../components/industry/data';
import { IndustryData } from '../../../components/industry/types';

export default function IndustryLandingPage() {
  const industries = getAllIndustries();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Industry Solutions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((industry: IndustryData) => (
          <Link 
            key={industry.id}
            href={`/industry/${industry.slug}`} 
            className="block p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{industry.name}</h2>
            <p className="text-gray-600 line-clamp-3">{industry.hero.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
