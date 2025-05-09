import React from "react";
import { benefits } from "../data/reasons";
import { ArrowRight } from 'lucide-react';

const Reasons = () => {
  return (
    <section className="w-full py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
            Powerful features for easy, relevant training
          </h2>
        </div>
        <div className="max-w-3xl mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-12 md:gap-y-7">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex items-center gap-4 justify-start w-full">
                <div className="bg-blue-100 rounded-full p-2">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium">{benefit.title}</h3>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-20">
          <a href="/staff" className="text-dark text-lg font-medium underline inline-flex items-center gap-1 group">
            See all features 
            <ArrowRight 
              size={20} 
              className="transition-transform duration-300 group-hover:translate-x-1" 
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reasons;