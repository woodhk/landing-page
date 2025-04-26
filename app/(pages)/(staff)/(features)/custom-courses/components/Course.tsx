"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { courseSteps } from '../data/course';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Course = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="flex flex-col items-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              Customised Learning
            </span>{" "}
            For Every Staff Member
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 text-center max-w-3xl leading-relaxed">
            Our step-by-step approach creates tailored English courses and lessons that directly reflect your staff's daily interactions.
          </p>
          <motion.div
            className="mt-8 animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <ChevronDown className="w-8 h-8 text-blue-500" />
          </motion.div>
        </motion.div>

        <div ref={containerRef} className="space-y-24 md:space-y-32 relative">
          {/* Vertical progress line with animation */}
          <div className="absolute left-3 top-0 bottom-0 w-1 bg-gray-200 hidden md:block" />
          <motion.div 
            className="absolute left-3 top-0 w-1 bg-blue-600 origin-top hidden md:block"
            style={{ 
              height: scrollYProgress,
              scaleY: scrollYProgress 
            }}
          />

          {courseSteps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
              className="relative group"
            >
              <div className="grid md:grid-cols-[48px_1fr_1fr] gap-6 md:gap-10 items-start">
                {/* Timeline column */}
                <div className="hidden md:block relative">
                  <motion.div 
                    className="absolute left-0 w-12 h-12 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center text-blue-600 font-bold shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                    style={{ transform: 'translateX(-25%)' }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {step.id}
                  </motion.div>
                </div>

                {/* Content column */}
                <div className="space-y-4">
                  {/* Mobile step number */}
                  <motion.div 
                    className="md:hidden w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-md"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {step.id}
                  </motion.div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                    {step.title}
                  </h3>
                  
                  <div className="space-y-4">
                    {step.description.map((paragraph, i) => (
                      <p key={i} className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  {step.buttonText && (
                    <motion.div
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link 
                        href="/role-plays" 
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium gap-1.5 py-2 group/link"
                        aria-label={`Learn more about ${step.title}`}
                      >
                        <span>{step.buttonText}</span>
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  )}
                </div>

                {/* Image column */}
                <motion.div 
                  className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-white 
                            ring-1 ring-gray-200 group-hover:ring-blue-300 transition-all duration-300
                            shadow-md group-hover:shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    fill
                    className="object-contain p-2 rounded-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading={index === 0 ? "eager" : "lazy"}
                    quality={90}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Course;
