// src/components/dashboard/charts/BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['Construction', 'Equipment', 'Soft Components'],
    datasets: [
      {
        label: 'Fund Utilization (%)',
        data: [75, 60, 85],
        backgroundColor: '#003087',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;