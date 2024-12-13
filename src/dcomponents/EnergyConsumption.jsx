import React from "react";
import EnergyConsumptionChart from "../components/EnergyConsumptionChart";

const EnergyConsumption = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full h-full">
      <h2 className="text-lg font-bold text-gray-700 mb-4">Energy Consumption</h2>
      {/* Chart Component */}
      <div className="flex-grow w-full h-[500px]">
        <EnergyConsumptionChart />
      </div>
    </div>
  );
};

export default EnergyConsumption;
