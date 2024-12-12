import React from "react";
import { Link } from "react-router-dom";
import ioe from "../pages/IOE2.png";
import lithium from "../pages/Li.png";
import ups from "../pages/UPS3.png";

const Batteries = () => {
  return (
    <div className="relative bg-white dark:bg-secondary-dark-bg rounded-xl opacity-50 shadow-lg p-8 group">
      {/* Hover Tooltip for Entire Section */}
      <div className="absolute inset-0 flex justify-center items-center group-hover:opacity-100 opacity-0 transition-opacity">
        <p className="text-sm bg-gray-900 text-white py-2 px-4 rounded-lg shadow-lg">
          Section not available for this client
        </p>
      </div>

      {/* Title */}
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
          Battery Storage
        </h3>
      </div>

      {/* Battery Row */}
      <div className="flex flex-wrap justify-between space-x-6">
        {/* Battery Card */}
        {[
          {
            name: "IOE Battery",
            image: ioe,
            charge: "8.24 kWh",
            discharge: "124.35 kWh",
            temperature: "35°C",
            voltage: "48.5V",
            status: "Charging",
            statusColor: "bg-green-500",
            cycleWarning: "High Discharge Rate",
            cycleWarningColor: "text-red-600",
          },
          {
            name: "LTO Battery",
            image: lithium,
            charge: "15.00 kWh",
            discharge: "98.00 kWh",
            temperature: "28°C",
            voltage: "55V",
            status: "Discharging",
            statusColor: "bg-blue-500",
            cycleWarning: "Moderate Discharge Rate",
            cycleWarningColor: "text-orange-600",
          },
          {
            name: "UPS Battery",
            image: ups,
            charge: "20.00 kWh",
            discharge: "130.00 kWh",
            temperature: "25°C",
            voltage: "48V",
            status: "Standby",
            statusColor: "bg-yellow-500",
            cycleWarning: "Low Discharge Rate",
            cycleWarningColor: "text-green-600",
          },
        ].map((battery) => (
          <div
            key={battery.name}
            className="flex flex-col flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6 max-w-[32%]"
          >
            {/* Top Section */}
            <div className="flex space-x-6 items-start">
              {/* Battery Image and Status */}
              <div className="flex-none text-center">
                <img
                  src={battery.image}
                  alt={battery.name}
                  className="w-28 h-32 object-contain mb-3"
                />
                {/* Status below the image */}
                <span className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400">
                  <span
                    className={`${battery.statusColor} w-3 h-3 rounded-full mr-2`}
                  ></span>
                  {battery.status}
                </span>
              </div>

              {/* Battery Details and Control Button */}
              <div className="flex flex-col flex-grow space-y-3">
                <h5 className="text-center font-bold text-lg text-gray-800 dark:text-gray-200">
                  {battery.name}
                </h5>
                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <p>
                    <span className="font-semibold">Charge:</span>{" "}
                    {battery.charge}
                  </p>
                  <p>
                    <span className="font-semibold">Discharge:</span>{" "}
                    {battery.discharge}
                  </p>
                  <p>
                    <span className="font-semibold">Temperature:</span>{" "}
                    {battery.temperature}
                  </p>
                  <p>
                    <span className="font-semibold">Voltage:</span>{" "}
                    {battery.voltage}
                  </p>
                </div>
                {/* Control Button aligned to the right */}
                <div className="mt-3 flex justify-end">
                  <Link
                    to={`/control/${battery.name.toLowerCase().replace(" ", "")}`}
                  >
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
              <p className={battery.cycleWarningColor}>{battery.cycleWarning}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Batteries;
