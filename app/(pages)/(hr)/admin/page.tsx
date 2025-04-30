"use client";

import React from "react";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Features from "./components/Features";
import AiEthics from '../../../../components/home/AiEthics';
import FAQ from '../../../../components/home/FAQ';
import Cta from '../../../../components/home/Cta';


export default function AdminPage() {
  return (
    <div>
      <Hero />
      <Benefits />
      <Features />
      <AiEthics />
      <FAQ />
      <Cta />
    </div>
  )
}