import React from "react";
import { useNavigate } from "react-router-dom";

const EnergyMeter = ({ name, consumption, id }) => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-white rounded-lg w-40 h-50 flex flex-col justify-between items-center text-center p-4 border border-gray-500">
      {/* Zone Label */}
      <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs font-medium py-1 px-2 rounded-full">
        {name}
      </div>

      {/* Consumption Highlight */}
      <div className="mt-4 flex flex-col items-center">
        <div className="text-2xl font-bold text-gray-800">{Math.round(consumption)} kWh</div>
        <div className="text-xs text-gray-400">Consumption</div>
      </div>

      {/* View Details Button */}
      <button
        onClick={() => navigate(`/meter/${id}`)}
        className="mt-2 text-blue-600 font-semibold text-xs hover:text-blue-800"
      >
        View Details
      </button>
    </div>
  );
};

const MeterInfo = () => {
  const energyMeters = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1, // Assign unique ID for routing
    name: `Zone ${index + 1}`,
    consumption: Math.random() * 1000,
  }));

  return (
    <div className="p-6 bg-white rounded-lg shadow-md flex flex-col">
      <h2 className="text-lg font-bold mb-6">Energy Meters</h2>
      <div className="grid grid-cols-5 gap-x-16 gap-y-6 justify-center mx-auto">
        {energyMeters.map((meter) => (
          <EnergyMeter key={meter.id} {...meter} />
        ))}
      </div>
    </div>
  );
};

export default MeterInfo;

