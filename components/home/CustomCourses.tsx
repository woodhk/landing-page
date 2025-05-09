import React from 'react';
import { customCourses } from '../../data/CustomCourses';
import { Button } from '../shared/shad-button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const CustomCourses = () => {
  // Array of pastel background colors for cards with matching darker text colors
  const cardStyles = [
    { bg: 'bg-[#eef7ee]', text: 'text-[#2a4d2a]' }, // Green
    { bg: 'bg-[#f8eef8]', text: 'text-[#4a2e4a]' }, // Purple
    { bg: 'bg-[#e8f4fa]', text: 'text-[#1a4b6e]' }, // Blue
    { bg: 'bg-yellow-100', text: 'text-yellow-800' }  // Yellow
  ];

  return (
    <section className="w-full py-32">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold mb-8 text-center">Whatever Your Industry, <br/>We Can Help
        </h1>
        <h2 className="max-w-3xl mx-auto text-2xl text-gray-600 mb-16 text-center">
        Receive customised training for your industry. If your industry isn't listed, our language experts will create a free custom cirrculum within 48 hours.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customCourses.slice(0, 4).map((course, index) => (
            <Link href={course.href} key={index} className="block group h-full">
              <div 
                className={`${cardStyles[index].bg} rounded-3xl overflow-hidden h-full flex flex-col p-6 transition-transform duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer`}
              >
                <div className="relative w-full flex-grow mb-6 rounded-xl overflow-hidden" style={{ minHeight: '250px' }}>
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className={`text-2xl font-semibold mb-2 text-center ${cardStyles[index].text}`}>{course.title}</h3>
                  <p className={`${cardStyles[index].text} text-center mb-4`}>{course.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Link href="/industry">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-dynamic-blue hover:bg-dynamic-blue/90 shadow-lg mt-20 py-6"
          >
            View All Industries
            <ArrowRight className="h-5 w-5" />
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CustomCourses;