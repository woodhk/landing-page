import React from 'react';
import { Button } from '../../../../components/shared/shad-button';
import { ArrowRight, Download, Video } from 'lucide-react';

const KeyValueProp = () => {
  return (
    <div className="max-w-7xl mx-auto mt-52 mb-24 px-4">
      {/* Heading and Subheading at the top */}
      <div className="text-center mb-24">
        <h1 className="text-6xl font-semibold mb-4">Different Training for Different Roles</h1>
        <h2 className="text-3xl text-gray-600">
        From Waiters to Engineers to Investment Bankers, every role gets a custom training plan
        </h2>
      </div>

      {/* container with rounded corners */}
      <div className="bg-gradient-to-br from-blue-50/80 to-blue-50 rounded-[100px] rounded-br-none px-32 py-20 max-w-7xl mx-auto relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column (on the left) - swapped position */}
          <div className="w-full">
            <img 
              src="/images/scenarioCourse.png"
              alt="Abstract Background"
              className="w-full h-full rounded-3xl"
            />
          </div>

          {/* Text Content Column (on the right) - swapped position */}
          <div className="flex flex-col justify-center">
            <h3 className="text-4xl font-medium mb-6">Role-Specific Tailoring</h3>
            <p className="text-xl text-gray-600 leading-relaxed">
            Our AI creates tailored English courses and lessons that directly reflect your staff's daily interactions. If a job position isn't covered, our language experts will create a free custom course within 48 hours.
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
  );
};

export default KeyValueProp;