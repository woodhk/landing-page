import React from 'react';
import Image from 'next/image';
import { Badge } from '../../../../../../components/shared/badge';
import workplaceInteractions from '../data/types';

const WorkplaceInteractionsSection: React.FC = () => {
  return (
    <section className="w-full pt-32 pb-32 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Title and Subtitle */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark">
        Real workplaces have varied conversations. FluentPro prepares staff for all of them.
        </h2>
        <p className="text-xl text-medium max-w-4xl mx-auto">
        From one-on-one meetings to high-stakes presentations, every interaction gets covered.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {workplaceInteractions.map((interaction, index) => (
          <div 
            key={interaction.id} 
            className="bg-light-3 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-4 pb-0">
              <Image
                src={interaction.imagePath}
                alt={interaction.title}
                width={320}
                height={200}
                className="w-full h-48 object-cover rounded"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-dark">{interaction.title}</h3>
              <p className="text-medium mb-4">{interaction.description}</p>
              <div className="flex gap-2 flex-wrap">
                {index === 0 && (
                  <>
                    <Badge className="bg-gray-600">Negotiations</Badge>
                    <Badge className="bg-gray-600">Daily Standups</Badge>
                    <Badge className="bg-gray-600">Colleague Discussions</Badge>
                  </>
                )}
                {index === 1 && (
                  <>
                    <Badge className="bg-gray-600">Internal or Stakeholder Meetings</Badge>
                    <Badge className="bg-gray-600">Client Discussions</Badge>
                  </>
                )}
                {index === 2 && (
                  <>
                    <Badge className="bg-gray-600">Sales Pitches</Badge>
                    <Badge className="bg-gray-600">Presentations</Badge>
                    <Badge className="bg-gray-600">Investor Pitches</Badge>
                  </>
                )}
                {index === 3 && (
                  <>
                    <Badge className="bg-gray-600">User as Job Interviewer</Badge>
                    <Badge className="bg-gray-600">Sales Meetings</Badge>
                   
                    
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkplaceInteractionsSection;