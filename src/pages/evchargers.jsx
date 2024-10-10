import React from 'react';
import '../pages/evcharger.css';


const EVchargers = () => {
  return (
<div className="grid grid-cols-1 gap-4 mb-4">
  {/* Big Card for the entire EV Chargers section */}
  <div className="bg-white dark:bg-secondary-dark-bg rounded-xl shadow-md p-4">
    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-6">EV Chargers</h3>

    {/* Common Summary Card inside the big card */}
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="summary-card p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
        <h4 className="font-semibold text-gray-800 dark:text-gray-200">No. of Chargers Used</h4>
        <p className="text-3xl font-bold text-green-600">00</p>
      </div>
      <div className="summary-card p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Total Sessions Today</h4>
        <p className="text-3xl font-bold text-blue-600">00</p>
      </div>
      <div className="summary-card p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Total Energy Used</h4>
        <p className="text-3xl font-bold text-red-600">00 kWh</p>
      </div>
    </div>

    {/* EV Chargers Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }, (_, index) => (
        <div key={index} className="ev-charger-card p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex">
          {/* CSS-based detailed EV charging station */}
          <div className="w-1/2 flex justify-center items-center">
            <div className="charging-station">
              <div className="station-screen"></div>
              <div className="station-base"></div>
              <div className="station-cable"></div>
            </div>
          </div>

          {/* Car Visual */}
          <div className="w-1/2 flex flex-col justify-center items-center text-center">
            <div className={`car-visual ${index % 2 === 0 ? 'connected' : 'disconnected'}`}>
              <div className="car-body">
                <div className="car-window"></div>
                <div className="car-wheels">
                  <div className="wheel front-wheel"></div>
                  <div className="wheel back-wheel"></div>
                </div>
              </div>
            </div> {/* Car body visual */}
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">EV Charger {index + 1}</h3>
            <p className="text-gray-600 dark:text-gray-400 whitespace-nowrap">
              Location: Block E<br />
              Energy Consumed: 50&nbsp;kWh
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  )
}

export default EVchargers