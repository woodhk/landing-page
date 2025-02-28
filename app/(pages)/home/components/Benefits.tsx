import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { benefitCards } from '../data/benefit';

const Benefits = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100
      }
    }
  };

  // Icons for each card
  const cardIcons = [
    // Scenario-based training icon
    <svg key="scenario" xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>,
    // Practice with confidence icon
    <svg key="practice" xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>,
    // Soft skills icon
    <svg key="soft-skills" xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 dark:bg-blue-900 rounded-full opacity-30 blur-3xl translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100 dark:bg-indigo-900 rounded-full opacity-30 blur-3xl -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 shadow-sm mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Interactive Learning
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
            AI Role-Plays Simulate <span className="text-blue-600 dark:text-blue-400">Real Business Conversations</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Learn industry-specific language, cultural awareness, and soft skills.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {benefitCards.map((card, index) => (
            <motion.div 
              key={card.id} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 relative h-56">
                <div className="flex items-center justify-center h-full text-gray-700 dark:text-gray-300 text-xl font-medium">
                  Placeholder
                </div>
              </div>
              
              <div className="p-8">
                <span className="inline-block px-4 py-1.5 text-sm font-medium bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full mb-4">
                  {card.tag}
                </span>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{card.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;