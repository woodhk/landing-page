import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialItemProps {
  quote: string;
  author: string;
  position: string;
  logoSrc: string;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ quote, author, position, logoSrc }) => {
  return (
    <motion.div 
      className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-blue-50 dark:border-blue-900 p-8 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      {/* Decorative quote mark */}
      <div className="text-blue-100 dark:text-blue-900 text-6xl font-serif absolute -top-1 -left-2">
        "
      </div>
      
      {/* Quote */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white relative z-10 mb-6 leading-relaxed">
        "{quote}"
      </h3>
      
      {/* Testimonial content */}
      <p className="text-gray-600 dark:text-gray-300 text-base mb-8 flex-grow leading-relaxed">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident
      </p>
      
      {/* Divider */}
      <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mb-6 group-hover:w-24 transition-all duration-300"></div>
      
      {/* Author info with logo */}
      <div className="flex items-center">
        <div className="h-16 w-16 rounded-full overflow-hidden mr-4 bg-blue-50 dark:bg-blue-900 flex items-center justify-center border-2 border-white dark:border-gray-700 shadow-md">
          <img 
            src={logoSrc} 
            alt={`${author}'s company logo`} 
            className="h-10 w-auto object-contain"
          />
        </div>
        <div>
          <h4 className="text-gray-900 dark:text-white font-semibold">{author}</h4>
          <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">{position}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonial: React.FC = () => {
  // Testimonial data
  const testimonials = [
    {
      quote: "The best Business English Training",
      author: "Sophia Moore",
      position: "Training Manager at Philips",
      logoSrc: "/phillips.png"
    },
    {
      quote: "FluentPro Templates is the #1",
      author: "Adam Smith",
      position: "Training Manager at Bank of East Asia",
      logoSrc: "/bank-east-asia.png"
    },
    {
      quote: "Incredible improvement in staff communication",
      author: "Michael Chen",
      position: "Training Manager at DKSH",
      logoSrc: "/dksh.png"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-900 dark:to-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 dark:bg-blue-900 rounded-full opacity-30 blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-100 dark:bg-indigo-900 rounded-full opacity-30 blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 shadow-sm mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
              <path d="M21 15l-9-9-9 9" />
              <path d="M21 11l-9-9-9 9" />
              <path d="M21 7l-9-9-9 9" />
            </svg>
            Client Success Stories
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
            Trusted and Respected in<br />
            <span className="text-blue-600 dark:text-blue-400">Hong Kong</span> for 30+ Years
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Delivering exceptional business English training to hundreds of companies in Hong Kong
          </p>
        </motion.div>

        {/* Testimonial grid - horizontal cards side by side */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <TestimonialItem
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                logoSrc={testimonial.logoSrc}
              />
            ))}
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button 
              className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors group"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              <span className="h-2 w-8 rounded-full bg-blue-600 dark:bg-blue-400"></span>
              <span className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-blue-400 dark:hover:bg-blue-500 cursor-pointer transition-all duration-300"></span>
              <span className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-blue-400 dark:hover:bg-blue-500 cursor-pointer transition-all duration-300"></span>
            </div>
            
            <button 
              className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors group"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* View all link */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            View all testimonials
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;