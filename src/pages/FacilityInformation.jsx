import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TopClients = ({ isSidebarCollapsed }) => {
  const chartRefs = useRef([]);

  // Top Clients Data
  const topClientsData = [
    {
      name: "Pfizer",
      energy: 4585,
      trends: [4300, 4400, 4500, 4585, 4630, 4700, 4750, 4800, 4850, 4900, 4950, 5000],
    },
    {
      name: "SGRI",
      energy: 3122,
      trends: [3000, 3050, 3100, 3122, 3200, 3250, 3300, 3350, 3400, 3450, 3500, 3550],
    },
    {
      name: "Tata Communications",
      energy: 930,
      trends: [900, 920, 925, 930, 940, 950, 960, 970, 980, 990, 1000, 1020],
    },
    {
      name: "ARCI",
      energy: 666,
      trends: [650, 660, 665, 666, 670, 675, 680, 685, 690, 695, 700, 710],
    },
    {
      name: "NewTech Industries", // New Client
      energy: 1890,
      trends: [1800, 1850, 1880, 1890, 1920, 1950, 1980, 2000, 2050, 2100, 2150, 2200], // New Client Trend Data
    },
  ];

  // Line Chart Data for Trends
  const trendChartData = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ],
    datasets: topClientsData.map((client, index) => ({
      label: client.name,
      data: client.trends,
      borderColor: ["#3F51B5", "#4CAF50", "#FFC107", "#FF5722", "#00BCD4"][index], // Line colors
      backgroundColor: ["#3F51B5", "#4CAF50", "#FFC107", "#FF5722", "#00BCD4"][index], // Legend fill color
      borderWidth: 2,
      tension: 0.3, // Smooth curves
      pointBackgroundColor: ["#3F51B5", "#4CAF50", "#FFC107", "#FF5722", "#00BCD4"][index], // Point colors
      pointRadius: 4,
    })),
  };

  // Chart Options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allows for custom width and height
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: { size: 12 },
          boxWidth: 20, // Custom width for legend blocks
          boxHeight: 10, // Custom height for legend blocks
          padding: 10, // Spacing between legend items
          usePointStyle: false, // Use rectangular blocks
        },
      },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "#6B7280", // Grey color for x-axis labels
        },
      },
      y: {
        grid: { color: "#E5E7EB" },
        ticks: {
          color: "#6B7280", // Grey color for y-axis labels
          precision: 0,
        },
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Outer Common Card for Top Clients */}
      <h4 className="text-lg font-bold text-gray-700 mb-6">Top Clients</h4>

      {/* Grid Layout for Client Partitions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {topClientsData.map((client) => (
          <div
            key={client.name}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between border border-gray-300"
          >
            {/* Client Info Section */}
            <h5 className="text-xl font-semibold text-gray-800 mb-2">{client.name}</h5>
            <p className="text-sm text-gray-600">Energy Consumption: {client.energy} kWh</p>
          </div>
        ))}
      </div>

      {/* Common Trend Line Chart Section */}
      <div
        className="w-full"
        style={{
          maxWidth: "100%",
          height: "400px", // Fixed height for the chart container
        }}
      >
        <Line
          data={trendChartData}
          options={chartOptions}
          style={{
            height: "400px", // Fixed height
            width: "100%", // Chart fills parent container
          }}
          ref={(ref) => (chartRefs.current[0] = ref?.chartInstance)}
        />
      </div>
    </div>
  );
};

export default TopClients;
