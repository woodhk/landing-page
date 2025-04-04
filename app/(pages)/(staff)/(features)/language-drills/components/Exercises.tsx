"use client";

import React from "react";
import Image from "next/image";
import { exerciseCards } from "../data/exercises";
import { CheckCircle } from "lucide-react";

const Exercises = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {exerciseCards.map((card, index) => (
          <div 
            key={index} 
            className="border-b border-gray-200 py-12 last:border-0"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <div className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm mb-4">
                  {card.pill}
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {card.title}
                </h2>
                <p className="text-lg mb-6">
                  {card.description}
                </p>
                
                <div className="space-y-3">
                  {card.checkItems.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-black" />
                      </div>
                      <div className="ml-3 text-lg">
                        {item.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="md:col-span-2">
                <div className="relative w-full h-64 md:h-full bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercises;