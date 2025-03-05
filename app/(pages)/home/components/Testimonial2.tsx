import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { Testimonial, firstRowTestimonials, secondRowTestimonials } from '../data/Testimonial2';

// Enhanced star rating with animation
const StarRating = () => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <motion.div
        key={star}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20, 
          delay: 0.1 * star 
        }}
      >
        <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-solar-gold text-solar-gold drop-shadow-sm" />
      </motion.div>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  const cardRef = useRef(null);
  
  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.4,
        delay: 0.05 * index
      }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.2 }
      }}
      className="w-[85%] sm:w-[70%] md:w-[45%] lg:w-1/3 flex-shrink-0 bg-white rounded-2xl p-4 sm:p-5 lg:p-6 mx-2 sm:mx-3 mb-6 sm:mb-8 shadow-lg border border-gray-100 flex flex-col h-auto min-h-[220px] sm:min-h-[240px] lg:h-[260px] relative overflow-hidden"
    >
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-dynamic-blue via-dynamic-blue/80 to-light-3" />
      
      {/* Quote icon */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-10">
        <Quote size={30} className="sm:size-40 lg:size-24 text-dynamic-blue" />
      </div>
      
      {/* Header */}
      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 z-10">
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-gray-50 rounded-full p-2 border border-gray-100 shadow-sm">
          <Image src={testimonial.logo} alt={testimonial.companyName} fill className="object-contain p-1" style={{ objectFit: 'contain', maxWidth: '80%', maxHeight: '80%' }} />
        </div>
        <div>
          <h3 className="font-bold text-dark text-xs sm:text-sm">{testimonial.companyName}</h3>
          <p className="text-xs text-medium/80">{testimonial.role}</p>
        </div>
      </div>

      {/* Content wrapper with flex-grow */}
      <div className="flex flex-col flex-grow justify-between z-10">
        {/* Testimonial text */}
        <blockquote className="text-medium-2 text-xs sm:text-sm leading-relaxed font-medium mb-3 sm:mb-4 italic overflow-hidden line-clamp-3 sm:line-clamp-4">
          "{testimonial.testimonial}"
        </blockquote>

        {/* Star rating at bottom */}
        <StarRating />
      </div>
    </motion.div>
  );
};

const LandingTestimonial = () => {
  const [contentWidth1, setContentWidth1] = useState(0);
  const [contentWidth2, setContentWidth2] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const containerRef1 = useRef<HTMLDivElement | null>(null);
  const containerRef2 = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const headingControls = useAnimation();

  // Animation durations based on screen size
  const getAnimationDuration = (isFirstRow = true) => {
    if (isMobile) {
      return isFirstRow ? 30 : 25;
    } else if (isTablet) {
      return isFirstRow ? 40 : 35;
    } else {
      return isFirstRow ? 50 : 45;
    }
  };

  useEffect(() => {
    if (isInView) {
      headingControls.start("visible");
    }
  }, [isInView, headingControls]);

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

  useEffect(() => {
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

    // Add window resize listener to update widths and check device type
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
      updateWidth1();
      updateWidth2();
    };
    
    // Initial check
    handleResize();
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-light-3 to-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 sm:h-64 bg-gradient-to-b from-dynamic-blue/5 to-transparent opacity-70" />
      <div className="absolute -top-12 -right-12 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-dynamic-blue/5 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-dynamic-blue/10 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with animations */}
        <motion.div 
          className="text-center mb-10 sm:mb-16"
          initial="hidden"
          animate={headingControls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1]
              }
            }
          }}
        >
          <motion.span 
            className="inline-block text-dynamic-blue font-semibold mb-2 sm:mb-3 px-3 py-1 sm:px-4 sm:py-1.5 bg-dynamic-blue/10 rounded-full text-sm sm:text-base"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Success Stories
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-3 sm:mb-4 tracking-tight">
            Hear from Our <span className="text-dynamic-blue">Clients</span>
          </h2>
          <p className="text-medium max-w-2xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed">
            Join hundreds of satisfied industry leaders who have improved their teams' Business English with our specialized training programs.
          </p>
        </motion.div>

        {/* Testimonials Container */}
        <div 
          className="space-y-10 sm:space-y-16"
        >
          {/* First Row - Left to Right */}
          <div className="relative overflow-hidden py-2">
            <motion.div
              ref={containerRef1}
              animate={contentWidth1 ? { x: [0, -contentWidth1] } : { x: 0 }}
              transition={{
                x: {
                  duration: getAnimationDuration(true),
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'linear',
                },
              }}
              className="flex"
            >
              {/* Original set */}
              {firstRowTestimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} index={index} />
              ))}
              {/* Duplicate set for seamless loop */}
              {firstRowTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`duplicate-${index}`} testimonial={testimonial} index={index} />
              ))}
            </motion.div>
            <div className="absolute inset-y-0 left-0 w-16 sm:w-24 md:w-40 bg-gradient-to-r from-light-3 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-16 sm:w-24 md:w-40 bg-gradient-to-l from-light-3 to-transparent z-10" />
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative overflow-hidden py-2">
            <motion.div
              ref={containerRef2}
              animate={contentWidth2 ? { x: [-contentWidth2, 0] } : { x: 0 }}
              transition={{
                x: {
                  duration: getAnimationDuration(false),
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'linear',
                },
              }}
              className="flex"
            >
              {/* Original set */}
              {secondRowTestimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} index={index} />
              ))}
              {/* Duplicate set for seamless loop */}
              {secondRowTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`duplicate-${index}`} testimonial={testimonial} index={index} />
              ))}
            </motion.div>
            <div className="absolute inset-y-0 left-0 w-16 sm:w-24 md:w-40 bg-gradient-to-r from-light-3 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-16 sm:w-24 md:w-40 bg-gradient-to-l from-light-3 to-transparent z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingTestimonial;