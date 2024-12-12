import React from "react";
import { useParams } from "react-router-dom";
import chillerImage from "./chiller2.png"; // Ensure the correct path to the image

const ChillerDetailsPage = () => {
  const { chillerId } = useParams(); // Extract the chillerId from the URL

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-green-100 p-4 rounded-md mb-6 shadow">
        <h1 className="text-2xl font-bold text-gray-700">
          Chiller Main Parameters
        </h1>
        <p className="text-sm text-gray-600">
          Detailed insights for Chiller ID: <span className="font-medium">{chillerId}</span>
        </p>
        <div className="mt-2 text-sm text-gray-500">
          <span className="font-medium">Today’s Active Optimization Time:</span>{" "}
          <span className="text-green-700">27.66%</span> (Last updated: 2024-12-10)
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section: Chiller Image and Information */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md p-4">
          <img
            src={chillerImage}
            alt="Chiller"
            className="w-full rounded-md object-contain mb-4"
          />
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              <span className="font-medium">Cooling Capacity:</span> 300 kW
            </p>
            <p>
              <span className="font-medium">Energy Efficiency Ratio (EER):</span> 4.0
            </p>
            <p>
              <span className="font-medium">Compressor Type:</span> Scroll
            </p>
            <p>
              <span className="font-medium">Refrigerant Type:</span> R-134a
            </p>
          </div>
        </div>

        {/* Right Section: Performance and Operational Data */}
        <div className="w-full md:w-1/2">
          {/* Real-Time Performance */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Real-Time Performance
            </h2>
            <div className="text-sm text-gray-600 space-y-2">
              <p>
                <span className="font-medium">Current Cooling Efficiency:</span>{" "}
                92%
              </p>
              <p>
                <span className="font-medium">Current Power Consumption:</span>{" "}
                250 kW
              </p>
              <p>
                <span className="font-medium">Outside Temperature:</span> 78.39°F
              </p>
            </div>
          </div>

          {/* System Parameters */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              System Parameters
            </h2>
            <div className="text-sm text-gray-600 space-y-2">
              <p>
                <span className="font-medium">Condenser Water Supply:</span>{" "}
                54.36°F
              </p>
              <p>
                <span className="font-medium">Chilled Water Supply:</span>{" "}
                48.76°F
              </p>
              <p>
                <span className="font-medium">Setpoint Temperature:</span>{" "}
                48.67°F
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-6 text-xs text-gray-400">
        © 2024 Green Chiller Optimization Package. All rights reserved. Version: 2.0.0
      </div>
    </div>
  );
};

export default ChillerDetailsPage;
