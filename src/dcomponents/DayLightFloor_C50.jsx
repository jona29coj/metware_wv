import React from "react";
import mware_g from "../sections/pictures/mware4.png";
import mware_l1 from "../sections/pictures/mware12.png";
import mware_l2 from "../sections/pictures/mware13.png";
import mware_l3 from "../sections/pictures/mware14.png";
import mware_l4 from "../sections/pictures/mware15.png";
import mware_t from "../sections/pictures/mware16.png";

const DaylightFloorPlanAnalysis = () => {
  const floorPlans = [
    { title: "GROUND LEVEL", image: mware_g },
    { title: "LEVEL 1", image: mware_l1 },
    { title: "LEVEL 2", image: mware_l2 },
    { title: "TERRACE", image: mware_l3 },
  ];

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6">
      {/* Title Section */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">Daylight Factor Floor Plan Analysis</h1>
        <h2 className="text-lg font-medium mt-2">PLOT C-50</h2>
      </div>

      {/* Floor Plan Images in a Row */}
      <div className="flex justify-between mb-6 flex-wrap">
        {floorPlans.map((plan) => (
          <div key={plan.title} className="flex flex-col items-center w-1/6 p-2">
            <img src={plan.image} alt={plan.title} className="w-full h-40 object-cover rounded-lg" />
            <p className="text-sm text-gray-500 mt-2">{plan.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaylightFloorPlanAnalysis;
