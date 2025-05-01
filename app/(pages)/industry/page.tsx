import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Industry from './components/Industry';
import CrossIndustry from './components/CrossIndustry';
import FAQ from '../../../components/home/FAQ';
import CtaSection from "../../../components/home/Cta";
export default function IndustryLandingPage() {
  return (
    <div>
      <Hero />
      <Benefits />
      <Industry />
      <CrossIndustry />
      <FAQ />
      <CtaSection />
    </div>
  );
}