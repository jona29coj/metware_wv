import React from 'react';
import '../pages/Chiller.css';

const Chiller = () => {
  return (
    <div className="grid grid-cols-1 gap-4 mb-4">
      {/* Main Container with Gradient Background */}
      <div className="bg-white dark:bg-secondary-dark-bg rounded-xl shadow-md p-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-8">Chillers</h3>
        
        {/* Common Mini Cards with Different Designs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Mini Card 1 */}
          <div className="bg-gradient-to-r from-green-300 to-green-400 rounded-lg p-4 shadow-md">
            <h4 className="text-md font-semibold text-gray-800">Cooling Efficiency</h4>
            <p className="text-gray-600 text-sm">
              Average Cooling Efficiency: <span className="font-bold">{Math.floor(Math.random() * (100 - 50 + 1)) + 50}%</span>
            </p>
          </div>

          {/* Mini Card 2 */}
          <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-lg p-4 shadow-md">
            <h4 className="text-md font-semibold text-gray-800">Chiller Status</h4>
            <p className="text-gray-600 text-sm">
              Total Chillers: <span className="font-bold">8</span><br />
              Operational Status: <span className="font-bold">All Operational</span>
            </p>
          </div>

          {/* Mini Card 3 */}
          <div className="bg-gradient-to-r from-red-300 to-red-400 rounded-lg p-4 shadow-md">
            <h4 className="text-md font-semibold text-gray-800">Energy Consumption</h4>
            <p className="text-gray-600 text-sm">
              Total Energy Used: <span className="font-bold">1500 kWh</span><br />
              Average Energy Cost: <span className="font-bold">$300</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }, (_, index) => (
            <div key={index} className="chiller-card relative p-4 border border-gray-300 rounded-lg flex flex-col items-center shadow-lg bg-white transition-transform duration-300 hover:scale-105">
              {/* Chiller Visual Representation */}
              <div className="chiller-placeholder h-20 w-20 flex items-center justify-center bg-blue-100 rounded-full shadow-sm">
                <div className="cooling-efficiency text-xs">Cooling Efficiency: {Math.floor(Math.random() * (100 - 50 + 1)) + 50}%</div>
              </div>
              {/* Pipes */}
              <div className="pipe inlet"></div>
              <div className="pipe outlet"></div>
              {/* Chiller Label */}
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-center mt-2">Chiller {index + 1}</h4>
              {/* Relevant Information */}
              <p className="text-gray-600 text-sm mt-1 text-center">
                Temperature: {Math.floor(Math.random() * (15 - 5 + 1)) + 5} °C<br />
                Pressure: {Math.floor(Math.random() * (120 - 80 + 1)) + 80} kPa
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chiller;
