import React from 'react';
import { useNavigate } from 'react-router-dom';
import chiller from '../pages/chiller.jpg';

const chillerData = [
  { name: 'Chiller 1', status: 'Operational', cop: '4.0', condenserFlowrate: '100 m³/h', evaporatorFlowrate: '80 m³/h', image: chiller },
  { name: 'Chiller 2', status: 'Maintenance', cop: '3.5', condenserFlowrate: '90 m³/h', evaporatorFlowrate: '70 m³/h', image: chiller },
  { name: 'Chiller 3', status: 'Faulty', cop: '3.0', condenserFlowrate: '85 m³/h', evaporatorFlowrate: '65 m³/h', image: chiller },
  { name: 'Chiller 4', status: 'Operational', cop: '4.2', condenserFlowrate: '105 m³/h', evaporatorFlowrate: '85 m³/h', image: chiller },
  { name: 'Chiller 5', status: 'Operational', cop: '4.5', condenserFlowrate: '110 m³/h', evaporatorFlowrate: '90 m³/h', image: chiller },
  { name: 'Chiller 6', status: 'Maintenance', cop: '3.8', condenserFlowrate: '95 m³/h', evaporatorFlowrate: '75 m³/h', image: chiller },
];

const ChillerOverview = () => {
  const navigate = useNavigate();

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Operational':
        return 'bg-green-100 text-green-600';
      case 'Maintenance':
        return 'bg-yellow-100 text-yellow-600';
      case 'Faulty':
        return 'bg-red-100 text-red-600';
      default:
        return '';
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 mb-4">
      <div className="bg-white shadow-md rounded-xl p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-6">Chillers</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {chillerData.map((chiller, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-lg rounded-lg p-4 flex flex-col justify-between hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center">
                <img
                  src={chiller.image}
                  alt={`${chiller.name} Image`}
                  className="w-full h-40 object-cover rounded-t-lg mb-3"
                />
                <div className={`py-1 px-3 rounded-full ${getStatusStyle(chiller.status)}`}>
                  {chiller.status}
                </div>
                <h3 className="text-xl font-semibold mt-2 mb-1 text-gray-800">{chiller.name}</h3>
              </div>

              <div className="mt-4 mb-2 bg-white rounded-lg p-3 shadow-inner w-full">
                <div className="grid grid-cols-1 gap-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span className="font-medium">COP:</span>
                    <span>{chiller.cop}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Condenser Flowrate:</span>
                    <span>{chiller.condenserFlowrate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Evaporator Flowrate:</span>
                    <span>{chiller.evaporatorFlowrate}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate(`/chiller/${index + 1}`)}
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-sm"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChillerOverview;