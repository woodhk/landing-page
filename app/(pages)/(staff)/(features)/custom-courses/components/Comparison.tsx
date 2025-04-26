import React from 'react';
import { comparisonData } from '../data/comparison';
import { CheckCircle2 } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why FluentPro Outperforms Traditional Training
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our AI-powered approach delivers better results compared to conventional language programs.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-dynamic-blue text-white">
                <th className="p-4 text-left font-semibold text-lg w-1/4 md:w-1/3 rounded-tl-lg">
                  Feature
                </th>
                <th className="p-4 text-left font-semibold text-lg w-1/4 md:w-1/3 bg-dynamic-blue/90">
                  FluentPro
                </th>
                <th className="p-4 text-left font-semibold text-lg w-1/4 md:w-1/3 bg-dynamic-blue/80 rounded-tr-lg">
                  Traditional/Other Methods
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <td className="p-4 font-medium">{item.feature}</td>
                  <td className="p-4 bg-green-50 border-l border-r border-gray-200">
                    <div className="flex items-start gap-2">
                      <div className="mt-1 text-green-600 flex-shrink-0">
                        <CheckCircle2 size={18} />
                      </div>
                      <div>{item.fluentPro}</div>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600 bg-opacity-50">{item.traditional}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
