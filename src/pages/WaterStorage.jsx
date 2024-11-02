import React from 'react';
import '../pages/waterstorage.css';

const WaterStorage = () => {
  const coldWaterStatus = 'Running'; // Change to "Off" to see the gray-out effect
  const hotWaterStatus = 'Off';

  const getStatusStyle = (status) => {
    return status === 'Running'
      ? 'bg-green-100 text-green-600'
      : 'bg-gray-200 text-gray-500';
  };

  return (
    <div className="grid grid-cols-1 gap-6 mb-4">
      <div className="bg-white shadow-md rounded-xl p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Water Storage</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Cold Water Storage */}
          <div className="bg-blue-50 dark:bg-blue-900 rounded-lg shadow-md flex flex-col p-4">
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-semibold mb-2 text-center text-gray-800 dark:text-gray-200">
                Cold Water Storage
              </h4>
              <div className="tank-body-cold mb-4">
                {coldWaterStatus === 'Running' ? (
                  <div className="water-level cold-water"></div>
                ) : (
                  <div className="water-level off"></div>
                )}
              </div>
              <div className={`py-1 px-3 rounded-full ${getStatusStyle(coldWaterStatus)}`}>
                {coldWaterStatus === 'Running' ? 'Status: Running' : 'Status: Off'}
              </div>
            </div>
            <div className="info-container mt-4 grid grid-cols-1 gap-2">
              <div className="info-item">
                <span className="info-label">Charging Energy:</span>
                <span className="info-value">0 kWh</span>
              </div>
              <div className="info-item">
                <span className="info-label">Discharging Energy:</span>
                <span className="info-value">0 kWh</span>
              </div>
              <div className="info-item">
                <span className="info-label">Stored Water Temp:</span>
                <span className="info-value">7°C</span>
              </div>
            </div>
          </div>

          {/* Hot Water Storage */}
          <div className="bg-red-50 dark:bg-red-900 rounded-lg shadow-md flex flex-col p-4">
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-semibold mb-2 text-center text-gray-800 dark:text-gray-200">
                Hot Water Storage
              </h4>
              <div className="tank-body-hot mb-4">
                {hotWaterStatus === 'Running' ? (
                  <div className="water-level hot-water"></div>
                ) : (
                  <div className="water-level off"></div>
                )}
              </div>
              <div className={`py-1 px-3 rounded-full ${getStatusStyle(hotWaterStatus)}`}>
                {hotWaterStatus === 'Running' ? 'Status: Running' : 'Status: Off'}
              </div>
            </div>
            <div className="info-container mt-4 grid grid-cols-1 gap-2">
              <div className="info-item">
                <span className="info-label">Charging Energy:</span>
                <span className="info-value">0 kWh</span>
              </div>
              <div className="info-item">
                <span className="info-label">Discharging Energy:</span>
                <span className="info-value">0 kWh</span>
              </div>
              <div className="info-item">
                <span className="info-label">Stored Water Temp:</span>
                <span className="info-value">35°C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterStorage;
