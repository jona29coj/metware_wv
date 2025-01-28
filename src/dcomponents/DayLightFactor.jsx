import React from "react";
import mware3 from "../sections/pictures/mware3.png";
const DaylightFactorAnalysis = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6">
      {/* Title Section */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">Daylight Factor Analysis</h1>
      </div>

      {/* Objectives Section */}
      <div className="mb-6">
        <h2 className="text-lg text-red-600 font-medium">Objectives</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Evaluate indoor spaces for sufficient daylight levels.</li>
          <li>Identify areas with low or excessive daylight for improvement.</li>
          <li>Compare lux levels with recommended standards to enhance occupant comfort and productivity.</li>
        </ul>
      </div>

      {/* Image Section */}
      <img src={mware3}></img>
    </div>
  );
};

export default DaylightFactorAnalysis;