"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronsDown, Download } from 'lucide-react'
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '../../../../components/shared/carousel';
import { crossIndustriesHeroData, CrossIndustryHeroData } from '../../../../components/industry/data/cross-industry/cross-industry-hero';

interface CrossIndustryCardProps {
  industry: CrossIndustryHeroData;
  isActive: boolean;
}

const CrossIndustryCard: React.FC<CrossIndustryCardProps> = ({ industry, isActive }) => {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden h-full my-8 flex flex-col transform transition-all duration-300 hover:shadow-2xl">
      <div className="flex flex-col md:flex-row h-full min-h-[500px]">
        {/* Left side: Image */}
        <div className="md:w-1/2 relative h-96 md:h-auto">
          <Image 
            src={industry.hero.imageUrl} 
            alt={industry.name}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-all duration-500 hover:scale-105"
          />
        </div>
        
        {/* Right side: Text content */}
        <div className="p-8 md:w-1/2 flex flex-col justify-center bg-white">
          <div>
            <h3 className="text-3xl font-bold mb-3 text-gray-900">{industry.name}</h3>
            <p className="text-gray-700 mb-6 text-base leading-relaxed">
              {industry.hero.description}
            </p>
            <Link 
              href={industry.hero.brochureLink}
              className="inline-flex items-center text-dynamic-blue hover:text-dynamic-blue/80 transition-colors focus:outline-none focus:underline mt-2"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Course Outline
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CrossIndustry: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [carouselApi, setCarouselApi] = React.useState<any>(null);

  React.useEffect(() => {
    if (!carouselApi) return;
    
    const onSelect = () => {
      setActiveIndex(carouselApi.selectedScrollSnap());
    };
    
    carouselApi.on('select', onSelect);
    
    return () => {
      carouselApi.off('select', onSelect);
    };
  }, [carouselApi]);

  return (
    <section className="w-full py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header section */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
            Personalize Training for Cross-Sector Teams
          </h2>
          <h3 className="max-w-3xl mx-auto text-center text-lg md:text-3xl text-gray-600 mb-8 leading-relaxed">
             Deliver personalised curriculums that reflect each industry’s real-world communication scenarios, responsibilities, and vocabulary nuances.
          </h3>
        </div>
        
        {/* Scroll indicator */}
        <div className="flex justify-center mb-8">
          <ChevronsDown className="h-8 w-8 text-gray-400 animate-bounce" />
        </div>
        
        {/* Carousel section */}
        <div className="max-w-6xl mx-auto">
          <Carousel setApi={setCarouselApi} opts={{ loop: true, align: 'center' }}>
            <CarouselContent>
              {crossIndustriesHeroData.map((industry: CrossIndustryHeroData, index: number) => (
                <CarouselItem key={industry.id} className="basis-full pl-4 sm:pl-6">
                  <CrossIndustryCard 
                    industry={industry} 
                    isActive={index === activeIndex}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation and pagination */}
            <div className="flex justify-center items-center mt-10 gap-4">
              <CarouselPrevious className="static transform-none h-10 w-10 relative left-0 top-0 -translate-y-0 bg-white shadow-md hover:bg-gray-50" />
              
              <div className="flex justify-center gap-2 mx-4">
                {crossIndustriesHeroData.map((_: CrossIndustryHeroData, index: number) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'bg-dynamic-blue w-8' 
                        : 'bg-gray-200 w-3 hover:bg-gray-300'
                    }`}
                    onClick={() => carouselApi?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <CarouselNext className="static transform-none h-10 w-10 relative right-0 top-0 -translate-y-0 bg-white shadow-md hover:bg-gray-50" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CrossIndustry;
