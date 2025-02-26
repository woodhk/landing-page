import React from 'react';
import Button from '../../../components/ui/Button';
import CheckItem from '../../../components/ui/CheckItem';

// Add CSS animation for the marquee effect


const HeroSection: React.FC = () => {
  // Data array for partner logos
  const partnerLogos = [
    { src: "/jpmorgan.png", alt: "JPMorgan" },
    { src: "/pwc.png", alt: "PwC" },
    { src: "/hutchison.png", alt: "Hutchison" },
    { src: "/hk-jockey-club.png", alt: "HK Jockey Club" },
  ];

  return (
    <>
    <div className="relative">
      {/* Background gradient element */}
      <div className="absolute -top-0 -right-0 w-96 h-96 rounded-full bg-gradient-to-br from-[#234BFF]/10 to-[#8A24FF]/5 blur-2xl" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-tr from-[#00B8D9]/10 to-[#234BFF]/5 blur-xl" />
      
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-8 px-4 sm:px-6 lg:px-4 max-w-7xl mx-auto">
        <div className="flex flex-col space-y-6 max-w-[560px]">
          {/* Main content with improved vertical rhythm */}
          <div>
            <div className="inline-block px-4 py-1.5 bg-[#E6F9F0] text-[#1E8B59] font-medium text-sm rounded-full mb-4">
              AI-Powered Learning Platform
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1C2530] leading-tight mb-5">
              AI-Powered <span className="text-[#234BFF]">English Training</span> Tailored to Staff's Industry & Role
            </h1>
            <p className="text-lg text-[#4A5768] leading-relaxed">
              Give your employees the <span className="font-semibold text-[#273046]">Business English Speaking</span> skills they need to perform their job better in English.
            </p>
          </div>
          
          {/* Features with improved design */}
          <div className="space-y-4">
            <CheckItem 
              text="Business Speaking Conversation Practice" 
            />
            <CheckItem 
              text="Tailored Courses for Staff's Industry & Role" 
            />
            <CheckItem 
              text="Progress Tracking with Real-Time Reports and Analytics" 
            />
          </div>
          
          {/* Action section with improved layout */}
          <div className="flex flex-col space-y-8">
            
            {/* Trust indicators - redesigned based on critique */}
            <div className="flex items-center mt-5">
              <div className="flex-grow max-w-sm">
                <Button 
                  primary 
                  size="large" 
                  text="Request a Demo" 
                />
              </div>
              <div className="flex-grow ml-4 pl-4 border-l border-[#DEE4F1]">
                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <div className="flex -space-x-2">
                      {partnerLogos.slice(0, 2).map((logo, index) => (
                        <div key={index} className="h-8 w-8 rounded-full bg-white shadow-sm border border-[#DEE4F1] flex items-center justify-center overflow-hidden">
                          <img 
                            src={logo.src} 
                            alt={logo.alt} 
                            className="h-5 w-auto object-contain" 
                          />
                        </div>
                      ))}
                    </div>
                    <div className="ml-2 text-sm font-semibold text-[#1C2530]">10,000+ professionals</div>
                  </div>
                  <p className="text-xs text-[#4A5768]">trained at <span className="text-[#234BFF] font-medium">JPMorgan</span>, <span className="text-[#234BFF] font-medium">PwC</span> and <span className="text-[#234BFF] font-medium">200+</span> other global leaders</p>
                </div>
              </div>
            </div>
            

        
          </div>
        </div>
        
        {/* Right panel - redesigned dashboard display */}
        {/* Right panel - simplified placeholder */}
        <div className="h-full flex items-center justify-center">
          <div className="bg-[#F4F7FB] border border-[#DEE4F1] rounded-xl shadow-sm p-8 text-center w-full">
            <div className="flex flex-col items-center justify-center gap-4 py-12">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#234BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              <p className="text-[#4A5768] font-medium">Dashboard Image</p>
              <p className="text-[#667583] text-sm">Product screenshot will be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HeroSection;