import React from 'react';
import Link from 'next/link';
import { getAllIndustries, IndustryHeroData } from '../../../components/industry/data/industry/hero';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../../components/shared/shad-button';

export default function IndustryLandingPage() {
  const industries = getAllIndustries();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Industry Solutions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((industry: IndustryHeroData) => (
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
      <Link href="/cross-industry">
        <Button variant="default" size="lg" className="bg-dynamic-blue hover:bg-dynamic-blue/90 shadow-lg mt-20 py-6">
          View Cross-Industry Solutions
          <ArrowRight className="h-5 w-5" />
        </Button>
      </Link>
    </div>
  );
} 