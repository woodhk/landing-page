"use client";

import React from "react";
import Hero from "./components/Hero";
import Scenario from "./components/Scenario";
import Coaches from "./components/Coaches";
import LanguageDrills from "./components/LanguageDrills";
import FAQ from "../../../../components/home/FAQ";
import CtaSection from "../../../../components/home/Cta";

export default function StaffPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Scenario />
      <Coaches />
      <LanguageDrills />
      <FAQ />
      <CtaSection />
    </div>
  );
}