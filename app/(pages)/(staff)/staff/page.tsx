"use client";

import React from "react";
import Hero from "./components/Hero";
import Scenario from "./components/Scenario";
import ComparisonTable from "./components/Comparison"
import Section from "./components/Sections";
import LanguageDrills from "./components/LanguageDrills";
import FAQ from "../../../../components/home/FAQ";
import CtaSection from "../../../../components/home/Cta";

export default function StaffPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Scenario />
      <ComparisonTable />
      
      <FAQ />
      <CtaSection />
    </div>
  );
}