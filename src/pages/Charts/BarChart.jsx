// BarChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

// Registering necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);

const BarChart = () => {
  const data = {
    labels: ['Grid', 'Diesel', 'Solar', 'Renewable'], // Energy sources
    datasets: [
      {
        label: 'Energy Source Contribution (%)',
        data: [30, 10, 60, 20], // Sample data for each energy source
        backgroundColor: [
          'rgba(37, 99, 235, 0.5)', // Grid
          'rgba(239, 68, 68, 0.5)', // Diesel
          'rgba(252, 211, 77, 0.5)', // Solar
          'rgba(34, 197, 94, 0.5)', // Renewable
        ],
        borderColor: [
          'rgba(37, 99, 235, 1)', // Grid
          'rgba(239, 68, 68, 1)', // Diesel
          'rgba(252, 211, 77, 1)', // Solar
          'rgba(34, 197, 94, 1)', // Renewable
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        mode: 'index',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Energy Sources',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Percentage (%)',
        },
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
