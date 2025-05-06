import React from 'react';
import Hero from './components/Hero';
import EmotionBenefits from './components/EmotionBenefits';
import Benefits from './components/Benefits';
import Performance from './components/Performance';
import Admin from './components/Admin';
import Cta from '../../../../../components/home/Cta';
export default function AdminDashboard() {
  return (
    <div>
      <Hero />
      <EmotionBenefits />
      <Benefits />
      <Performance />
      <Admin />
      <Cta />
    </div>
  );
}
