"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { industryData } from '../data/industry';

// Import components
import SectionHeader from './Industry/SectionHeader';
import MobileIndustryList from './Industry/Mobile/IndustryList';
import DesktopIndustryList from './Industry/Desktop/IndustryList';
import DesktopIndustryDetails from './Industry/Desktop/IndustryDetails';

// Import types
import { IndustryId, IndustryRefs } from './Industry/types';

/**
 * Industry component displays different industry information with expandable/collapsible sections
 * Features responsive design for mobile and desktop views
 */
const Industry: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryId>(industryData[0].id);
  const [expandedIndustry, setExpandedIndustry] = useState<IndustryId | null>(null);
  const industryRefs = useRef<IndustryRefs>({});

  const currentIndustry = industryData.find(
    industry => industry.id === selectedIndustry
  ) || industryData[0];

  // Helper function to scroll to the selected industry
  const scrollToIndustry = (industryId: IndustryId) => {
    setTimeout(() => {
      if (industryRefs.current[industryId]) {
        industryRefs.current[industryId]?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 100);
  };

  // Handle click on industry item in mobile view
  const handleMobileIndustryClick = (industryId: IndustryId) => {
    if (expandedIndustry === industryId) {
      setExpandedIndustry(null);
    } else {
      setExpandedIndustry(industryId);
      setSelectedIndustry(industryId);
      scrollToIndustry(industryId);
    }
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start mt-8 sm:mt-10 lg:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Industry selection sidebar */}
          <div>
            {/* Mobile view */}
            <MobileIndustryList 
              expandedIndustry={expandedIndustry}
              industryRefs={industryRefs}
              onIndustryClick={handleMobileIndustryClick}
            />

            {/* Desktop view */}
            <DesktopIndustryList 
              selectedIndustry={selectedIndustry}
              onIndustryClick={setSelectedIndustry}
            />
          </div>

          {/* Industry details - Only visible on desktop */}
          <DesktopIndustryDetails industry={currentIndustry} />
        </motion.div>
      </div>
    </section>
  );
};

export default Industry;