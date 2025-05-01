import React from 'react';
import { Button } from '../../../../components/shared/shad-button';
import { ArrowRight, Sparkles, Globe, BarChart } from 'lucide-react';

const AiCta = () => {
  return (
    <div className="container mx-auto mt-32">
      <div className="bg-slate-50 border border-slate-200 rounded-xl shadow-sm max-w-7xl mx-auto overflow-hidden">
        {/* Top section with angled division */}
        <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 h-48">
          <div className="absolute inset-0 bg-[url('/api/placeholder/400/320')] bg-cover opacity-10"></div>
          
          {/* Angled divider */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-slate-50" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
          
          {/* Header content positioned over the angle */}
          <div className="absolute top-8 left-12 z-10">
            <div className="flex items-center space-x-3">
              <p className="bg-white/10 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium">Secure Early Access</p>
              <Sparkles className="h-5 w-5 text-amber-400" />
            </div>
            <h3 className="text-5xl font-bold mt-4 text-white">FluentPro AI</h3>
          </div>
        </div>
        
        {/* Main content area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left column - Value proposition */}
          <div className="lg:col-span-7 px-12 py-12">
            <div className="max-w-xl">
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Improve staff's spoken English without scheduling trainers. Fluentpro's AI automates the learning process and provides real-time analytics to track performance, monitor progress and measure ROI. Secure early access today.
              </p>
              
              {/* Feature highlights */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-start space-x-3">
                  <Globe className="h-6 w-6 text-slate-700 mt-1" />
                  <div>
                    <h4 className="font-medium text-slate-900">Automated Learning</h4>
                    <p className="text-sm text-slate-600">No trainers required</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart className="h-6 w-6 text-slate-700 mt-1" />
                  <div>
                    <h4 className="font-medium text-slate-900">Real-time Analytics</h4>
                    <p className="text-sm text-slate-600">Track ROI instantly</p>
                  </div>
                </div>
              </div>
              
              {/* CTA Button */}
              <Button 
                variant="default" 
                size="lg" 
                className="bg-dynamic-blue hover:bg-dynamic-blue/90 shadow-md px-8 py-6 text-lg w-full lg:w-auto"
              >
                Secure Your Spot
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
          
          {/* Right column - Visuals */}
          <div className="lg:col-span-5 relative min-h-[400px]">
            {/* Offset image container */}
            <div className="absolute -top-28 right-0 w-full h-[calc(100%+7rem)] overflow-hidden">
              {/* Computer image with shadow */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6">
                <img 
                  src="/app-screenshots/fp-computer.svg"
                  alt="FluentPro Computer"
                  className="w-full h-auto drop-shadow-xl scale-[1.1]"
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiCta;