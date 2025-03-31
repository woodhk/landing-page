import React from 'react';
import { coaches } from '../data/coaches';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../../../components/shared/card';
import Image from 'next/image';
import Link from 'next/link';

const Coaches = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {coaches.map((coach, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-semibold mb-4">{coach.title}</h1>
              <p className="text-lg text-gray-600 mb-6">{coach.description}</p>
              <Link 
                href={coach.href}
                className="inline-flex items-center px-4 py-2 bg-gray-200 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors"
              >
                Learn more
              </Link>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src={coach.image}
                alt={coach.title}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Coaches;