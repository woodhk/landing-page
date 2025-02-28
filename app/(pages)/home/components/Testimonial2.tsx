import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Testimonial, firstRowTestimonials, secondRowTestimonials } from '../data/Testimonial2';

const StarRating = () => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star key={star} className="w-4 h-4 fill-solar-gold text-solar-gold" />
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="w-1/3 flex-shrink-0 bg-white rounded-2xl p-6 mx-2 mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
    {/* Header */}
    <div className="flex items-center gap-4 mb-4">
      <div className="relative w-12 h-12 flex-shrink-0">
        <Image src={testimonial.logo} alt={testimonial.companyName} fill className="object-contain" />
      </div>
      <div>
        <h3 className="font-semibold text-dark">{testimonial.companyName}</h3>
        <p className="text-sm text-medium">{testimonial.role}</p>
      </div>
    </div>

    {/* Content wrapper with flex-grow */}
    <div className="flex flex-col flex-grow justify-between">
      {/* Testimonial text */}
      <blockquote className="text-medium-2 text-sm leading-relaxed mb-4">
        "{testimonial.testimonial}"
      </blockquote>

      {/* Star rating at bottom */}
      <StarRating />
    </div>
  </div>
);

const LandingTestimonial = () => {
  const [contentWidth1, setContentWidth1] = useState(0);
  const [contentWidth2, setContentWidth2] = useState(0);
  const containerRef1 = useRef<HTMLDivElement | null>(null);
  const containerRef2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateWidth1 = () => {
      if (containerRef1.current) {
        setContentWidth1(containerRef1.current.scrollWidth / 2);
      }
    };
    const updateWidth2 = () => {
      if (containerRef2.current) {
        setContentWidth2(containerRef2.current.scrollWidth / 2);
      }
    };

    // Wait for images to load
    if (containerRef1.current) {
      const images1 = containerRef1.current.querySelectorAll('img');
      let imagesLoaded1 = 0;
      images1.forEach((img: HTMLImageElement) => {
        if (img.complete) {
          imagesLoaded1++;
        } else {
          img.addEventListener('load', () => {
            imagesLoaded1++;
            if (imagesLoaded1 === images1.length) {
              updateWidth1();
            }
          });
        }
      });
      if (imagesLoaded1 === images1.length) {
        updateWidth1();
      }
    }

    if (containerRef2.current) {
      const images2 = containerRef2.current.querySelectorAll('img');
      let imagesLoaded2 = 0;
      images2.forEach((img: HTMLImageElement) => {
        if (img.complete) {
          imagesLoaded2++;
        } else {
          img.addEventListener('load', () => {
            imagesLoaded2++;
            if (imagesLoaded2 === images2.length) {
              updateWidth2();
            }
          });
        }
      });
      if (imagesLoaded2 === images2.length) {
        updateWidth2();
      }
    }

    // Update widths in case images are cached
    updateWidth1();
    updateWidth2();

    // Add window resize listener to update widths
    const handleResize = () => {
      updateWidth1();
      updateWidth2();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-light-3 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-dark mb-4">
            Hear from Our Clients
          </h2>
          <p className="text-medium max-w-2xl mx-auto text-xl">
            Join hundreds of satisfied industry leaders who have improved their teams Business English with our specialized training programs.
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="space-y-12">
          {/* First Row - Left to Right */}
          <div className="relative overflow-hidden">
            <motion.div
              ref={containerRef1}
              animate={contentWidth1 ? { x: [0, -contentWidth1] } : {}}
              transition={{
                x: {
                  duration: 40,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'linear',
                },
              }}
              className="flex"
            >
              {/* Original set */}
              {firstRowTestimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
              {/* Duplicate set for seamless loop */}
              {firstRowTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`duplicate-${index}`} testimonial={testimonial} />
              ))}
            </motion.div>
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative overflow-hidden">
            <motion.div
              ref={containerRef2}
              animate={contentWidth2 ? { x: [-contentWidth2, 0] } : {}}
              transition={{
                x: {
                  duration: 40,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'linear',
                },
              }}
              className="flex"
            >
              {/* Original set */}
              {secondRowTestimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
              {/* Duplicate set for seamless loop */}
              {secondRowTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`duplicate-${index}`} testimonial={testimonial} />
              ))}
            </motion.div>
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingTestimonial;