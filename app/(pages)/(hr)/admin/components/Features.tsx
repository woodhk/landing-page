import Image from "next/image";
import { features } from "../data/features";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../../components/shared/card";
import Button from "../../../../../components/shared/Button";

export default function Features() {
  return (
    <div className="w-full py-12">
      <div className="container mx-auto space-y-8">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-8">
                <CardHeader className="p-0 space-y-4">
                  <div className="inline-flex">
                    <span className="bg-gray-50 text-gray-600 rounded-lg px-3 py-1 text-sm font-medium">
                      {feature.tag}
                    </span>
                  </div>
                  <CardTitle className="text-4xl font-bold tracking-tight">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="p-0 mt-6">
                  <Button 
                    text={feature.buttonText}
                    url={feature.href}
                    primary={false}
                    size="medium"
                  />
                </CardFooter>
              </div>
              <div className="relative lg:w-[45%] h-[300px] lg:h-auto bg-gray-50">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain p-4"
                  priority={index === 0}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
