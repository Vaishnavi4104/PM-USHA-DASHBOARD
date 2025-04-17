// src/components/dashboard/charts/PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Infrastructure', 'Equipment', 'Soft Components'],
    datasets: [
      {
        data: [52, 29, 5],
        backgroundColor: ['#003087', '#ff6200', '#ffffff'],
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;