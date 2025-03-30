// app/components/navigation/StickyNavbar.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/shared/navigation-menu";
import { useNavbar } from '@/lib/hooks/useNavbar';
import Platform from './components/Platform';
import Solutions from './components/Solutions';

const StickyNavbar: React.FC = () => {
  const {
    isScrolled,
    isHovered,
    mobileMenuOpen,
    navbarRef,
    mobileMenuRef,
    handleMouseEnter,
    handleMouseLeave,
    handleEarlyAccessClick,
  } = useNavbar();

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out
        ${(!isScrolled || (isScrolled && isHovered)) 
          ? 'pt-4 sm:pt-5 md:pt-6' 
          : 'pt-2 sm:pt-3 md:pt-4'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8" ref={navbarRef}>
        <div 
          className={`flex justify-between items-center rounded-xl border border-[#F4F7FB] transition-all duration-300 ease-in-out
            ${(!isScrolled || (isScrolled && isHovered)) 
              ? 'h-16 sm:h-18 md:h-16 px-5 sm:px-6 md:px-6 bg-white shadow-lg' 
              : 'h-14 sm:h-16 md:h-16 px-4 sm:px-5 md:px-6 bg-white/95 backdrop-blur-md shadow-md'}`}
        >
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/home" className="flex items-center">
                <Image 
                  src="/logo/logo.svg" 
                  alt="FluentPro Logo" 
                  width={32} 
                  height={32} 
                  className={`transition-all duration-300 ease-in-out ${(!isScrolled || (isScrolled && isHovered)) ? 'h-7 w-auto' : 'h-6 w-auto'}`}
                />
                <span className={`ml-2 font-bold transition-all duration-300 ease-in-out ${(!isScrolled || (isScrolled && isHovered)) ? 'text-xl' : 'text-lg'}`}>FluentPro</span>
              </Link>
            </div>
            
            {/* Desktop Navigation Menus */}
            <div className="hidden md:flex items-center space-x-1">
              <Platform />
              <Solutions />
            </div>
          </div>
          
          {/* Right side - About Us and CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="https://language-key.vercel.app/home" className="text-sm font-medium hover:text-gray-700">
              About Us
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList className="space-x-2 lg:space-x-3">
                {/* CTA Button */}
                <li>
                  <button 
                    className={`bg-[#234BFF] hover:bg-[#1A38BF] text-white rounded-xl font-medium flex items-center transition-all duration-300 ease-in-out
                      ${(!isScrolled || (isScrolled && isHovered)) ? 'px-4 py-3 text-base' : 'px-3 py-2 text-sm'}`}
                    onClick={handleEarlyAccessClick}
                  >
                    Secure Early Access
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
                </li>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button 
              className={`bg-[#234BFF] hover:bg-[#1A38BF] text-white rounded-xl font-medium flex items-center transition-all duration-300 ease-in-out
                ${(!isScrolled || (isScrolled && isHovered)) ? 'px-3 py-2 text-sm' : 'px-3 py-2 text-xs'}`}
              onClick={handleEarlyAccessClick}
            >
              Secure Early Access
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-3 w-3 ml-1" 
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
    </nav>
  );
};

export default StickyNavbar;