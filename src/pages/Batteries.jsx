import React from "react";
import { Link } from "react-router-dom";

const Batteries = () => {
  return (
    <div className="bg-white dark:bg-secondary-dark-bg rounded-xl shadow-lg p-6 space-y-8">
      {/* Title */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Battery Storage
        </h3>
      </div>

      {/* Battery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* IOE Battery */}
        <div className="flex flex-col bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-4 space-y-4">
          <h5 className="text-center font-bold text-gray-800 dark:text-gray-200">
            IOE Battery
          </h5>
          {/* Battery Visual */}
          <div className="flex justify-center">
            <div className="w-16 h-24 border border-gray-300 rounded-sm bg-gray-200 relative">
              <div
                className="absolute bottom-0 left-0 right-0 bg-green-500"
                style={{ height: "70%" }}
              ></div>
            </div>
          </div>
          {/* Battery Stats */}
          <div className="text-sm space-y-1 text-center">
            <p>Charge: 8.24 kWh</p>
            <p>Discharge: 124.35 kWh</p>
            <p>Temp: 35°C</p>
            <p>Voltage: 48.5V</p>
          </div>
          <p className="text-center text-teal-600 text-lg font-semibold">
            70% Charge
          </p>
          <div className="flex justify-between items-center text-sm mt-2">
            <span className="flex items-center text-gray-600 dark:text-gray-400">
              <span className="bg-green-500 w-3 h-3 rounded-full mr-2"></span>
              Status: Charging
            </span>
            <Link to="/control/ioebattery">
              <button className="py-2 px-4 bg-green-500 text-white rounded-lg text-xs">
                Control
              </button>
            </Link>
          </div>
        </div>

        {/* LTO Battery */}
        <div className="flex flex-col bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-4 space-y-4">
          <h5 className="text-center font-bold text-gray-800 dark:text-gray-200">
            LTO Battery
          </h5>
          {/* Battery Visual */}
          <div className="flex justify-center">
            <div className="w-16 h-24 border border-gray-300 rounded-sm bg-gray-200 relative">
              <div
                className="absolute bottom-0 left-0 right-0 bg-teal-600"
                style={{ height: "55%" }}
              ></div>
            </div>
          </div>
          {/* Battery Stats */}
          <div className="text-sm space-y-1 text-center">
            <p>Charge: 5.61 kWh</p>
            <p>Discharge: 0.2 kWh</p>
            <p>Cycle Life: 1,000</p>
            <p>Temp: 30°C</p>
          </div>
          <p className="text-center text-teal-600 text-lg font-semibold">
            55% Charge
          </p>
          <div className="flex justify-between items-center text-sm mt-2">
            <span className="flex items-center text-gray-600 dark:text-gray-400">
              <span className="bg-teal-600 w-3 h-3 rounded-full mr-2"></span>
              Status: Charging
            </span>
            <Link to="/control/ltobattery">
              <button className="py-2 px-4 bg-teal-600 text-white rounded-lg text-xs">
                Control
              </button>
            </Link>
          </div>
        </div>

        {/* UPS Battery */}
        <div className="flex flex-col bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-4 space-y-4">
          <h5 className="text-center font-bold text-gray-800 dark:text-gray-200">
            UPS Battery
          </h5>
          {/* Battery Visual */}
          <div className="flex justify-center">
            <div className="w-16 h-24 border border-gray-300 rounded-sm bg-gray-200 relative">
              <div
                className="absolute bottom-0 left-0 right-0 bg-orange-500"
                style={{ height: "75%" }}
              ></div>
            </div>
          </div>
          {/* Battery Stats */}
          <div className="text-sm space-y-1 text-center">
            <p>Charge: 9.5 kWh</p>
            <p>Backup: 4 hours</p>
            <p>Voltage: 230V</p>
            <p>Temp: 32°C</p>
          </div>
          <p className="text-center text-teal-600 text-lg font-semibold">
            75% Charge
          </p>
          <div className="flex justify-between items-center text-sm mt-2">
            <span className="flex items-center text-gray-600 dark:text-gray-400">
              <span className="bg-yellow-500 w-3 h-3 rounded-full mr-2"></span>
              Status: Idle
            </span>
            <Link to="/control/upsbattery">
              <button className="py-2 px-4 bg-yellow-500 text-white rounded-lg text-xs">
                Control
              </button>
            </Link>
          </div>
        </div>

        {/* Previous Cycle */}
        <div className="flex flex-col bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-4 space-y-4">
          <h5 className="text-center font-bold text-gray-800 dark:text-gray-200">
            Previous Cycle
          </h5>
          {/* Cycle Information */}
          <div className="text-sm space-y-2 text-center">
            <p>Charge Time: 08:00 AM</p>
            <p>Discharge Time: 09:00 AM</p>
            <p className="text-red-600">High Discharge Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Batteries;
