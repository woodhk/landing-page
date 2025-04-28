'use client';

import { benefitsData, benefitsHeading } from '../data/benefits';
import { LucideIcon } from 'lucide-react';
import { useState } from 'react';

type BenefitItemProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const BenefitItem = ({ icon: Icon, title, description }: BenefitItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`p-6 border-gray-200 h-[280px] flex flex-col transition-all duration-300 ease-in-out relative overflow-hidden ${
        isHovered ? 'bg-gradient-to-br from-white to-gray-50' : 'bg-white'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg border border-gray-200 shadow-xl transition-all duration-300 ${
          isHovered ? 'bg-dynamic-blue' : 'bg-white'
        }`}
      >
        <Icon className={`w-6 h-6 transition-all duration-300 ${
          isHovered ? 'text-white' : 'text-dynamic-blue'
        }`} />
      </div>
      
      <h3 className={`text-xl font-semibold mb-3 transition-all duration-300 ${
        isHovered ? 'text-dark' : ''
      }`}>
        {title}
      </h3>
      
      <p className={`text-gray-600 text-sm transition-all duration-300 ${
        isHovered ? 'text-gray-700' : ''
      }`}>
        {description}
      </p>
      
      {/* Subtle corner decorative element that appears on hover */}
      <div 
        className={`absolute bottom-0 right-0 w-16 h-16 transition-all duration-500 ease-in-out ${
          isHovered ? 'opacity-10' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(circle at bottom right, var(--dynamic-blue, #3b82f6), transparent 70%)',
          transform: isHovered ? 'scale(1.5)' : 'scale(0.8)',
        }}
      />
      
      {/* Animated underline for title */}
      <div 
        className="absolute left-6 w-12 h-0.5 bg-dynamic-blue transition-all duration-300"
        style={{
          top: '92px', // Positioned under the title
          width: isHovered ? '48px' : '0',
          opacity: isHovered ? 1 : 0,
        }}
      />
    </div>
  );
};

export default function Benefits() {
  return (
    <section className="py-28 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="flex flex-col items-center justify-center">
            <div className="text-4xl md:text-8xl text-dark-3 relative group">
             Train <span className="text-dark font-medium">Smarter, </span>Not Harder...
            </div>
            <div className="text-4xl md:text-5xl text-dark-3 mt-1 relative group">
              
            </div>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {benefitsData.map((benefit, index) => (
              <div 
                key={index} 
                className={`
                  /* Mobile borders (single column) */
                  ${index < benefitsData.length - 1 ? 'border-b border-gray-200' : ''}
                  
                  /* Medium screen borders (two columns) */
                  ${index % 2 === 0 && index < benefitsData.length - 1 ? 'md:border-r md:border-gray-200' : ''}
                  ${index < benefitsData.length - 2 ? 'md:border-b md:border-gray-200' : ''}
                  
                  /* Large screen borders (three columns) */
                  ${index % 3 === 0 ? 'lg:border-r lg:border-gray-200' : ''} 
                  ${index % 3 === 1 ? 'lg:border-r lg:border-gray-200' : ''}
                  ${index < benefitsData.length - 3 ? 'lg:border-b lg:border-gray-200' : ''}
                  
                  /* Hover scale effect for entire card group */
                  group
                `}
              >
                <BenefitItem
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}