import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';

// Sample chiller data with COP values over time
const chillerData = [
  {
    name: 'Chiller 1',
    status: 'Operational',
    description: '200kW',
    efficiency: 85,
    copData: { '1h': 4.2, '6h': 4.0, '12h': 4.1, '24h': 4.3 },
    additionalDetails: 'Main cooling system chiller with high efficiency.',
  },
  {
    name: 'Chiller 2',
    status: 'Maintenance',
    description: '150kW',
    efficiency: 75,
    copData: { '1h': 3.8, '6h': 3.7, '12h': 3.9, '24h': 4.0 },
    additionalDetails: 'Scheduled for maintenance.',
  },
  {
    name: 'Chiller 3',
    status: 'Faulty',
    description: '100kW',
    efficiency: 50,
    copData: { '1h': 2.5, '6h': 2.7, '12h': 2.8, '24h': 3.0 },
    additionalDetails: 'Currently out of service.',
  },
  {
    name: 'Chiller 4',
    status: 'Operational',
    description: '250kW',
    efficiency: 90,
    copData: { '1h': 4.5, '6h': 4.6, '12h': 4.7, '24h': 4.8 },
    additionalDetails: 'Ideal for large cooling requirements.',
  },
];

const ChillerEfficiencyChart = ({ chiller }) => {
  useEffect(() => {
    Highcharts.chart(`chiller-efficiency-chart-${chiller.name}`, {
      chart: {
        type: 'line',
      },
      title: {
        text: `${chiller.name} - COP over Time Intervals`,
      },
      xAxis: {
        categories: Object.keys(chiller.copData), // Time intervals (1h, 6h, 12h, 24h)
        title: {
          text: 'Time Interval',
        },
      },
      yAxis: {
        title: {
          text: 'COP',
        },
      },
      series: [
        {
          name: chiller.name,
          data: Object.values(chiller.copData), // COP values for each interval
          color: '#007bff',
        },
      ],
      credits: {
        enabled: false,
      },
    });
  }, [chiller]);

  return <div id={`chiller-efficiency-chart-${chiller.name}`} style={{ height: '300px', width: '100%' }} />;
};

const ChillerComparisonPage = () => {
  const [selectedChiller1, setSelectedChiller1] = useState(chillerData[0]);
  const [selectedChiller2, setSelectedChiller2] = useState(chillerData[1]);
  const [timeInterval, setTimeInterval] = useState('1h');

  const handleChillerChange = (index, setChiller) => {
    setChiller(chillerData[index]);
  };

  const handleTimeChange = (event) => {
    setTimeInterval(event.target.value);
  };

  return (
    <div className="p-8 bg-white shadow-md rounded-xl space-y-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Chiller Comparison</h2>
      <div className="flex space-x-8">
        {/* Chiller 1 Details */}
        <div className="flex-1 p-6 bg-gray-100 rounded-lg shadow-md space-y-4">
          <h3 className="text-xl font-semibold">{selectedChiller1.name}</h3>
          <label className="block mb-6">
            <span className="text-lg font-medium text-gray-700">Select Chiller 1:</span>
            <select
              value={chillerData.indexOf(selectedChiller1)}
              onChange={(e) => handleChillerChange(e.target.value, setSelectedChiller1)}
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            >
              {chillerData.map((chiller, index) => (
                <option key={index} value={index}>{chiller.name}</option>
              ))}
            </select>
          </label>
          <p><strong>Status:</strong> {selectedChiller1.status}</p>
          <p><strong>Cooling Capacity:</strong> {selectedChiller1.description}</p>
          <p><strong>Efficiency:</strong> {selectedChiller1.efficiency}%</p>
          <p><strong>Additional Details:</strong> {selectedChiller1.additionalDetails}</p>
          <ChillerEfficiencyChart chiller={selectedChiller1} timeInterval={timeInterval} />
        </div>

        {/* Chiller 2 Details */}
        <div className="flex-1 p-6 bg-gray-100 rounded-lg shadow-md space-y-4">
          <h3 className="text-xl font-semibold">{selectedChiller2.name}</h3>
          <label className="block mb-6">
            <span className="text-lg font-medium text-gray-700">Select Chiller 2:</span>
            <select
              value={chillerData.indexOf(selectedChiller2)}
              onChange={(e) => handleChillerChange(e.target.value, setSelectedChiller2)}
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            >
              {chillerData.map((chiller, index) => (
                <option key={index} value={index}>{chiller.name}</option>
              ))}
            </select>
          </label>
          <p><strong>Status:</strong> {selectedChiller2.status}</p>
          <p><strong>Cooling Capacity:</strong> {selectedChiller2.description}</p>
          <p><strong>Efficiency:</strong> {selectedChiller2.efficiency}%</p>
          <p><strong>Additional Details:</strong> {selectedChiller2.additionalDetails}</p>
          <ChillerEfficiencyChart chiller={selectedChiller2} timeInterval={timeInterval} />
        </div>
      </div>
    </div>
  );
};

export default ChillerComparisonPage;