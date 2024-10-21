import React from 'react';
import { useNavigate } from 'react-router-dom';

const chillerData = [
  { name: 'Chiller 1', status: 'Operational', description: 'Cooling capacity: 200kW' },
  { name: 'Chiller 2', status: 'Maintenance', description: 'Cooling capacity: 150kW' },
  { name: 'Chiller 3', status: 'Faulty', description: 'Cooling capacity: 100kW' },
  { name: 'Chiller 4', status: 'Operational', description: 'Cooling capacity: 250kW' },
  { name: 'Chiller 5', status: 'Operational', description: 'Cooling capacity: 300kW' },
  { name: 'Chiller 6', status: 'Maintenance', description: 'Cooling capacity: 175kW' },
];

const ChillerSVG = () => (
  <svg
    width="120"
    height="160"
    viewBox="0 0 150 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Chiller body */}
    <rect x="20" y="40" width="110" height="140" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="3" />

    {/* Chiller top */}
    <rect x="25" y="35" width="100" height="10" fill="#a3c1e1" />
    
    {/* Pipes */}
    <rect x="10" y="190" width="130" height="10" fill="#1e3a8a" />
    <rect x="30" y="140" width="5" height="25" fill="#1e3a8a" />
    <rect x="115" y="140" width="5" height="25" fill="#1e3a8a" />
    
    {/* Enhanced details */}
    <circle cx="40" cy="190" r="5" fill="#fbbf24" />
    <circle cx="110" cy="190" r="5" fill="#fbbf24" />
    
    {/* Centered industrial fins for heat exchange */}
    <g fill="#d1fae5">
      <rect x="44" y="60" width="5" height="50" />
      <rect x="54" y="60" width="5" height="50" />
      <rect x="64" y="60" width="5" height="50" />
      <rect x="74" y="60" width="5" height="50" />
      <rect x="84" y="60" width="5" height="50" />
      <rect x="94" y="60" width="5" height="50" />
    </g>
    
    {/* Add a base */}
    <rect x="20" y="180" width="110" height="10" fill="#1e3a8a" />
  </svg>
);

const ChillerOverview = () => {
  const navigate = useNavigate();

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Operational':
        return 'text-green-600';
      case 'Maintenance':
        return 'text-yellow-500';
      case 'Faulty':
        return 'text-red-600';
      default:
        return '';
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 mb-4">
      {/* Big Card for the entire Chillers section */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-6">Chillers</h3>

        {/* Chillers Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {chillerData.map((chiller, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-lg rounded-lg p-4 flex flex-col justify-between"
            >
              <div className="flex flex-col items-center">
                <ChillerSVG />
                <h3 className="text-xl font-bold mt-2 mb-1 text-center">{chiller.name}</h3>
                <p className="mb-1 text-center">
                  Status: <span className={getStatusStyle(chiller.status)}>{chiller.status}</span>
                </p>
                <p className="text-center text-sm text-gray-600">{chiller.description}</p>
              </div>
              <button
                onClick={() => navigate(`/chiller/${index + 1}`)}
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-sm" >
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
