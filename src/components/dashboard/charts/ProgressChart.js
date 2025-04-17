// src/components/dashboard/charts/ProgressChart.js
import React from 'react';
import '../../../assets/css/styles.css';

const ProgressChart = ({ progress = 50 }) => {
  return (
    <div style={{ width: '100%', backgroundColor: '#ddd', borderRadius: '5px' }}>
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: '#003087',
          height: '20px',
          borderRadius: '5px',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressChart;