// app/components/navigation/StickyNavbar.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const StickyNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exploreMenuOpen, setExploreMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-0"
    >
      <div className="w-full max-w-7xl bg-white rounded-full shadow-lg px-3 py-4 border border-[#F4F7FB]">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/home" className="flex items-center">
              <Image 
                src="/logo.svg" 
                alt="FluentPro Logo" 
                width={40} 
                height={40} 
                className="h-8 w-auto"
              />
              <span className="ml-2 text-2xl font-bold">FluentPro</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Explore Dropdown */}
            <div className="relative explore-menu">
              <button 
                onClick={() => {
                  setExploreMenuOpen(!exploreMenuOpen);
                  setLanguageMenuOpen(false);
                }}
                className="flex items-center px-6 py-3 rounded-full text-[#4A5768] hover:bg-[#F4F7FB] hover:text-[#234BFF] font-semibold transition-colors"
              >
                Explore
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`ml-1 h-4 w-4 transition-transform ${exploreMenuOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Explore Dropdown Menu */}
              {exploreMenuOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-white border border-[#DEE4F1] focus:outline-none z-10">
                  <div className="py-1">
                    <Link 
                      href="/about" 
                      className="block px-4 py-2 text-sm text-[#4A5768] hover:bg-[#F4F7FB] hover:text-[#234BFF]"
                      onClick={() => setExploreMenuOpen(false)}
                    >
                      About Us
                    </Link>
                    {/* Additional menu items can be added here in the future */}
                  </div>
                </div>
              )}
            </div>
            
            {/* Language Dropdown */}
            <div className="relative language-menu">
              <button 
                onClick={() => {
                  setLanguageMenuOpen(!languageMenuOpen);
                  setExploreMenuOpen(false);
                }}
                className="flex items-center px-6 py-3 rounded-full bg-[#F4F7FB] text-[#4A5768] hover:bg-[#DEE4F1] font-semibold transition-colors border border-[#E5E7EB]"
              >
                English
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`ml-1 h-4 w-4 transition-transform ${languageMenuOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Language Dropdown Menu */}
              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 rounded-lg shadow-lg bg-white border border-[#DEE4F1] focus:outline-none z-10">
                  <div className="py-1">
                    <Link 
                      href="/zh-hk" 
                      className="block px-4 py-2 text-sm text-[#4A5768] hover:bg-[#F4F7FB] hover:text-[#234BFF]"
                      onClick={() => setLanguageMenuOpen(false)}
                    >
                      繁體中文 (Traditional Chinese)
                    </Link>
                    <Link 
                      href="/zh-cn" 
                      className="block px-4 py-2 text-sm text-[#4A5768] hover:bg-[#F4F7FB] hover:text-[#234BFF]"
                      onClick={() => setLanguageMenuOpen(false)}
                    >
                      简体中文 (Simplified Chinese)
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            {/* Call to Action Button */}
            <button 
              className="bg-[#234BFF] hover:bg-[#1A38BF] text-white px-6 py-3 rounded-full font-medium flex items-center transition-colors"
              onClick={() => {/* Implement demo request logic */}}
            >
              Request a Demo
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center w-10 h-10 text-[#273046] mr-3"
            >
              <span className="sr-only">Toggle menu</span>
              <svg 
                className={`w-8 h-8 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45' : ''}`}
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12M6 12h12" />
              </svg>
            </button>

            <button 
              className="bg-[#234BFF] hover:bg-[#1A38BF] text-white px-6 py-3 rounded-full font-medium flex items-center transition-colors"
              onClick={() => {/* Implement demo request logic */}}
            >
              Request a Demo
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} fixed top-28 left-0 right-0 p-4 z-40 bg-white`}>
        <div className="bg-[#F8F9FA] rounded-2xl overflow-hidden shadow-lg">
          {/* Explore Section */}
          <div className="p-4">
            <h2 className="text-xl font-medium text-gray-500 mb-6">Explore</h2>
            <div className="grid grid-cols-1 gap-y-6">
              <Link 
                href="/about" 
                className="text-[#273046] font-medium text-lg"
              >
                About
              </Link>
            </div>
          </div>
          
          {/* Divider */}
          <hr className="border-t border-gray-200 mx-4" />
          
          {/* Language Section */}
          <div className="p-4 pt-6">
            <div className="grid grid-cols-2 gap-y-6 gap-x-10">
              <Link 
                href="/en" 
                className="text-[#234BFF] font-medium text-lg"
              >
                English
              </Link>
              <div></div>
              <Link 
                href="/zh-hk" 
                className="text-[#273046] font-medium text-lg"
              >
                繁體中文
              </Link>
              <Link 
                href="/zh-cn" 
                className="text-[#273046] font-medium text-lg"
              >
                简体中文
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default StickyNavbar;