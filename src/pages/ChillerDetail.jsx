import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Highcharts from 'highcharts';
import Highcharts3D from 'highcharts/highcharts-3d';

// Sample chiller data
const chillerData = [
  {
    name: 'Chiller 1',
    status: 'Operational',
    description: '200kW',
    efficiency: 85,
    additionalDetails: 'This chiller is part of the main cooling system and operates efficiently under load.',
  },
  {
    name: 'Chiller 2',
    status: 'Maintenance',
    description: '150kW',
    efficiency: 75,
    additionalDetails: 'Scheduled for maintenance to ensure optimal performance and efficiency.',
  },
  {
    name: 'Chiller 3',
    status: 'Faulty',
    description: '100kW',
    efficiency: 50,
    additionalDetails: 'Currently out of service due to technical issues. Immediate repair is required.',
  },
  {
    name: 'Chiller 4',
    status: 'Operational',
    description: '250kW',
    efficiency: 90,
    additionalDetails: 'High-performance chiller that is ideal for large cooling requirements.',
  },
  {
    name: 'Chiller 5',
    status: 'Operational',
    description: '300kW',
    efficiency: 80,
    additionalDetails: 'This chiller has been optimized for energy efficiency, reducing overall costs.',
  },
  {
    name: 'Chiller 6',
    status: 'Maintenance',
    description: '175kW',
    efficiency: 70,
    additionalDetails: 'Undergoing routine maintenance checks to maintain peak performance.',
  },
];

// Chiller Chart Component
const ChillerEfficiencyChart = ({ efficiency }) => {
  useEffect(() => {
    Highcharts.chart('chiller-efficiency-chart', {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Chiller Efficiency',
      },
      xAxis: {
        categories: ['Efficiency (%)'],
      },
      yAxis: {
        title: {
          text: 'Percentage (%)',
        },
      },
      series: [{
        name: 'Efficiency',
        data: [efficiency],
        color: '#007bff',
      }],
      credits: {
        enabled: false,
      },
    });
  }, [efficiency]);

  return <div id="chiller-efficiency-chart" style={{ height: '400px', width: '100%' }} />;
};

const ChillerLandingPage = () => {
  const { id } = useParams(); // Get chiller ID from URL
  const navigate = useNavigate();
  const chillerIndex = parseInt(id) - 1; // Get index for chillerData
  const [selectedChiller, setSelectedChiller] = useState(chillerData[chillerIndex]);

  const handleChillerChange = (event) => {
    const newChillerIndex = parseInt(event.target.value);
    setSelectedChiller(chillerData[newChillerIndex]);
    navigate(`/chiller/${newChillerIndex + 1}`); // Update URL to reflect selected chiller
  };

  return (
    <div className="p-8 bg-white shadow-md rounded-xl space-y-8"> {/* Increased padding and spacing between sections */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{selectedChiller.name}</h2> {/* Increased font size and margin */}

      {/* Dropdown to select other chillers */}
      <label className="block mb-6">
        <span className="text-lg font-medium text-gray-700">Select Chiller:</span>
        <select
          value={chillerIndex}
          onChange={handleChillerChange}
          className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        >
          {chillerData.map((chiller, index) => (
            <option key={index} value={index}>{chiller.name}</option>
          ))}
        </select>
      </label>

      {/* Efficiency Chart */}
      <div className="my-8">
        <ChillerEfficiencyChart efficiency={selectedChiller.efficiency} />
      </div>

      {/* Card with detailed information about the selected chiller */}
      <div className="p-6 bg-gray-100 rounded-lg shadow-md space-y-4"> {/* Added padding and vertical space within the card */}
        <h3 className="text-xl font-semibold">Chiller Details</h3>
        <p className="mt-2"><strong>Status:</strong> <span className={selectedChiller.status === 'Operational' ? 'text-green-600' : selectedChiller.status === 'Maintenance' ? 'text-yellow-500' : 'text-red-600'}>{selectedChiller.status}</span></p>
        <p><strong>Cooling Capacity:</strong> {selectedChiller.description}</p>
        <p><strong>Efficiency:</strong> {selectedChiller.efficiency}%</p>
        <p><strong>Additional Details:</strong> {selectedChiller.additionalDetails}</p>
      </div>
    </div>
  );
};

export default ChillerLandingPage;