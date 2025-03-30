import React from 'react';
import { customCourses } from '../data/CustomCourses';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../../../../components/shared/carousel';
import { Button } from '../../../../components/shared/shad-button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const CustomCourses = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-semibold mb-12 text-left">Customized Content for Your Industry</h1>
        
        <div className="relative">
          <Carousel
            opts={{
              align: "center",
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {customCourses.map((course, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="border rounded-lg overflow-hidden h-full flex flex-col">
                    <div className="relative h-[300px] w-full bg-gray-100">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover "
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                      <p className="text-gray-600 mb-4 flex-grow">{course.description}</p>
                      <Link href={course.href}>
                        <Button
                          variant="default"
                          className="bg-blue-600 hover:bg-blue-700 transition-colors w-full sm:w-auto"
                        >
                          Learn more
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-gray-400 hover:text-gray-600 transition-colors -left-12 lg:-left-16" />
            <CarouselNext className="text-gray-400 hover:text-gray-600 transition-colors -right-12 lg:-right-16" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default CustomCourses;