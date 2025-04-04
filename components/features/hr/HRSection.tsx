"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HRSection as HRSectionType, HRTab } from '@/components/industry/types';

interface HRSectionProps {
  data: HRSectionType;
}

export const HRSection: React.FC<HRSectionProps> = ({ data }) => {
  const { mainTitle, subtitle, description, tabs } = data;
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            {mainTitle}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            {subtitle}
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-gray-200 text-gray-900'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        
        {/* Tab Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-6xl mx-auto">
          <div className="md:w-1/2 md:pr-6">
            <h3 className="text-2xl font-bold mb-4">{activeTabData.title}</h3>
            <p className="text-gray-700 mb-6">{activeTabData.description}</p>
            <Link 
              href={activeTabData.link}
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-200 px-6 text-sm font-medium transition-colors hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Learn more <span className="ml-2">→</span>
            </Link>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative h-80 w-full rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={activeTabData.imageUrl} 
                alt={activeTabData.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HRSection; 