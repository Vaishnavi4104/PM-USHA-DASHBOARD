// src/services/api.js
export const fetchData = async (endpoint) => {
    // Placeholder for API call; replace with actual fetch logic
    return new Promise((resolve) => setTimeout(() => resolve({ data: 'Mock Data' }), 500));
  };
  
  export const fetchInfrastructureData = async () => {
    return fetchData('/infrastructure');
  };
  
  export const fetchEquipmentData = async () => {
    return fetchData('/equipment');
  };
  
  export const fetchSoftComponentsData = async () => {
    return fetchData('/soft-components');
  };
  
  export const fetchFinancialData = async () => {
    return fetchData('/financial');
  };