import React from 'react';
import Button from '../../../components/ui/Button';
import CheckItem from '../../../components/ui/CheckItem';

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
      {/* Dot pattern background with fade-out effect */}
      <div className="absolute inset-0 w-full h-[calc(100%+12rem)] -top-24">
        <div 
          className="absolute inset-0 w-full h-full opacity-20"
          style={{ 
            backgroundImage: 'radial-gradient(circle, #3B82F6 1px, transparent 2px)', 
            backgroundSize: '20px 20px',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 85%, rgba(0,0,0,0.1) 95%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 85%, rgba(0,0,0,0.1) 95%, rgba(0,0,0,0) 100%)'
          }}
        />
      </div>

      {/* Background gradient element */}
      <div className="absolute -top-0 -right-0 w-60 md:w-96 h-60 md:h-96 rounded-full bg-gradient-to-br from-dynamic-blue/10 to-neon-violet/5 blur-2xl" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center py-4 md:py-8 px-4 sm:px-6 lg:px-4 max-w-7xl mx-auto">
        <div className="flex flex-col space-y-4 md:space-y-6 max-w-[560px]">
          {/* Main content with improved vertical rhythm */}
          <div>
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-dark leading-tight mb-3 md:mb-5">
              AI-Powered <span className="text-dynamic-blue">English Training</span> Tailored to Staff's Industry & Role
            </h1>
            <p className="text-base md:text-lg text-medium leading-relaxed">
              Give your employees the <span className="font-semibold text-dark-2">Business English Speaking</span> skills they need to perform their job better in English.
            </p>
          </div>
          
          {/* Features with improved design */}
          <div className="space-y-3 md:space-y-4">
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
          <div className="flex flex-col space-y-6 md:space-y-8">
            
            {/* Trust indicators - redesigned for responsive layout */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center mt-3 md:mt-5 gap-4 sm:gap-0">
              <div className="w-full sm:w-auto sm:flex-grow sm:max-w-sm">
                <Button 
                  primary 
                  size="large" 
                  text="Request a Demo" 
                />
              </div>
              <div className="w-full sm:w-auto sm:flex-grow sm:ml-4 sm:pl-4 sm:border-l border-light-2">
                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <div className="flex -space-x-2">
                      {partnerLogos.slice(0, 2).map((logo, index) => (
                        <div key={index} className="h-8 w-8 rounded-full bg-white shadow-sm border border-light-2 flex items-center justify-center overflow-hidden">
                          <img 
                            src={logo.src} 
                            alt={logo.alt} 
                            className="h-5 w-auto object-contain" 
                          />
                        </div>
                      ))}
                    </div>
                    <div className="ml-2 text-sm font-semibold text-dark">10,000+ professionals</div>
                  </div>
                  <p className="text-xs text-medium">trained at <span className="text-dynamic-blue font-medium">JPMorgan</span>, <span className="text-dynamic-blue font-medium">PwC</span> and <span className="text-dynamic-blue font-medium">200+</span> other global leaders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right panel - only visible on larger screens */}
        <div className="hidden lg:flex h-full items-center justify-center">
          <div className="relative bg-white border border-light-2 rounded-xl shadow-lg p-4 text-center w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50"></div>
            <div className="relative">
              <img 
                src="/admin-dashboard.png" 
                alt="Admin Dashboard" 
                className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-md"
              />
              <div className="absolute -inset-1 bg-blue-500/5 rounded-xl blur-sm -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HeroSection;