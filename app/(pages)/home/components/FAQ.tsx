"use client";

import { useState } from 'react';
import { faqData } from '../data/FAQ';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 md:px-6 w-full md:px-32 lg:px-48 mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Column - Title */}
        <div className="md:w-2/5 lg:w-1/3">
          <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-md text-sm font-medium mb-6">
            FAQs
          </div>
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            AI Language<br />
            Learning FAQs
          </h2>
        </div>
        
        {/* Right Column - Questions */}
        <div className="md:w-3/5 lg:w-2/3 space-y-5">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="bg-blue-50 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                aria-expanded={activeIndex === index}
              >
                <span className="font-medium text-lg text-gray-900">{faq.question}</span>
                <span className="text-blue-600">
                  {activeIndex === index ? (
                    <svg 
                      className="w-6 h-6 transform transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  ) : (
                    <svg 
                      className="w-6 h-6 transform transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </span>
              </button>
              
              {activeIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-base text-gray-700">{faq.answer}</p>
                  {faq.question === "Do we have the budget for this training?" && (
                    <p className="mt-2">
                      
                    </p>
                  )}
                  {faq.question === "Will this actually improve workplace communication?" && (
                    <p className="mt-2">
                      <a 
                        href="https://language-key.vercel.app/home" 
                        className="text-blue-600 hover:underline"
                      >
                        Learn more
                      </a>
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;