// src/utils/formatters.js
export const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString('en-IN')}`;
  };
  
  export const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN');
  };
  
  export const formatPercentage = (value) => {
    return `${value}%`;
  };