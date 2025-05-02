"use client";

import React from 'react';
import { benefitsData, Benefit } from '../data/benefits';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Removed the vibrant colors array since we're using dynamic-blue for all icons

const Benefits: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        {/* Section heading */}
        <div className="max-w-3xl mx-auto mb-20 md:mb-28 text-center space-y-4">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-medium">Measurable benefits</span> for your organization
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Our language training solution delivers concrete results that directly impact your bottom line.
            </p>
          </motion.div>
        </div>

        {/* Two column layout - Image on left, benefits stacked on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column - Image */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative h-full flex items-center justify-center">
              <div className="rounded-2xl border border-gray-200 p-3 w-full shadow-sm">
                <Image 
                  src="/app-screenshots/admin-dashboard2.png" 
                  alt="Admin Dashboard" 
                  width={800} 
                  height={600} 
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Right column - All benefits stacked vertically */}
          <div className="order-1 lg:order-2 flex flex-col space-y-12">
            {benefitsData.map((benefit, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex space-x-8">
                  {/* Icon column */}
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ 
                      rotate: [0, -10, 10, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <motion.div 
                      className={`w-16 h-16 flex items-center justify-center border border-gray-200 rounded-full bg-white shadow-sm`}
                      whileHover={{ 
                        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                        borderColor: "rgba(209, 213, 219, 0.5)"
                      }}
                    >
                      <benefit.icon className="w-6 h-6 text-dynamic-blue" strokeWidth={1.5} />
                    </motion.div>
                  </motion.div>
                  
                  {/* Content column */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-gray-900 leading-tight">
                      {benefit.heading}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;