import React from 'react';
import { Button } from '../../../../components/shared/shad-button';
import { ArrowRight, Download, Video } from 'lucide-react';

const KeyValueProp = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="max-w-7xl mx-auto pt-52 pb-24 px-4">
        {/* Heading and Subheading at the top */}
        <div className="text-center mb-24">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold mb-8">Different Training for Different Roles</h1>
          <h2 className="text-3xl text-gray-600">
          From Waiters to Engineers to Investment Bankers, every role receives a custom training plan
          </h2>
        </div>

        {/* container with rounded corners */}
        <div className="bg-blue-100 rounded-[100px] rounded-br-none px-32 py-20 max-w-7xl mx-auto relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Column (on the left) - swapped position */}
            <div className="w-full">
              <img 
                src="/ui-elements/roleSpecificTailoring.png"
                alt="Abstract Background"
                className="w-full h-full rounded-3xl"
              />
            </div>

            {/* Text Content Column (on the right) - swapped position */}
            <div className="flex flex-col justify-center">
              <h3 className="text-4xl font-medium mb-6">Role-Specific Tailoring</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
              Create tailored English courses and lessons that directly reflect your staff's daily interactions using AI. If a job position isn't covered, our language experts will create a free custom course within 48 hours.
              </p>
              <br />
              <Button variant="default" size="lg" className="bg-dynamic-blue hover:bg-dynamic-blue/90 shadow-lg mt-4">
                Get Custom Training
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyValueProp;