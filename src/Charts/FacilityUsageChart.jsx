import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Client", "Others", "Common Area", "Chiller"],
    datasets: [
      {
        data: [20202, 2492, 75, 0], // Values for each section
        backgroundColor: ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF"], // New color palette
        hoverBackgroundColor: ["#E63946", "#FFC107", "#52B788", "#3A86FF"], // Hover colors
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom", // Moves the legend below the chart
        labels: {
          color: "#4B5563", // Text color
          font: { size: 12 },
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.raw;
            return `${tooltipItem.label}: ${value} kWh`;
          },
        },
      },
    },
  };

  return (
    <div style={{ height: "250px", width: "250px" }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
