/**
 * Style utilities for industry components
 */

// Mobile industry styling
export const getMobileIndustryHeaderClass = (industryId: string, expandedIndustry: string | null) => {
  if (expandedIndustry !== industryId) {
    return 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300';
  }
  
  switch(industryId) {
    case "banking-finance":
      return 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400';
    case "real-estate":
      return 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400';
    case "shipping-logistics":
      return 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400';
    case "insurance":
      return 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400';
    default:
      return 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400';
  }
};

export const getMobileIndustryIconClass = (industryId: string, expandedIndustry: string | null) => {
  const isExpanded = expandedIndustry === industryId;
  
  switch(industryId) {
    case "banking-finance":
      return isExpanded 
        ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400' 
        : 'bg-gray-100 dark:bg-gray-800 text-blue-500 dark:text-blue-400/70';
    case "real-estate":
      return isExpanded 
        ? 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400' 
        : 'bg-gray-100 dark:bg-gray-800 text-green-500 dark:text-green-400/70';
    case "shipping-logistics":
      return isExpanded 
        ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400' 
        : 'bg-gray-100 dark:bg-gray-800 text-indigo-500 dark:text-indigo-400/70';
    case "insurance":
      return isExpanded 
        ? 'bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400' 
        : 'bg-gray-100 dark:bg-gray-800 text-red-500 dark:text-red-400/70';
    default:
      return isExpanded 
        ? 'bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400' 
        : 'bg-gray-100 dark:bg-gray-800 text-amber-500 dark:text-amber-400/70';
  }
};

// Desktop industry styling
export const getDesktopIndustryIconClass = (industryId: string, selectedIndustry: string) => {
  const isSelected = selectedIndustry === industryId;
  
  switch(industryId) {
    case "banking-finance":
      return isSelected 
        ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400' 
        : 'bg-gray-100 dark:bg-gray-800 text-blue-500 dark:text-blue-400/70';
    case "real-estate":
      return isSelected 
        ? 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400' 
        : 'bg-gray-100 dark:bg-gray-800 text-green-500 dark:text-green-400/70';
    case "shipping-logistics":
      return isSelected 
        ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400' 
        : 'bg-gray-100 dark:bg-gray-800 text-indigo-500 dark:text-indigo-400/70';
    case "insurance":
      return isSelected 
        ? 'bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400' 
        : 'bg-gray-100 dark:bg-gray-800 text-red-500 dark:text-red-400/70';
    default:
      return isSelected 
        ? 'bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400' 
        : 'bg-gray-100 dark:bg-gray-800 text-amber-500 dark:text-amber-400/70';
  }
};

export const getDesktopIndustryTextClass = (industryId: string, selectedIndustry: string) => {
  if (selectedIndustry !== industryId) {
    return 'font-medium text-gray-700 dark:text-gray-300';
  }
  
  switch(industryId) {
    case "banking-finance":
      return 'font-semibold text-blue-600 dark:text-blue-400';
    case "real-estate":
      return 'font-semibold text-green-600 dark:text-green-400';
    case "shipping-logistics":
      return 'font-semibold text-indigo-600 dark:text-indigo-400';
    case "insurance":
      return 'font-semibold text-red-600 dark:text-red-400';
    default:
      return 'font-semibold text-amber-600 dark:text-amber-400';
  }
};

/**
 * Helper function to format industry title
 */
export const formatIndustryTitle = (industryId: string): string => {
  return industryId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' & ');
}; 