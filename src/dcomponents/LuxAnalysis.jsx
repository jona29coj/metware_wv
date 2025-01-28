import React from "react";
import lux_img from "../sections/pictures/mware10.png";

const LuxAnalysis = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-white min-h-screen rounded-lg">
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-black">LUX Analysis</h1>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-4xl mb-6">
        <img
          src={lux_img}
          alt="LUX Analysis"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Content Section */}
      <div className="w-full max-w-4xl">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-red-600 mb-4">Objectives</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Daylight Factor (DF): Measures the ratio of interior illuminance
              to exterior illuminance under overcast skies (recommended DF:
              2-5% for most spaces).
            </li>
            <li>
              Lux Levels: Measure of light intensity (recommended lux levels:
              ~300-500 lux for general tasks).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LuxAnalysis;
