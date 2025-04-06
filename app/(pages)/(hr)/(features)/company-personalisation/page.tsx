import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Process from './components/Process';
import AiEthics from '../../../../../components/home/AiEthics';
import Cta from '../../../../../components/home/Cta';

export default function CompanyPersonalisation() {
  return (
    <div>
      <Hero />
      <Benefits />
      <Process />
      <AiEthics />
      <Cta />
    </div>
  );
}
