"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { courseSteps } from '../data/process';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Process = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 text-center mb-4">
            Customised Learning For Every Staff Member
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl">
            Our step-by-step approach creates tailored role-plays to your specific company.
          </p>
        </div>

        <div className="space-y-32 relative">
          {/* Vertical progress line */}
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-blue-600 hidden md:block" />

          {courseSteps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="grid md:grid-cols-[48px_1fr_1fr] gap-6 mb-12 items-start">
                {/* Timeline column */}
                <div className="hidden md:block relative">
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-lg" style={{ transform: 'translateX(-25%)' }}>
                    {step.id}
                  </div>
                </div>

                {/* Content column */}
                <div className="space-y-3">
                  {/* Mobile step number */}
                  <div className="md:hidden w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    {step.id}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  
                  <div className="space-y-4">
                    {step.description.map((paragraph, i) => (
                      <p key={i} className="text-lg text-gray-700">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  {step.buttonText && (
                    <Link href="/role-plays" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium gap-1">
                      {step.buttonText}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>

                {/* Image column */}
                <div className="relative aspect-[4/3] w-full shadow-xl rounded-lg overflow-hidden bg-gray-50 transition-all duration-300 hover:shadow-2xl">
                  <Image
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    fill
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default Process;
