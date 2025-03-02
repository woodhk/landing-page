// Types for our form data
export interface FormData {
  // Step 1
  email?: string;
  fullName?: string;
  phoneNumber?: string;
  country?: string;
  
  // Step 2
  jobTitle?: string;
  companyName?: string;
  companySize?: string;
  learners?: string;
  details?: string;
  
  // Step 3
  selectedDate?: string;
}

// Steps configuration
export const steps = [
  {
    id: 1,
    name: "Step 1",
    fields: ["email", "fullName", "phoneNumber", "country"]
  },
  {
    id: 2,
    name: "Step 2",
    fields: ["jobTitle", "companyName", "companySize", "learners", "details"]
  },
  {
    id: 3,
    name: "Step 3",
    fields: ["selectedDate"]
  }
];

export const companySizeOptions = [
  { label: "1-10", value: "1-10" },
  { label: "11-50", value: "11-50" },
  { label: "51-200", value: "51-200" },
  { label: "201-500", value: "201-500" },
  { label: "501-1000", value: "501-1000" },
  { label: "1000+", value: "1000+" }
];

export const learnersOptions = [
  { label: "1-10", value: "1-10" },
  { label: "11-50", value: "11-50" },
  { label: "51-200", value: "51-200" },
  { label: "201-500", value: "201-500" },
  { label: "500+", value: "500+" }
];

export const countryOptions = [
  { label: "Hong Kong", value: "HK" },
  { label: "China", value: "CN" },
  { label: "Japan", value: "JP" },
  { label: "Singapore", value: "SG" },
  { label: "Vietnam", value: "VN" },
  { label: "South Korea", value: "KR" },
  { label: "Taiwan", value: "TW" },
  { label: "Malaysia", value: "MY" },
  { label: "Thailand", value: "TH" },
  { label: "Indonesia", value: "ID" },
  { label: "Philippines", value: "PH" },
  { label: "India", value: "IN" },
  { label: "United Kingdom", value: "UK" },
  { label: "Canada", value: "CA" },
  { label: "Australia", value: "AU" },
  { label: "Germany", value: "DE" },
  { label: "France", value: "FR" },
  // Add more countries as needed
];

export const expectationPoints = [
  {
    id: 1,
    text: "Get a personalised demo of Fluentpro"
  },
  {
    id: 2,
    text: "Hear proven customer success stories"
  },
  {
    id: 3,
    text: "Learn about pricing for your use case"
  }
];