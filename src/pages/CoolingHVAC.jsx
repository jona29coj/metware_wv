import React from 'react';
import TotalEnergyAndCooling from '../pagesc/TotalEndG';
import InstantaneousChillerCop from '../pagesc/Instchilcop';
import LoadingVsCop from '../pagesc/loadvscop';
import EvaporatorTemperature from '../pagesc/Evap';
import CondenserTemperature from '../pagesc/Conde';


const HvacSection = () => {
  return (
    <div className="hvac-section bg-gray-100 min-h-screen p-8">
      {/* Page Title */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">HVAC Monitoring Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Monitor and manage the performance of your cooling and HVAC systems
        </p>
      </div>

      {/* Continuous Components */}
      <TotalEnergyAndCooling />
      <InstantaneousChillerCop />
      <LoadingVsCop />
      <EvaporatorTemperature />
      <CondenserTemperature />
    </div>
  );
};

export default HvacSection;
