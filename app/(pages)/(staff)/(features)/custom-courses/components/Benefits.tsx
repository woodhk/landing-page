import React from 'react';
import { benefits } from '../data/benefits';

const Benefits: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="bg-dynamic-blue/80 rounded-3xl rounded-bl-none shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6">
            {/* Left side - Main heading and description */}
            <div className="text-white p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-8">
               Job Specific Training for Any Role
              </h2>
              <p className="text-2xl mb-4">
              Give your staff the precise skills they need to perform, communicate, and deliver at work.
              </p>
            </div>

            {/* Right side - Benefits list */}
            <div className="bg-light-3 p-8 md:p-12 space-y-12 rounded-tr-3xl rounded-br-3xl">
              {benefits.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-semibold">
                    {item.title}
                  </h3>
                  <p>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;