import React from "react";

const EnergyMeter = ({ name, consumption, cost, percentage }) => {
  return (
    <div className="relative bg-gray-50 border border-gray-200 rounded-lg shadow-md p-6 text-center w-52 h-72 flex flex-col justify-between items-center">
      {/* Zone Label */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-gray-200 text-sm font-semibold rounded-md px-4 py-1 shadow-sm">
        {name}
      </div>

      {/* Gauge Representation */}
      <div className="relative w-32 h-32 rounded-full bg-gradient-to-b from-green-400 to-gray-200 flex items-center justify-center shadow-inner mt-6">
        <div
          className="absolute w-28 h-28 bg-gray-50 rounded-full flex items-center justify-center"
          style={{
            boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          <span className="text-lg font-bold text-green-600">
            {Math.round(percentage)}%
          </span>
        </div>
      </div>

      {/* Consumption */}
      <div className="mt-4">
        <div className="text-lg font-bold text-green-700">
          {Math.round(consumption)} kWh
        </div>
        <div className="text-xs text-gray-500">Consumption</div>
      </div>

      {/* Cost */}
      <div>
        <div className="text-lg font-bold text-blue-700">
          ₹{Math.round(cost)}
        </div>
        <div className="text-xs text-gray-500">Cost</div>
      </div>
    </div>
  );
};

const MeterInfo = () => {
  const energyMeters = Array.from({ length: 10 }, (_, index) => ({
    name: `Zone ${index + 1}`,
    consumption: Math.random() * 20000,
    cost: Math.random() * 100000,
    percentage: Math.random() * 100, // Simulated meter percentage
  }));

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-6">Energy Meters</h2>
      <div className="grid grid-cols-5 gap-6">
        {energyMeters.map((meter, index) => (
          <EnergyMeter key={index} {...meter} />
        ))}
      </div>
    </div>
  );
};

export default MeterInfo;
