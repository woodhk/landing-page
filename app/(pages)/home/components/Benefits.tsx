import React from "react";
import type { Benefit as BenefitType } from "../data/benefits";
import { benefits } from "../data/benefits";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../../../components/shared/card";

const Benefits = () => {
  // Define icon colors for each benefit
  const iconColors = [
    "bg-gray-100 text-blue-600",
    "bg-gray-100 text-purple-600",
    "bg-gray-100 text-green-600"
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
            Why choose Fluentpro for your employees' language learning needs
          </h2>
        </div>
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="relative overflow-hidden min-h-[300px] transform transition-transform hover:scale-105">
                <CardHeader className="flex flex-col items-center text-center p-8">
                  <div className={`mb-6 rounded-full ${iconColors[index]} p-4`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-3xl font-medium pb-6">{benefit.title}</CardTitle>
                  <CardDescription className="text-base text-md text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;


