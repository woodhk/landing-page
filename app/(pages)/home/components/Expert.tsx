import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Experts = () => {
  // Animation variants for staggered animations
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
    hidden: { y: 20, opacity: 0 },
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

  const metricVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.1,
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    })
  };

  // Client logos for the brands section
  const clientLogos = [
    { src: '/hsbc.png', alt: 'HSBC' },
    { src: '/pwc.png', alt: 'PwC' },
    { src: '/deloitte.png', alt: 'Deloitte' },
    { src: '/jpmorgan.png', alt: 'JP Morgan' },
    { src: '/adidas.png', alt: 'Adidas' }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute bottom-0 right-0 w-3/4 h-full opacity-50 dark:opacity-40" viewBox="0 0 100 200" preserveAspectRatio="none">
          <line x1="0" y1="200" x2="100" y2="100" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth="2" className="text-blue-400/50" />
          <line x1="20" y1="200" x2="100" y2="120" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth="2" className="text-gray-400/40" />
          <line x1="40" y1="200" x2="100" y2="140" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth="2" className="text-blue-300/50" />
          <line x1="60" y1="200" x2="100" y2="160" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth="2" className="text-gray-400/40" />
          <line x1="80" y1="200" x2="100" y2="180" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth="2" className="text-blue-300/50" />
        </svg>
      </div>
      
      {/* Add decorative elements for enhanced depth */}
      <div className="absolute -top-40 right-20 w-60 md:w-80 h-60 md:h-80 rounded-full bg-blue-100 dark:bg-blue-900 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 -left-20 w-40 md:w-60 h-40 md:h-60 rounded-full bg-gray-100 dark:bg-indigo-900 opacity-20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Content Column */}
          <div className="flex flex-col space-y-6 md:space-y-8">
            {/* Badge and Title */}
            <motion.div variants={itemVariants}>
              <h2 className="mt-2 md:mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                <span className="text-blue-600 dark:text-blue-400">30 Years</span> of Experience as a Business English Consultancy
              </h2>
            </motion.div>

            {/* Text Content */}
            <motion.div className="space-y-3 md:space-y-4" variants={itemVariants}>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Over the past 30 years, we've conducted training for 100s of Hong Kong and international companies, including many <span className="font-bold text-blue-600 dark:text-blue-400">Fortune 500 companies</span>.
              </p>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Fluentpro is the latest product of <span className="font-bold text-blue-600 dark:text-blue-400">The LanguageKey</span>.
              </p>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                It leverages AI to deliver 30 years of expertise in designing and delivering business English training courses, bringing real-world learning experiences straight to your desktop.
              </p>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Our goal is to offer tailored, 1-on-1 business English coaching to anyone, anywhere, at any time, bringing a more cost effective solution.
              </p>
            </motion.div>

            {/* Metrics Section with enhanced styling */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-2 md:mt-4"
              variants={itemVariants}
            >
              {[
                { value: "200+", label: "Global Companies", index: 0 },
                { value: "10,000+", label: "Staff Trained", index: 1 },
                { value: "500+", label: "Custom Programs", index: 2 }
              ].map((metric, index) => (
                <motion.div 
                  key={index}
                  custom={metric.index}
                  variants={metricVariants}
                  className="bg-white dark:bg-gray-800 rounded-xl p-3 md:p-4 shadow-lg border border-blue-100 dark:border-blue-900 flex flex-col items-start justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 mb-1 md:mb-2 text-left w-full">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <button className="mt-2 md:mt-4 inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 border border-transparent text-sm md:text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </motion.div>
          </div>

          {/* Right Column - Image (hidden on mobile) */}
          <div className="relative order-first lg:order-last hidden lg:block">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-full opacity-40 blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-100 dark:bg-indigo-900 rounded-full opacity-40 blur-2xl"></div>
            
            <motion.div 
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                type: "spring", 
                damping: 20, 
                stiffness: 100,
                delay: 0.2
              }}
            >
              {/* Using proper Next.js Image component for optimization */}
              <div className="aspect-w-16 aspect-h-16 lg:aspect-h-14 w-full h-full flex">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-blue-900 dark:to-indigo-900 w-full h-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 dark:text-blue-300 opacity-80">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M9 3v18" />
                    <path d="M9 15h12" />
                    <path d="M15 9h6" />
                    <path d="M21 21V8" />
                  </svg>
                </div>
              </div>
              
              {/* Floating stats card for visual interest */}
              <motion.div 
                className="absolute -bottom-5 -right-5 sm:bottom-5 sm:right-5 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-100 dark:border-blue-900 max-w-[200px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 bg-gray-100 dark:bg-blue-900 p-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">92%</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Client satisfaction</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experts;