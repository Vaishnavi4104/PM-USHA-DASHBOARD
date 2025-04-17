import React, { createContext, useContext, useState, useEffect } from 'react';
import { getMockData } from '../services/mockDataService';

export const DataContext = createContext();
export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    loading: true,
    error: null,
    ...getMockData()
  });

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setData(prev => ({
        ...prev,
        loading: false
      }));
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};