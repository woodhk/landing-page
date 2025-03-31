"use client";

import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FlexibleFocused from "./components/FlexibleFocused";
import AiEthics from '../../../../components/home/AiEthics';
import FAQ from '../../../../components/home/FAQ';
import Cta from '../../../../components/home/Cta';


export default function AdminPage() {
  return (
    <div>
      <Hero />
      <Features />
      <FlexibleFocused />
      <AiEthics />
      <FAQ />
      <Cta />
    </div>
  )
}