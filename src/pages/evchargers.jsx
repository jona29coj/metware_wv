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
    { capacity: '3.3 KW', location: 'Pond area', energyConsumed: '0 kWh', status: 'Active' },
    { capacity: '3.3 KW', location: 'Pond area', energyConsumed: '0 kWh', status: 'Idle' },
    { capacity: '7 KW', location: 'Pond area', energyConsumed: '0 kWh', status: 'Unavailable' },
    { capacity: '7 KW', location: 'MLCP 3rd floor', energyConsumed: '0 kWh', status: 'Active' },
    { capacity: '7 KW', location: 'Pond area', energyConsumed: '0 kWh', status: 'Idle' },
    { capacity: '7 KW', location: 'Pond area', energyConsumed: '0 kWh', status: 'Active' },
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
      {/* Big Card for the entire EV Chargers section */}
      <div className="bg-white shadow-md rounded-xl p-6 relative">
        <h3 className="text-lg font-bold text-gray-800 mb-6">EV Chargers</h3>

        {/* Date Picker in the Top Right Corner */}
        <input
          type="date"
          className="absolute top-6 right-6 border border-gray-300 rounded px-2 py-1 text-sm"
          defaultValue={new Date().toISOString().split('T')[0]} // Sets the default date to today
        />

        {/* Mini Cards for Main Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {mainStats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-4 flex flex-col items-center"
            >
              <h4 className="text-xl font-bold">{stat.title}</h4>
              <p className="text-2xl font-semibold text-gray-700">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* EV Charger Station Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {evChargerStats.map((charger, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-4 flex flex-col items-center relative"
            >
              {/* Status Indicator */}
              <div className="absolute top-2 right-2 flex items-center">
                <span
                  className={`w-3 h-3 rounded-full ${getStatusColor(charger.status)} mr-2`}
                ></span>
                <span className="text-sm font-medium text-gray-600">{charger.status}</span>
              </div>

              {/* Image Box */}
              <div className="w-24 h-24 mb-3 border border-gray-300 bg-white rounded-full overflow-hidden flex justify-center items-center">
                <img
                  src={evcharger} // Replace with the correct path to your image
                  alt="EV Charger"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Capacity */}
              <h4 className="text-xl font-semibold mt-1 text-gray-800">Capacity: {charger.capacity}</h4>

              {/* Location and Energy Consumed */}
              <div className="mt-2 bg-white rounded-lg p-2 w-full">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Location:</span> {charger.location}
                </p>
                <p className="text-sm text-gray-600">
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