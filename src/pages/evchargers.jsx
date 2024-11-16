import React from 'react';
import evcharger from '../pages/ev.png';

// EV Charger Overview Component
const EVChargerOverview = () => {
  // Data for the main statistics
  const mainStats = [
    { title: 'No. of chargers used', value: '00' },
    { title: 'Total Sessions Today', value: '00' },
    { title: 'Total Energy Used', value: '0 kWh' },
  ];

  // Data for EV Charger stations
  const evChargerStats = [
    { location: 'Pond area', capacity: '3.3 KW', energyConsumed: '0 kWh', status: 'Active' },
    { location: 'MLCP 3rd floor', capacity: '3.3 KW', energyConsumed: '0 kWh', status: 'Idle' },
    { location: 'Pond area', capacity: '7 KW', energyConsumed: '0 kWh', status: 'Unavailable' },
    { location: 'MLCP 3rd floor', capacity: '7 KW', energyConsumed: '0 kWh', status: 'Active' },
    { location: 'Pond area', capacity: '7 KW', energyConsumed: '0 kWh', status: 'Idle' },
    { location: 'MLCP 3rd floor', capacity: '7 KW', energyConsumed: '0 kWh', status: 'Active' },
  ];

  // Helper function to determine color based on status
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500';
      case 'Idle':
        return 'bg-yellow-500';
      case 'Unavailable':
        return 'bg-red-500';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 mb-4">
      {/* Outer Card */}
      <div className="bg-white shadow-lg rounded-lg p-8">
        <div className="flex justify-between items-center mb-4" style={{ zIndex: 1 }}>
          <h3 className="text-lg font-bold text-gray-800">EV Chargers</h3>
          <input
            type="date"
            className="border border-gray-300 rounded px-2 py-1 text-sm"
            style={{ zIndex: 1 }}
            defaultValue={new Date().toISOString().split('T')[0]} // Sets the default date to today 
            />
        </div>
        {/* Main Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {mainStats.map((stat, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 flex flex-col items-center">
              <h4 className="text-lg font-semibold text-gray-700">{stat.title}</h4>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* EV Charger Station Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {evChargerStats.map((charger, index) => (
            <div key={index} className="bg-gray-50 rounded-xl shadow-sm p-5 flex flex-col items-center relative">
              {/* Status Indicator */}
              <div className="absolute top-2 right-2 flex items-center">
                <span className={`w-3 h-3 rounded-full ${getStatusColor(charger.status)} mr-2`}></span>
                <span className="text-sm font-medium text-gray-600">{charger.status}</span>
              </div>

              {/* Image and Capacity Container */}
              <div className="flex flex-col items-center mb-4">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300 bg-white flex items-center justify-center">
                  <img src={evcharger} alt="EV Charger" className="w-full h-full object-contain" />
                </div>
                <p className="text-sm font-semibold text-gray-700 mt-2">Capacity: {charger.capacity}</p>
              </div>

              {/* Energy Consumed */}
              <div className="w-full bg-white rounded-lg shadow-inner p-3 mt-2">
                <p className="text-m text-gray-600 font-bold">
                  <span className="font-medium">Location:</span> {charger.location}
                </p>                
                <p className="text-m text-gray-600">
                  <span className="font-medium">Energy Consumed:</span> {charger.energyConsumed}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EVChargerOverview;
