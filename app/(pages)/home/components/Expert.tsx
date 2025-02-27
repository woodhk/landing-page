import React from 'react';
import { motion } from 'framer-motion'; // Ensure framer-motion is installed

const Experts = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two Column Section with Equal Height */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* Left Column - Badge, Title, Text, and Metrics */}
          <div className="flex flex-col space-y-6">
            {/* Badge and Title */}
            <div>
              <div className="inline-block px-4 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-600 shadow-sm">
                Expert Designed
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white text-left">
                30 Years of Experience as a Business English Consultancy
              </h1>
            </div>

            {/* Text Content */}
            <div className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Over the past 30 years, we've conducted training for hundreds of Hong Kong and international companies, including many <span className="font-bold">Fortune 500 companies</span>.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Fluentpro is the latest product of The <span className="font-bold">LanguageKey</span>.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                It leverages AI to deliver 30 years of expertise in designing and delivering business English training courses, bringing real-world learning experiences straight to your desktop.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Our goal is to offer tailored, 1-on-1 business English coaching to anyone, anywhere, at any time, providing a more cost-effective solution.
              </p>
            </div>

              {/* Metrics Section */}
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-6">
                <div className="flex-1 bg-neutral-50 dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md hover:-translate-y-1 transition-transform transition-shadow duration-300">
                  <div className="text-3xl font-bold text-dynamic-blue">200+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Companies Collaborated</div>
                </div>
                <div className="flex-1 bg-neutral-50 dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md hover:-translate-y-1 transition-transform transition-shadow duration-300">
                  <div className="text-3xl font-bold text-dynamic-blue">10,000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Staff Trained</div>
                </div>
                <div className="flex-1 bg-neutral-50 dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md hover:-translate-y-1 transition-transform transition-shadow duration-300">
                  <div className="text-3xl font-bold text-dynamic-blue">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Corporate Training Programs</div>
                </div>
              </div>
              </div>
          {/* Right Column - Image with Animation */}
          <motion.div 
            className="bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden h-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="path/to/training-image.jpg" 
              alt="Training session at LanguageKey" 
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experts;
