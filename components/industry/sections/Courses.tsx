"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronsDown } from 'lucide-react'
import { CoursesSection, CourseCard } from '../types';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/shared/carousel';

interface CoursesProps {
  data: CoursesSection;
}

const CourseCardComponent: React.FC<{ course: CourseCard, isActive: boolean }> = ({ course, isActive }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left side: Image (switched position for better visual hierarchy) */}
        <div className="md:w-1/2 relative h-80 md:h-auto">
          <Image 
            src={course.imageUrl} 
            alt={course.title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-all duration-500 hover:scale-105"
          />
        </div>
        
        {/* Right side: Text content */}
        <div className="p-8 md:w-1/2 flex flex-col justify-between bg-white">
          <div>
            <span className="inline-block px-3 py-1 text-sm font-medium text-dynamic-blue bg-blue-50 rounded-full mb-4">Featured Course</span>
            <h3 className="text-3xl font-bold mb-3 text-gray-900">{course.title}</h3>
            <p className="text-gray-700 mb-6 text-base leading-relaxed">
              {course.description}
            </p>
          </div>
          <div>
            <Link 
              href={course.outlineLink}
              className="inline-flex h-12 items-center justify-center rounded-md bg-dynamic-blue text-white px-6 text-sm font-medium transition-colors hover:bg-dynamic-blue/90 focus:outline-none focus:ring-2 focus:ring-dynamic-blue/50 focus:ring-offset-2 w-full md:w-auto"
            >
              <svg 
                className="mr-2 h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" 
                />
              </svg>
              Download Course Outline
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Courses: React.FC<CoursesProps> = ({ data }) => {
  const { sectionTitle, sectionDescription, courseCards, customCoursesLink } = data;
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
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header section with improved visual hierarchy */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
            {sectionTitle}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            {sectionDescription}
          </p>
          <Link 
            href={customCoursesLink}
            className="inline-flex h-12 items-center justify-center rounded-md bg-dynamic-blue text-white px-8 text-base font-medium transition-colors hover:bg-dynamic-blue/90 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-dynamic-blue/50 focus:ring-offset-2"
          >
            Learn more about custom courses
          </Link>
        </div>
        
        {/* Better visual cue to scroll - smaller and more subtle */}
        <div className="flex justify-center mb-8">
          <ChevronsDown className="h-8 w-8 text-gray-400 animate-bounce" />
        </div>
        
        {/* Carousel section with improved spacing */}
        <div className="max-w-6xl mx-auto">
          <Carousel setApi={setCarouselApi} opts={{ loop: true, align: 'center' }}>
            <CarouselContent>
              {courseCards.map((course, index) => (
                <CarouselItem key={index} className="basis-full pl-4 sm:pl-6">
                  <CourseCardComponent 
                    course={course} 
                    isActive={index === activeIndex}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation and pagination with improved styling */}
            <div className="flex justify-center items-center mt-10 gap-4">
              <CarouselPrevious className="static transform-none h-10 w-10 relative left-0 top-0 -translate-y-0 bg-white shadow-md hover:bg-gray-50" />
              
              <div className="flex justify-center gap-2 mx-4">
                {courseCards.map((_, index) => (
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

export default Courses;