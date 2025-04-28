"use client";

import React from "react";
import Image from "next/image";
import { exerciseCards } from "../data/exercises";
import { CheckCircle } from "lucide-react";

const Exercises: React.FC = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {exerciseCards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 transition-all duration-300 hover:shadow-md flex flex-col"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              
              <div className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm mb-2 self-start">
                {card.pill}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {card.description}
              </p>
              
              <div className="space-y-2 mt-auto">
                {card.checkItems.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-black" />
                    </div>
                    <div className="ml-2 text-sm text-gray-700">
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exercises;