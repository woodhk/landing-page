import React from 'react';
import Image from 'next/image';
import { benefitData } from '../data/benefit';

const Benefits = () => {
  return (
    <section className="w-full py-32 my-16 px-4 md:px-8 lg:px-16 bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Learn faster with Role-Play Simulations
          </h2>
          <p className="text-lg max-w-4xl mx-auto">
            FluentPro helps your team prepare for workplace conversations. Whether staff are closing clients or handling customer complaints, realistic role-play simulations give your team a safe space to practise tough conversations, improve clarity under pressure, and avoid costly misunderstandings.
          </p>
        </div>

        {/* Image now above the 4 points - smaller size */}
        <div className="relative rounded-lg overflow-hidden mb-16 max-w-4xl mx-auto">
          <Image
            src="/app-screenshots/roleplay3.png"
            alt="Screenshot tool interface"
            width={900}
            height={550}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* 4 points in separate vertical columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitData.map((benefit, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-sm text-gray-200">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;