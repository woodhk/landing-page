"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    <div className="bg-gray-50 rounded-lg overflow-hidden h-full flex flex-col">
      <div className="relative h-64 w-full">
        <Image 
          src={course.imageUrl} 
          alt={course.title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3">{course.title}</h3>
        <p className="text-gray-700 mb-4">
          {isActive && course.detailDescription ? course.detailDescription : course.description}
        </p>
        <div className="mt-auto">
          <Link 
            href={course.outlineLink}
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-200 px-4 text-sm font-medium transition-colors hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            <svg 
              className="mr-2 h-4 w-4" 
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
            Course Outline
          </Link>
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
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {sectionTitle}
          </h2>
          <p className="text-lg text-gray-700">
            {sectionDescription}
          </p>
        </div>
        
        <div className="relative px-10 mb-12 max-w-4xl mx-auto">
          <Carousel setApi={setCarouselApi} opts={{ loop: false, align: 'center' }}>
            <CarouselContent>
              {courseCards.map((course, index) => (
                <CarouselItem key={index} className="basis-full pl-4 sm:pl-8">
                  <CourseCardComponent 
                    course={course} 
                    isActive={index === activeIndex}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
        
        <div className="flex justify-center">
          <Link 
            href={customCoursesLink}
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-200 px-6 text-sm font-medium transition-colors hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            Learn more about custom courses
          </Link>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {courseCards.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-8 rounded-full transition-colors ${
                index === activeIndex ? 'bg-gray-900' : 'bg-gray-300'
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses; 