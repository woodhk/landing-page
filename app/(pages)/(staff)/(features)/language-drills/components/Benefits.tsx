import React from 'react';
import Image from 'next/image';

const Benefits = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl md:text-5xl font-bold mb-8 text-dark">
            Benefits of Dynamic<br /> Language Learning Drills
          </h1>
          <p className="text-lg mb-8 text-medium">
          Fluentpro’s language drills are personalised to cover mistakes made by staff during a lesson.
          </p>
          <p className="text-lg text-medium">
          This allows them to practice and improve on their own mistakes, avoiding wasted time on exercises they’re already comfortable with.
          </p>
        </div>
        <div className="w-full lg:w-1/2 h-auto aspect-[1/1]">
          <Image
            src="/images/roleplay.png"
            alt="Role-Play Learning Benefits"
            width={800}
            height={600}
            className="w-full h-full object-screen rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;