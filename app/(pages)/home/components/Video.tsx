import React from 'react';
import { Button } from '../../../../components/shared/shad-button';
import { Download } from 'lucide-react';

const Video = () => {
  // Replace this ID with your actual YouTube video ID
  const videoId = 'your_video_id_here';

  return (
    <div className="container mx-auto my-20 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Video Column */}
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-[40vh]"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="FluentPro Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Text Content Column */}
        <div className="flex flex-col items-start justify-start text-left">
          <h1 className="text-6xl font-medium mb-4">
            Meet <span className="text-dynamic-blue">FluentPro</span>
          </h1>
          <h2 className="text-2xl text-gray-700 mb-6">
            An AI English-speaking coach for every employee
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
          Only 48% of employees feel confident speaking English at work. Fluentpro offers an affordable, scalable, one-on-one practice solution with unlimited and customised scenarios, providing real-time, realistic conversations that build confidence and accelerate progress.</p>
         <br />
          <p className="text-lg text-gray-600 leading-relaxed">Ideal for organizations with English-speaking interactions or talent development programs, it's a simple, effective way to develop language and workplace skills. </p>
          <Button variant="default" size="lg" className="bg-dynamic-blue hover:bg-dynamic-blue/90 shadow-lg mt-4">
            Download Brochure
            <Download className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Video;