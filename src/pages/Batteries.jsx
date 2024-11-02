import React from 'react';
import '../pages/Batteries.css';
import { Link } from 'react-router-dom';

const Batteries = () => {
  return (
    <div className="battery-card bg-white dark:bg-secondary-dark-bg rounded-xl shadow-lg p-6">
      <div className="header flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">Batteries</h3>
      </div>

      {/* Four Partitions Inside One Big Card */}
      <div className="grid grid-cols-2 gap-6">
        
        {/* Battery Capacity Partition */}
        <div className="partition p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex flex-col">
          <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">IOE</h5>
          <div className="flex justify-between items-center">
            <div className="battery-box">
              <div className="battery-level" style={{ height: '70%' }}></div>
            </div>
            <div className="pl-4">
              <p className="text-xl font-bold text-teal-600">70%</p>
              <p className="text-gray-800 dark:text-gray-200">Total Charge: 8.24 kWh</p>
              <p className="text-gray-800 dark:text-gray-200">Discharge: 124.35 kWh</p>
              <p className="text-gray-800 dark:text-gray-200">Temp: 35°C</p>
              <p className="text-gray-800 dark:text-gray-200">Voltage: 48.5V</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="status-container flex items-center">
              <span className="status-icon bg-green-500 w-3 h-3 rounded-full mr-2"></span>
              <p className="text-sm text-gray-600 dark:text-gray-400">Status: Charging</p>
            </div>
          </div>
            <Link to="/control/ioebattery">
              <button className="mt-4 py-2 px-3 bg-green-500 text-white rounded-lg w-24">Control</button>
            </Link>        
          </div>

        {/* LTO Partition */}
        <div className="partition p-6 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md flex flex-col">
          <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">LTO</h5>
          <div className="flex justify-between items-center">
            <div className="lto-box">
              <div className="liquid-level lto-liquid" style={{ height: '55%' }}></div>
            </div>
            <div className="pl-4">
              <p className="text-xl font-bold text-teal-600">55%</p>
              <p className="text-gray-800 dark:text-gray-200">Charge: 5.61 kWh</p>
              <p className="text-gray-800 dark:text-gray-200">Discharge: 0.2 kW</p>
              <p className="text-gray-800 dark:text-gray-200">Cycle Life: 1,000</p>
              <p className="text-gray-800 dark:text-gray-200">Temp: 30°C</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="power-flow bg-gray-100 text-gray-600 dark:bg-gray-600 dark:text-gray-300 p-2 rounded-lg">
              <p className="text-sm">Power Flow: Grid → Battery</p>
            </div>
          </div>
          <Link to="/control/ltobattery">
            <button className="mt-4 py-2 px-3 bg-green-500 text-white rounded-lg w-24">Control</button>
          </Link>        </div>

        {/* Previous Cycle Partition */}
        <div className="partition p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex flex-col">
          <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Previous Cycle</h5>
          <div className="grid grid-cols-2 gap-4">
            <div className="cycle-info bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
              <h6 className="font-semibold text-gray-800 dark:text-gray-200">Charge Time:</h6>
              <p className="text-gray-600 dark:text-gray-400">2024-10-10 08:00 AM</p>
            </div>
            <div className="cycle-info bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
              <h6 className="font-semibold text-gray-800 dark:text-gray-200">Discharge Time:</h6>
              <p className="text-gray-600 dark:text-gray-400">2024-10-10 09:00 AM</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="alert bg-red-100 text-red-700 p-2 rounded-lg">
              <p className="text-sm">Alert: High Discharge Rate</p>
            </div>
          </div>
        </div>

        {/* UPS Partition */}
        <div className="partition p-6 bg-gray-300 dark:bg-gray-600 rounded-lg shadow-md flex flex-col">
          <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">UPS</h5>
          <div className="flex justify-between items-center">
            <div className="ups-box">
              <div className="liquid-level ups-liquid" style={{ height: '75%' }}></div>
            </div>
            <div className="pl-4">
              <p className="text-xl font-bold text-teal-600">75%</p>
              <p className="text-gray-800 dark:text-gray-200">Charge: 9.5 kWh</p>
              <p className="text-gray-800 dark:text-gray-200">Backup: 4 hours</p>
              <p className="text-gray-800 dark:text-gray-200">Voltage: 230V</p>
              <p className="text-gray-800 dark:text-gray-200">Temp: 32°C</p>
            </div> 
          </div>
          <div className="mt-4">
            <div className="status-container flex items-center">
              <span className="status-icon bg-yellow-500 w-3 h-3 rounded-full mr-2"></span>
              <p className="text-sm text-gray-600 dark:text-gray-400">Status: Idle</p>
            </div>
          </div>
          <Link to="/control/upsbattery">
            <button className="mt-4 py-2 px-3 bg-green-500 text-white rounded-lg w-24">Control</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Batteries;