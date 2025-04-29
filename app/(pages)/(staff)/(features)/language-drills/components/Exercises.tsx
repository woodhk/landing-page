"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { exerciseSections } from "../data/exercises";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../../../components/shared/carousel";

const ExerciseCard = ({ section, index, scrollYProgress, range, isLastCard }: {
  section: typeof exerciseSections[0];
  index: number;
  scrollYProgress: any; // MotionValue<number> from framer-motion
  range: [number, number];
  isLastCard: boolean; // Prop to identify the last card
}) => {
  // Calculate scale, but only apply if not the last card
  const scaleTransform = useTransform(scrollYProgress, range, [1, 0.9]);
  const scale = isLastCard ? 1 : scaleTransform;

  return (
    <motion.div
      style={{ 
        scale, // Apply conditional scale
        position: "sticky",
        top: `5rem`,
        transformOrigin: "top center",
      }}
      className="h-[calc(95vh-5rem)] flex flex-col justify-center"
    >
      <div className="bg-white rounded-xl shadow-xl p-8 md:p-10 max-w-5xl mx-auto w-full overflow-hidden">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {section.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {section.subtitle}
          </p>
        </div>

        <Carousel
          opts={{ align: "center", loop: true }}
          className="w-full max-w-4xl mx-auto px-4"
        >
          <CarouselContent>
            {section.carouselItems.map((item, itemIndex) => (
              <CarouselItem key={itemIndex} className="basis-full">
                <div className="bg-gray-50 rounded-lg p-6 h-full mx-2 shadow-inner flex flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
                    <div className="flex flex-col justify-center">
                      <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-700 text-md leading-relaxed">{item.description}</p>
                    </div>
                    <div className="relative w-full h-48 md:h-full min-h-[300px] rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-[-2rem] h-9 w-9" />
          <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-[-2rem] h-9 w-9" />
        </Carousel>
      </div>
    </motion.div>
  );
};

const Exercises: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const totalSections = exerciseSections.length;
  // Calculate height based on number of sections * approximate viewport height needed per card
  const cardVisibleHeight = 95; // Approx vh each card takes when sticky
  const containerHeight = `${totalSections * cardVisibleHeight}vh`;

  return (
    <>
      {/* Title and subtitle section above the fold */}
      <div className="w-full bg-blue-50 pt-16 md:pt-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold pb-6 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">
            Intelligently Tailored Exercises
          </h1>
          <p className="text-xl md:text-3xl text-gray-600 max-w-4xl mx-auto">
          Practice one, three or all twelve end of lesson exercises, each designed to further boost workplace performance and productivity.
          </p>
        </div>
      </div>
      
      {/* Scrollable card container */}
      <div ref={containerRef} className="relative bg-blue-50" style={{ height: containerHeight }}>
        {exerciseSections.map((section, index) => {
          const start = index / totalSections;
          const end = (index + 1) / totalSections; 
          const isLastCard = index === totalSections - 1; // Determine if it's the last card

          return (
            <ExerciseCard 
              key={section.title}
              section={section}
              index={index}
              scrollYProgress={scrollYProgress}
              range={[start, end]}
              isLastCard={isLastCard} // Pass the prop
            />
          );
        })}
      </div>
    </>
  );
};

export default Exercises;