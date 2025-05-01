"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { getAllIndustries, IndustryHeroData } from '../../../../components/industry/data/industry/hero';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

// Industry card with hover effects
const IndustryCard = ({ industry }: { industry: IndustryHeroData }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Dynamic icon component
  const DynamicIcon = ({ iconName }: { iconName: string }) => {
    const Icon = (LucideIcons as any)[iconName];
    if (!Icon) return null;
    return <Icon size={40} className={`transition-all duration-300 ${
      isHovered ? 'text-white' : 'text-dynamic-blue'
    }`} />;
  };

  return (
    <div 
      className="flex flex-col h-full mb-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`flex flex-col h-full p-6 transition-all duration-300 ease-in-out relative overflow-hidden rounded-xl ${
          isHovered ? 'bg-gradient-to-br from-white to-gray-50 shadow-md' : 'bg-white'
        }`}
      >
        <div className="mb-6">
          <div 
            className={`w-16 h-16 flex items-center justify-center rounded-lg border border-gray-200 shadow-xl transition-all duration-300 ${
              isHovered ? 'bg-dynamic-blue shadow-lg' : 'bg-white'
            }`}
          >
            <DynamicIcon iconName={industry.icon} />
          </div>
        </div>
        
        <h3 className={`text-2xl font-bold mb-3 transition-all duration-300 ${
          isHovered ? 'text-dynamic-blue transform translate-x-1' : ''
        }`}>
          {industry.name}
        </h3>
        
        <p className={`text-gray-600 mb-4 line-clamp-3 transition-all duration-300 ${
          isHovered ? 'text-gray-800' : ''
        }`}>
          {industry.hero.description}
        </p>
        
        <Link 
          href={`/industry/${industry.slug}`}
          className={`text-dynamic-blue font-medium flex items-center mt-auto hover:text-dynamic-blue/80 transition-colors group ${
            isHovered ? 'transform translate-x-1' : ''
          }`}
        >
          Learn more 
          <ChevronRight className={`w-4 h-4 ml-1 transition-all duration-300 ${
            isHovered ? 'transform translate-x-1' : ''
          }`} />
        </Link>
        
        {/* Subtle corner decorative element that appears on hover */}
        <div 
          className={`absolute bottom-0 right-0 w-20 h-20 transition-all duration-500 ease-in-out ${
            isHovered ? 'opacity-10' : 'opacity-0'
          }`}
          style={{
            background: 'radial-gradient(circle at bottom right, var(--dynamic-blue, #3b82f6), transparent 70%)',
            transform: isHovered ? 'scale(1.5)' : 'scale(0.8)',
          }}
        />
      </div>
    </div>
  );
};

export default function IndustryLandingPage() {
  const industries = getAllIndustries();
  
  // Initialize Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(true);

  // Update button states when carousel state changes
  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  // Scroll prev/next methods
  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen relative py-12 px-4 md:py-20">
      {/* Split background - top 1/3 white, bottom 2/3 gray */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-1/3 bg-white"></div>
        <div className="w-full h-2/3 bg-gray-100"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden relative z-10"
        >
          {/* Main Hero Section */}
          <section className="py-16 md:py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="text-dynamic-blue font-medium mb-4">Industry Solutions</div>
                <div className="flex flex-col lg:flex-row justify-between items-start">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-2xl mb-8 lg:mb-0">
                    Whatever Your Industry<br />We Can Help.
                  </h1>
                  <div className="max-w-md">
                    <p className="text-gray-600 text-xl">
                      Receive industry and role-specific courses & lessons. If your industry isn't covered, our language experts will <span className="font-bold">create an industry curriculum for free.</span>
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="flex items-center justify-between mb-8">
                <div className="flex space-x-2">
                  <button 
                    onClick={scrollPrev} 
                    disabled={!canScrollPrev}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none transition-all duration-300"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={scrollNext} 
                    disabled={!canScrollNext}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none transition-all duration-300"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Embla Carousel */}
              <div className="overflow-hidden" ref={emblaRef}>
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="flex"
                >
                  {industries.map((industry) => (
                    <motion.div 
                      key={industry.id} 
                      variants={itemVariants} 
                      className="flex-[0_0_33.333%] min-w-0 pl-6 md:pl-8 first:pl-0 mb-6"
                    >
                      <div className="pr-6 md:pr-8">
                        <IndustryCard industry={industry} />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
} 