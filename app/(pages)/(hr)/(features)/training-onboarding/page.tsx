import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Process from './components/Process';
import ManageAccounts from './components/ManageAccounts';
import Cta from '../../../../../components/home/Cta';
export default function TrainingOnboarding() {
  return (
    <div>
      <Hero />
      <Benefits />
      <Process />
      <ManageAccounts />
      <Cta />
    </div>
  );
}
