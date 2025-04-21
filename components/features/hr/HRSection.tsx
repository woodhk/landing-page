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
    <section className="w-full py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-5 md:px-8">
        {/* Header with improved hierarchy */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <span className="inline-block py-1 px-3 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
            {mainTitle}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900">
            {subtitle}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Tabs with improved visual design */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-3xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all shadow-sm ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        
        {/* Content area with better spacing and layout */}
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Left side content */}
          <div className="md:w-2/5 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{activeTabData.title}</h3>
            <p className="text-gray-700 leading-relaxed">{activeTabData.description}</p>
            <Link 
              href={activeTabData.link}
              className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-6 text-base font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 shadow-sm"
            >
              Learn more <span className="ml-2">→</span>
            </Link>
          </div>
          
          {/* Right side image with improved styling */}
          <div className="md:w-3/5">
            <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <Image 
                src={activeTabData.imageUrl} 
                alt={activeTabData.title}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform hover:scale-105 duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HRSection;