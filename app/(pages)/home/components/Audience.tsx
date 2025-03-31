import { hrData, staffData } from "../data/audience";
import React from "react";
import { Button } from "../../../../components/shared/shad-button";
import Link from "next/link";


const Audience = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-700 tracking-tight mb-4">
            Designed for Learners
          </h2>
          <h1 className="text-3xl font-semibold md:text-4xl lg:text-7xl mx-auto">
            Loved by Human Resources
          </h1>
        </div>
        
        <div className="space-y-24">
          {/* Staff Card */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="lg:w-1/2 space-y-6 order-2 lg:order-1">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-2">
                For Staff Members
              </div>
              <h3 className="text-3xl md:text-4xl font-medium leading-tight">
                {staffData[0].title}
              </h3>
              <p className="text-lg text-gray-600">
                {staffData[0].description}
              </p>
              <div className="pt-4">
                <Link href={staffData[0].href}>
                  <Button variant="default" size="lg" className="bg-blue-600 hover:bg-blue-700 shadow-sm">
                    Explore Staff Features
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02] duration-300">
                <img 
                  src={staffData[0].image} 
                  alt="Staff Features"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* HR Card */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02] duration-300">
                <img 
                  src={hrData[0].image} 
                  alt="HR Features"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-2">
                For HR Teams
              </div>
              <h3 className="text-3xl md:text-4xl font-medium leading-tight">
                {hrData[0].title}
              </h3>
              <p className="text-lg text-gray-600">
                {hrData[0].description}
              </p>
              <div className="pt-4">
                <Button variant="default" size="lg" className="bg-indigo-600 hover:bg-indigo-700 shadow-sm">
                  Explore HR Features
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;