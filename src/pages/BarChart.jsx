import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Register necessary components from Chart.js
Chart.register(...registerables);

const BarChart = () => {
  // Dummy data for the bar chart
  const data = {
    labels: ['Solar', 'Wind', 'Hydro', 'Nuclear', 'Fossil Fuels'],
    datasets: [
      {
        label: 'Energy Sources',
        data: [40, 25, 20, 10, 5],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  // Options for the bar chart
  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Energy Sources',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
