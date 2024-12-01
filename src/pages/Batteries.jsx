import React from "react";
import { Link } from "react-router-dom";

const Batteries = () => {
  return (
    <div className="bg-white dark:bg-secondary-dark-bg rounded-xl shadow-lg p-8">
      {/* Title */}
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
          Battery Storage
        </h3>
      </div>

      {/* Battery Row */}
      <div className="flex flex-wrap justify-between space-x-6">
        {/* IOE Battery */}
        <div className="flex flex-col flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6 max-w-[32%]">
          {/* Top Section */}
          <div className="flex space-x-6 items-start">
            {/* Battery Visual */}
            <div className="flex-none">
              <div className="w-28 h-40 border border-gray-300 rounded bg-gray-200 relative">
                <div
                  className="absolute bottom-0 left-0 right-0 bg-green-500"
                  style={{ height: "70%" }}
                ></div>
              </div>
            </div>

            {/* Battery Details */}
            <div className="flex flex-col flex-grow space-y-3">
              <h5 className="text-center font-bold text-lg text-gray-800 dark:text-gray-200">
                IOE Battery
              </h5>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <p>
                  <span className="font-semibold">Charge:</span> 8.24 kWh
                </p>
                <p>
                  <span className="font-semibold">Discharge:</span> 124.35 kWh
                </p>
                <p>
                  <span className="font-semibold">Temperature:</span> 35°C
                </p>
                <p>
                  <span className="font-semibold">Voltage:</span> 48.5V
                </p>
              </div>
              {/* Controls */}
              <div className="flex justify-between items-center mt-3">
                <span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="bg-green-500 w-3 h-3 rounded-full mr-2"></span>
                  Charging
                </span>
                <Link to="/control/ioebattery">
                  <button className="py-2 px-4 bg-teal-600 text-white rounded-lg text-xs">
                    Control
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Previous Cycle */}
          <div className="text-sm bg-gray-100 dark:bg-gray-700 p-4 rounded-md space-y-1">
            <p className="text-center font-medium text-gray-800 dark:text-gray-200 mb-2">
              Previous Cycle
            </p>
            <p>Charge Time: 08:00 AM</p>
            <p>Discharge Time: 09:00 AM</p>
            <p className="text-red-600">High Discharge Rate</p>
          </div>
        </div>

        {/* LTO Battery */}
        <div className="flex flex-col flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6 max-w-[32%]">
          {/* Top Section */}
          <div className="flex space-x-6 items-start">
            {/* Battery Visual */}
            <div className="flex-none">
              <div className="w-28 h-40 border border-gray-300 rounded bg-gray-200 relative">
                <div
                  className="absolute bottom-0 left-0 right-0 bg-blue-600"
                  style={{ height: "55%" }}
                ></div>
              </div>
            </div>

            {/* Battery Details */}
            <div className="flex flex-col flex-grow space-y-3">
              <h5 className="text-center font-bold text-lg text-gray-800 dark:text-gray-200">
                LTO Battery
              </h5>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <p>
                  <span className="font-semibold">Charge:</span> 5.61 kWh
                </p>
                <p>
                  <span className="font-semibold">Discharge:</span> 0.2 kWh
                </p>
                <p>
                  <span className="font-semibold">Cycle Life:</span> 1,000
                </p>
                <p>
                  <span className="font-semibold">Temperature:</span> 30°C
                </p>
              </div>
              {/* Controls */}
              <div className="flex justify-between items-center mt-3">
                <span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="bg-teal-600 w-3 h-3 rounded-full mr-2"></span>
                  Charging
                </span>
                <Link to="/control/ltobattery">
                  <button className="py-2 px-4 bg-teal-600 text-white rounded-lg text-xs">
                    Control
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Previous Cycle */}
          <div className="text-sm bg-gray-100 dark:bg-gray-700 p-4 rounded-md space-y-1">
            <p className="text-center font-medium text-gray-800 dark:text-gray-200 mb-2">
              Previous Cycle
            </p>
            <p>Charge Time: 06:00 AM</p>
            <p>Discharge Time: 07:00 AM</p>
            <p className="text-green-600">Optimal Performance</p>
          </div>
        </div>

        {/* UPS Battery */}
        <div className="flex flex-col flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6 max-w-[32%]">
          {/* Top Section */}
          <div className="flex space-x-6 items-start">
            {/* Battery Visual */}
            <div className="flex-none">
              <div className="w-28 h-40 border border-gray-300 rounded bg-gray-200 relative">
                <div
                  className="absolute bottom-0 left-0 right-0 bg-orange-500"
                  style={{ height: "75%" }}
                ></div>
              </div>
            </div>

            {/* Battery Details */}
            <div className="flex flex-col flex-grow space-y-3">
              <h5 className="text-center font-bold text-lg text-gray-800 dark:text-gray-200">
                UPS Battery
              </h5>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <p>
                  <span className="font-semibold">Charge:</span> 9.5 kWh
                </p>
                <p>
                  <span className="font-semibold">Backup:</span> 4 hours
                </p>
                <p>
                  <span className="font-semibold">Voltage:</span> 230V
                </p>
                <p>
                  <span className="font-semibold">Temperature:</span> 32°C
                </p>
              </div>
              {/* Controls */}
              <div className="flex justify-between items-center mt-3">
                <span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="bg-yellow-500 w-3 h-3 rounded-full mr-2"></span>
                  Idle
                </span>
                <Link to="/control/upsbattery">
                  <button className="py-2 px-4 bg-teal-600 text-white rounded-lg text-xs">
                    Control
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Previous Cycle */}
          <div className="text-sm bg-gray-100 dark:bg-gray-700 p-4 rounded-md space-y-1">
            <p className="text-center font-medium text-gray-800 dark:text-gray-200 mb-2">
              Previous Cycle
            </p>
            <p>Charge Time: 07:00 AM</p>
            <p>Discharge Time: 10:00 AM</p>
            <p className="text-yellow-600">Moderate Usage</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Batteries;
