import React from 'react';
import { coursesData, rolePlayData } from '../data/scenario';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../../../components/shared/card';

const Scenario = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl max-w-3xl mx-auto font-semibold mb-12 text-center">
          Scenario Based Training That Simulate Real Business Conversations
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Custom Courses Card */}
          <Card className="flex flex-col h-full">
            <CardHeader>
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={coursesData[0].image}
                  alt="Custom courses and lessons"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <CardTitle className="text-xl font-semibold">
                {coursesData[0].title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {coursesData[0].description}
              </CardDescription>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link 
                href={coursesData[0].href}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Learn more
              </Link>
            </CardFooter>
          </Card>

          {/* Role Play Card */}
          <Card className="flex flex-col h-full">
            <CardHeader>
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={rolePlayData[0].image}
                  alt="Role-play scenarios"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <CardTitle className="text-xl font-semibold">
                {rolePlayData[0].title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {rolePlayData[0].description}
              </CardDescription>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link 
                href={rolePlayData[0].href}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Learn more
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Scenario;