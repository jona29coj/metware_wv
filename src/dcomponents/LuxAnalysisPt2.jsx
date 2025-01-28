import React from 'react';
import lux_img_pt2 from "../sections/pictures/mware11.png";

const LuxAnalysisPt2 = () => {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden p-6">
      {/* Heading Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-center">LUX Analysis</h1>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-4xl mb-14">
        <img
          src={lux_img_pt2}
          alt="LUX Analysis"
          className="w-full h-[260px] rounded-lg shadow-md"
        />
      </div>

      {/* Content Section */}
      <div>
        <h2 className="text-xl font-semibold text-red-600 mb-4">Inference</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
            In a factory setting, the typical indoor lux range of 200-700 lux is
          suitable depending on the task, with 500 lux being ideal for detailed
          work.
            </li>
            <li>
            On average, aiming for 300-500 lux across the factory ensures
          proper illumination without straining workers' vision.
            </li>
          </ul>
      </div>
    </div>
  );
};

export default LuxAnalysisPt2;
