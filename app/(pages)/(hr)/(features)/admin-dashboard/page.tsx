import React from 'react';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import FourFeatures from './components/FourFeatures';
import ThreeFeatures from './components/ThreeFeatures';
import Cta from '../../../../../components/home/Cta';
export default function AdminDashboard() {
  return (
    <div>
      <Hero />
      <FourFeatures />
      <ThreeFeatures />
      <Cta />
    </div>
  );
}
