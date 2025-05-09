import React from 'react';
import { Button } from '../../../../components/shared/shad-button';
import { ArrowRight } from 'lucide-react';
import { CulturalAwarenessAnimation } from '../../../../lib/animations/Culture';

const Benefits = () => {
  return (
    <div 
      className="bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: "url('/abstract-bg/imageBackground9.png')" }}
    >
      <div className='flex justify-center container max-w-7xl mx-auto pt-32'>
        <h1 className='text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold max-w-5xl text-light-3'>So much more than a 
          <br /> Language Learning App</h1>
      </div>


      {/* Role-Play Learning */}

      <div className='flex justify-center container max-w-6xl mx-auto my-24'>
         <div className="bg-gradient-to-br from-blue-50/80 to-blue-50 rounded-[100px] rounded-bl-none px-32 py-20 max-w-7xl mx-auto relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Text Content Column (on the left) - Increased from 1 to 2 columns */}
            <div className="flex flex-col justify-center lg:col-span-2">
              <h3 className="text-4xl font-medium mb-6">Simulate Workplace Interactions
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
              Let your staff practice meetings, presentations, and other workplace conversations from the comfort of their own apartment through AI-powered role-play sessions.
              </p>
              <br />
              <Button variant="default" size="lg" className="bg-dynamic-blue hover:bg-dynamic-blue/90 shadow-lg mt-4">
                Start Role-Play Learning
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Image Column (on the right) - Decreased from 2 to 3 columns */}
            <div className="w-full h-full lg:col-span-3">
              <img 
                src="/ui-elements/rolePlayUi.png"
                alt="Role Play Simulation Image"
                className="w-full h-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>


      {/* Soft Skills */}
      <div className='flex justify-center container max-w-6xl mx-auto my-24'>
        <div className="bg-gradient-to-br from-blue-50/80 to-blue-50 rounded-[100px] rounded-br-none px-32 py-20 max-w-7xl mx-auto relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Animation Column (on the left) - Decreased from 2 to 3 columns */}
            <div className="w-full h-full lg:col-span-3 flex justify-center">
              <CulturalAwarenessAnimation />
            </div>
            
            {/* Text Content Column (on the right) - Increased from 1 to 2 columns */}
            <div className="flex flex-col justify-center lg:col-span-2">
              <h3 className="text-4xl font-medium mb-6">Simultaneously Build Soft Skills</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
              Train your staff on effective communication, cultural awareness, and other soft skills needed to navigate social dynamics in the workplace.
              </p>
              <br />
              <Button variant="default" size="lg" className="bg-dynamic-blue hover:bg-dynamic-blue/90 shadow-lg mt-4">
                Receive Soft Skills Training
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>


      {/* Reports & Analytics */}

      <div className='flex justify-center container max-w-6xl mx-auto pb-24'>
         <div className="bg-gradient-to-bl from-blue-50/80 to-blue-50 rounded-[100px] rounded-bl-none px-32 py-20 max-w-7xl mx-auto relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Text Content Column (on the left) - Increased from 1 to 2 columns */}
            <div className="flex flex-col justify-center lg:col-span-2">
              <h3 className="text-4xl font-medium mb-6"> Prove Return On Investment</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
              Track and prove ROI from your team's English training instantly with real-time reports and analytics on staff progress - all from one dashboard.
              </p>
              <br />
              <Button variant="default" size="lg" className="bg-dynamic-blue hover:bg-dynamic-blue/90 shadow-lg mt-4">
                Prove Return On Investment
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Image Column (on the right) - Decreased from 2 to 3 columns */}
            <div className="w-full h-full lg:col-span-3">
              <img 
                src="/ui-elements/mistakeImprovements.png"
                alt="Reports & Analytics"
                className="w-full h-full object-fit rounded-3xl aspect-[1/1]"
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Benefits;