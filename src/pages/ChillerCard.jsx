import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useNavigate } from "react-router-dom";
import DateSelector from "../components/DateSelector";
import chiller from "../pages/chiller2.png";

// Registering Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Chiller Component
const Chiller = ({ title, cop, description, chartData, chillerId }) => {
  const navigate = useNavigate(); // React Router hook for navigation

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 flex flex-col md:flex-row items-center md:items-start">
      {/* Left Section: Image and Details */}
      <div className="flex flex-col items-center w-full md:w-1/3 space-y-2">
        <img
          src={chiller} // Replace with the correct image path
          alt={title}
          className="w-24 h-24 md:w-36 md:h-36 object-contain"
        />
        <div className="text-sm text-gray-600 text-center">
          <span className="font-medium">COP:</span> {cop}
        </div>
        <button
          className="w-28 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mt-2"
          onClick={() => navigate(`/chiller-details/${chillerId}`)} // Navigate on click
        >
          View Details
        </button>
        <div className="text-xs text-gray-500 text-center">
          {description}
        </div>
      </div>

      {/* Right Section: Chart */}
      <div className="w-full md:w-2/3 flex justify-center items-center p-4">
        <Line
          data={chartData}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
            },
          }}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

// Main Chillers Card Component
const ChillersCard = () => {
  const chillers = [
    {
      chillerId: 1, // Unique ID
      title: "Chiller 1",
      cop: 3.5,
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'Cooling Efficiency (%)',
            data: [85, 90, 88, 91, 93, 89, 92],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.4,
            fill: true,
          },
        ],
      },
    },
    {
      chillerId: 2, // Unique ID
      title: "Chiller 2",
      cop: 4.0,
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'Cooling Efficiency (%)',
            data: [80, 85, 83, 87, 90, 88, 92],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            tension: 0.4,
            fill: true,
          },
        ],
      },
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-xl p-6 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold">Chillers</h3>
        <DateSelector />
      </div>

      {/* Chiller Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {chillers.map((chillerData, index) => (
          <Chiller key={index} {...chillerData} />
        ))}
      </div>
    </div>
  );
};

export default ChillersCard;
