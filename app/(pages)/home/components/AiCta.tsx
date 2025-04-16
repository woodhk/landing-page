import React from 'react';
import { Button } from '../../../../components/shared/shad-button';
import { ArrowRight, Sparkles } from 'lucide-react';

const AiCta = () => {
  return (
    <div className="container mx-auto">
      {/* Blue background container with rounded corners */}
      <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-[100px] rounded-bl-none px-32 py-20 max-w-7xl mx-auto relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content Column */}
          <div className="flex flex-col justify-center text-left z-10 pr-8">
            <p className="text-blue-300 text-lg font-semibold mb-2">Secure Early Access</p>
            <div className="relative inline-block">
              <h3 className="text-5xl font-medium mb-6 text-white">
                FluentPro AI
                <Sparkles className="absolute left-[268px] top-0 h-6 w-6 text-blue-300" />
              </h3>
            </div>
            <p className="text-xl text-blue-100 leading-relaxed">
              Improve staff's spoken English without scheduling trainers. Fluentpro's AI automates the learning process and provides real-time analytics to track performance, monitor progress and measure ROI. Secure early access today.
            </p>
            <div className="mt-8">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 shadow-lg px-8 py-6 text-lg"
              >
                Secure Your Spot
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Image Column - Made larger with more padding */}
          <div className="w-full h-full flex items-center justify-center pr-2">
            <div className="w-full aspect-[1/1] relative">
              {/* Background image */}
              <img 
                src="/abstract-bg/imageBackground9.png"
                alt="Abstract Background"
                className="w-full h-full object-cover rounded-3xl"
              />
              
              {/* Computer SVG positioned on top of the background */}
              <img 
                src="/images/rolePlay.png"
                alt="FluentPro Computer"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-auto z-10 scale-110 rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-12 left-8 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl" />
        <div className="absolute bottom-12 right-8 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl" />
      </div>
    </div>
  );
};

export default AiCta;