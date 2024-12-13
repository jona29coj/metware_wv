// components/FacilityUsageChart.js

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const FacilityUsageChart = () => {
  const data = {
    labels: ['Clients', 'Chillers', 'Common Areas', 'Others'],
    datasets: [
      {
        data: [200, 15, 15, 20], // Values corresponding to the labels
        backgroundColor: [
          '#800000', 
          '#33B5FF', // Bright Blue (Chillers)
          '#FFD700', // Bright Yellow (Common Areas)
          '#28A745', // Bright Green (Others)
        ],
        hoverBackgroundColor: [
          '#B22222', 
          '#66C2FF', // Lighter Blue
          '#FFEC8B', // Lighter Yellow
          '#5CD85C', // Lighter Green
        ],
        borderWidth: 0, // Remove border for a clean look
      },
    ],
  };

  const totalValue = data.datasets[0].data.reduce((sum, value) => sum + value, 0);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hides the default legend
      },
      tooltip: {
        callbacks: {
          title: () => null, // Removes title in tooltip
          label: (tooltipItem) => {
            const label = data.labels[tooltipItem.dataIndex]; // Get the label
            const value = tooltipItem.raw; // Get the raw value
            return `${label}: ${value} MW`; // Format the tooltip
          },
        },
      },
      datalabels: {
        display: true,
        color: '#fff',
        font: {
          weight: 'bold',
        },
        formatter: (value) => `${Math.round((value / totalValue) * 100)}%`, // Displays integer percentages
      },
    },
    cutout: '30%', // Create a donut shape with a smaller hole
  };

  return (
    <div className="flex justify-center items-center">
      <Doughnut data={data} options={options} style={{ width: '240px', height: '240px' }} />
    </div>
  );
};

export default FacilityUsageChart;
