// TrendLineChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

// Registering necessary components for Chart.js
ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title
);

const TrendLineChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Days of the week
    datasets: [
      {
        label: 'Energy Consumption (kWh)',
        data: [150, 200, 180, 220, 170, 210, 190], // Sample data
        borderColor: 'rgba(34, 197, 94, 1)', // Green color for line
        backgroundColor: 'rgba(34, 197, 94, 0.2)', // Light green fill
        borderWidth: 2,
        tension: 0.3, // Smooth line
        pointRadius: 5,
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
          text: 'Days',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Energy (kWh)',
        },
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default TrendLineChart;
