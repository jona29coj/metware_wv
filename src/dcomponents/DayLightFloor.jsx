import React from "react";
import mware_g from "../sections/pictures/mware4.png";
import mware_l1 from "../sections/pictures/mware5.png";
import mware_l2 from "../sections/pictures/mware6.png";
import mware_l3 from "../sections/pictures/mware7.png";
import mware_l4 from "../sections/pictures/mware8.png";
import mware_t from "../sections/pictures/mware9.png";

const DaylightFloorPlanAnalysis = () => {
  const floorPlans = [
    { title: "GROUND LEVEL", image: mware_g },
    { title: "LEVEL 1", image: mware_l1 },
    { title: "LEVEL 2", image: mware_l2 },
    { title: "LEVEL 3", image: mware_l3 },
    { title: "LEVEL 4", image: mware_l4 },
    { title: "TERRACE", image: mware_t },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6">
      {/* Title Section */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">Daylight Factor Floor Plan Analysis</h1>
        <h2 className="text-lg font-medium mt-2">PLOT C-49</h2>
      </div>

      {/* Inference Section */}
      <div className="mb-6">
        <h2 className="text-lg text-red-600 font-medium">Inference</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>The daylight factor (DF) is carefully carried out for each floor.</li>
          <li>
            The analysis shows that all the indoor surface is getting 2.1% approx., which is below the average of
            5% for precision work factories.
          </li>
        </ul>
      </div>

      {/* Floor Plan Images */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {floorPlans.map((plan) => (
          <div key={plan.title} className="flex flex-col items-center">
            <img src={plan.image} alt={plan.title} className="w-full h-40 object-cover rounded-lg" />
            <p className="text-sm text-gray-500 mt-2">{plan.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaylightFloorPlanAnalysis;
