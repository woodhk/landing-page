import React from 'react';
import Link from 'next/link';

const CTASection = () => {
  return (
    <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 mt-24 mb-24">
      <div 
        className="w-full py-16 md:py-24 px-6 md:px-10 bg-cover bg-center rounded-xl overflow-hidden"
        style={{ backgroundImage: 'url("/abstract-bg/cta-bg.svg")' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-white max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Help Us, Help You</h2>
              <p className="text-base md:text-lg opacity-90 mb-6">
              Join the FluentPro early access list and get ahead with cutting-edge Business English training powered by AI.
              </p>
              <p className="text-sm opacity-80 mb-2">
                Currently in private beta. Limited spots available.
              </p>
            </div>
            
            <div className="md:ml-8">
              <Link 
                href="https://forms.gle/tLkLiSziGZZDjLpJA" 
                className="bg-white text-black px-8 py-4 rounded-lg text-base font-medium hover:bg-gray-100 transition-colors whitespace-nowrap flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200"
              >
                <span>Secure Early Access</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <p className="text-white text-xs opacity-70 mt-3 text-center">
                Only accepting 5 companies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;