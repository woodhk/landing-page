/**
 * Calculates the estimated annual productivity loss due to communication barriers
 * Formula: Loss = 12,500 × n × (1 + 0.05 · ln(n/100))
 * 
 * @param employees - Number of employees in the company
 * @returns The calculated loss rounded to the nearest whole number
 */
export const calculateCommunicationLoss = (employees: number): number => {
  if (employees < 1) return 0;
  
  const loss = 12500 * employees * (1 + 0.05 * Math.log(employees / 100));
  return Math.round(loss);
};

/**
 * Formats a number as currency with proper symbol and thousands separator
 * 
 * @param amount - The amount to format
 * @returns Formatted currency string
 */
export const formatCurrency = (amount: number): string => {
  return `$${amount.toLocaleString()}`;
};
