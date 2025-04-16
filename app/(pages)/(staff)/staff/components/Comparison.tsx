import React from 'react';
import { comparisonData, getUniqueGroupTitles } from '../data/comparison';

const Comparison: React.FC = () => {
  const groupTitles = getUniqueGroupTitles();

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Product Comparison
          </h2>
          <p className="mt-3 text-xl text-gray-500">
            See Fluentpro compares to traditional learning methods
          </p>
        </div>

        <div className="mt-12 space-y-16">
          {groupTitles.map((groupTitle) => (
            <div key={groupTitle} className="overflow-hidden">
              <div className="bg-gray-50 px-6 py-3 border-t border-x rounded-t-xl">
                <h3 className="text-lg font-semibold text-gray-900">{groupTitle}</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border-b border-x rounded-b-xl">
                  <thead>
                    <tr className="bg-gray-50">
                      <th scope="col" className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 w-1/5">Feature</th>
                      <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 w-1/5">FluentPro</th>
                      <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 w-1/5">1-on-1 Coaching</th>
                      <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 w-1/5">Classroom Training</th>
                      <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 w-1/5">Other AI Apps</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {comparisonData
                      .filter((item) => item.groupTitle === groupTitle)
                      .map((feature, featureIdx) => (
                        <tr key={feature.feature} className={featureIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="py-4 pl-6 pr-3 text-sm font-medium text-gray-900">{feature.feature}</td>
                          <td className="px-3 py-4 text-sm text-center">
                            <span className={feature.fluentPro === "✓" ? "text-green-600 text-lg font-bold" : "text-gray-300 text-lg"}>
                              {feature.fluentPro}
                            </span>
                          </td>
                          <td className="px-3 py-4 text-sm text-center">
                            <span className={feature.oneOnOneCoaching === "✓" ? "text-green-600 text-lg font-bold" : "text-gray-300 text-lg"}>
                              {feature.oneOnOneCoaching}
                            </span>
                          </td>
                          <td className="px-3 py-4 text-sm text-center">
                            <span className={feature.classroomTraining === "✓" ? "text-green-600 text-lg font-bold" : "text-gray-300 text-lg"}>
                              {feature.classroomTraining}
                            </span>
                          </td>
                          <td className="px-3 py-4 text-sm text-center">
                            <span className={feature.otherAIApps === "✓" ? "text-green-600 text-lg font-bold" : "text-gray-300 text-lg"}>
                              {feature.otherAIApps}
                            </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comparison;

