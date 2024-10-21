import React from 'react';
import { FaSnowflake, FaTemperatureLow, FaFan, FaTachometerAlt, FaThermometerHalf,FaCalendarAlt } from 'react-icons/fa';

const HvacSection = () => {
  return (
    <div className="hvac-section bg-gray-100 min-h-screen p-8">
      {/* Page Title */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">HVAC Monitoring Dashboard</h1>
        <p className="text-gray-600 mt-2">Monitor and manage the performance of your cooling and HVAC systems</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Cooling System Overview */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaSnowflake className="text-blue-600 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold">Cooling System Overview</h2>
          </div>
          <p className="text-gray-700">
            <strong>System Name:</strong> Central HVAC Unit<br />
            <strong>Location:</strong> Main Facility<br />
            <strong>Current Status:</strong> <span className="text-green-500 font-semibold">Operational</span><br />
            <strong>Last Maintenance:</strong> September 15, 2024
          </p>
        </div>

        {/* Temperature & Humidity Metrics */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaTemperatureLow className="text-blue-400 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold">Temperature & Humidity</h2>
          </div>
          <div className="text-gray-700 space-y-2">
            <p><strong>Current Temperature:</strong> 22°C</p>
            <p><strong>Target Temperature:</strong> 20°C</p>
            <p><strong>Humidity Level:</strong> 45%</p>
          </div>
          {/* Progress Bar Example */}
          <div className="mt-4">
            <p className="text-gray-600 text-sm">Temperature Control</p>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
              <div className="bg-blue-500 h-3 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Fan Speed & Air Flow Metrics */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaFan className="text-green-600 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold">Fan Speed & Air Flow</h2>
          </div>
          <div className="text-gray-700 space-y-2">
            <p><strong>Fan Speed:</strong> 1200 RPM</p>
            <p><strong>Air Flow Rate:</strong> 450 CFM</p>
            <p><strong>Operational Efficiency:</strong> 90%</p>
          </div>
          {/* Progress Bar Example */}
          <div className="mt-4">
            <p className="text-gray-600 text-sm">Air Flow Control</p>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
              <div className="bg-green-500 h-3 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>

        {/* Cooling Efficiency Metrics */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaTachometerAlt className="text-red-500 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold">Cooling Efficiency</h2>
          </div>
          <div className="text-gray-700 space-y-2">
            <p><strong>Current Efficiency:</strong> 85%</p>
            <p><strong>Target Efficiency:</strong> 90%</p>
            <p><strong>Energy Savings:</strong> 15 kWh/day</p>
          </div>
          {/* Progress Circle Example */}
          <div className="flex justify-center mt-6">
            <div className="w-24 h-24 bg-gray-100 rounded-full border-t-4 border-red-500 flex items-center justify-center">
              <span className="text-lg font-semibold text-red-500">85%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Temperature Sensors Status */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaThermometerHalf className="text-purple-500 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold">Temperature Sensors</h2>
          </div>
          <div className="text-gray-700 space-y-2">
            <p><strong>Sensor 1:</strong> 22°C - <span className="text-green-500 font-semibold">Operational</span></p>
            <p><strong>Sensor 2:</strong> 23°C - <span className="text-green-500 font-semibold">Operational</span></p>
            <p><strong>Sensor 3:</strong> 20°C - <span className="text-yellow-500 font-semibold">Warning</span></p>
          </div>
        </div>

        {/* Maintenance Schedule */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaCalendarAlt className="text-yellow-600 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold">Maintenance Schedule</h2>
          </div>
          <div className="text-gray-700 space-y-2">
            <p><strong>Next Scheduled Maintenance:</strong> November 10, 2024</p>
            <p><strong>Last Service:</strong> September 15, 2024</p>
            <p><strong>Maintenance Status:</strong> <span className="text-green-500 font-semibold">Up-to-date</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HvacSection;
