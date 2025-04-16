import React from 'react';
import { comparisonData, getUniqueGroupTitles, getHeaderConfigForGroup } from '../data/comparison';
import { Crown, Check } from 'lucide-react';

// Helper component for table headers
interface TableHeaderProps {
  title: string;
  highlighted: boolean;
  showCrown: boolean;
}

const TableHeader: React.FC<TableHeaderProps> = ({ title, highlighted, showCrown }) => {
  return (
    <th scope="col" className={`px-3 py-3.5 text-center text-lg font-semibold ${highlighted ? 'text-dynamic-blue' : 'text-gray-900'} w-1/5`}>
      <span className="flex items-center justify-center gap-2">
        {showCrown && <Crown className="w-4 h-4 text-dynamic-blue" />}
        {title}
      </span>
    </th>
  );
};

// Helper component for ticks
const Tick: React.FC<{ value: "✓" | "-" | "coming soon" }> = ({ value }) => {
  if (value === "✓") {
    return <Check className="w-5 h-5 text-gray-800 mx-auto" />;
  } else if (value === "coming soon") {
    return <span className="text-gray-400 text-sm">coming soon</span>;
  } else {
    return <span className="text-gray-400 text-lg">-</span>;
  }
};

const Comparison: React.FC = () => {
  const groupTitles = getUniqueGroupTitles();

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Why Companies Are Exploring FluentPro
          </h2>
          <p className="mt-6 text-2xl text-gray-500">
            Discover how Fluentpro compares to alternative training methods
          </p>
        </div>

        <div className="mt-12 space-y-16">
          {groupTitles.map((groupTitle) => {
            const headerConfig = getHeaderConfigForGroup(groupTitle);
            
            return (
              <div key={groupTitle} className="overflow-hidden">
                <div className="bg-gray-50 px-6 py-6 border-t border-x rounded-t-xl">
                  <h3 className="text-2xl font-semibold text-gray-900">{groupTitle}</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 border-b border-x rounded-b-xl">
                    <thead>
                      <tr className="bg-gray-50">
                        <th scope="col" className="py-3.5 pl-6 pr-3 text-left text-lg font-semibold text-gray-900 w-1/5">Feature</th>
                        <TableHeader 
                          title="FluentPro" 
                          highlighted={headerConfig.fluentPro.highlighted} 
                          showCrown={headerConfig.fluentPro.showCrown} 
                        />
                        <TableHeader 
                          title="1-on-1 Coaching" 
                          highlighted={headerConfig.oneOnOneCoaching.highlighted} 
                          showCrown={headerConfig.oneOnOneCoaching.showCrown} 
                        />
                        <TableHeader 
                          title="Classroom Training" 
                          highlighted={headerConfig.classroomTraining.highlighted} 
                          showCrown={headerConfig.classroomTraining.showCrown} 
                        />
                        <TableHeader 
                          title="Other AI Apps" 
                          highlighted={headerConfig.otherAIApps.highlighted} 
                          showCrown={headerConfig.otherAIApps.showCrown} 
                        />
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {comparisonData
                        .filter((item) => item.groupTitle === groupTitle)
                        .map((feature, featureIdx) => (
                          <tr key={feature.feature} className={featureIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="py-4 pl-6 pr-3 text-sm font-medium text-gray-900">{feature.feature}</td>
                            <td className="px-3 py-4 text-sm text-center">
                              <Tick value={feature.fluentPro} />
                            </td>
                            <td className="px-3 py-4 text-sm text-center">
                              <Tick value={feature.oneOnOneCoaching} />
                            </td>
                            <td className="px-3 py-4 text-sm text-center">
                              <Tick value={feature.classroomTraining} />
                            </td>
                            <td className="px-3 py-4 text-sm text-center">
                              <Tick value={feature.otherAIApps} />
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Comparison;

