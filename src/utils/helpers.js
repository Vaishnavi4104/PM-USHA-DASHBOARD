// src/utils/helpers.js
export const calculateProgress = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const now = new Date();
    const total = end - start;
    const elapsed = now - start;
    return Math.min(100, Math.max(0, (elapsed / total) * 100)).toFixed(2);
  };
  
  export const getUtilizationPercentage = (allocated, utilized) => {
    return ((utilized / allocated) * 100).toFixed(2);
  };