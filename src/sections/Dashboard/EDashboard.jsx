import React from "react";
import 'react-datepicker/dist/react-datepicker.css';
import Batteries from '../../dcomponents/Batteries';
import WaterStorage from '../WaterStorage';
import EVChargerOverview from '../evchargers';
import WheeledInSolar from "../../dcomponents/WheeledInSolar";
import PeakDemand from "../../dcomponents/PeakDemand";
import EnergyConsumption from "../../dcomponents/EnergyConsumption";
import ElectricityUsage from "../../dcomponents/ElectricityUsage";
import MeterInfo from "../EnergyMeter";
import DieselGeneration from "../../dcomponents/DieselGeneration";
import Edmc from "../../dcomponents/Edmc";
import ZoneUsage from "../../dcomponents/ZoneUsage";

const EDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-4 gap-4">
      <Edmc />
<div className="flex flex-col md:flex-row justify-between gap-4">
  <div className="w-full">
    <ZoneUsage />
  </div>
</div>

      
      <ElectricityUsage />
      <MeterInfo />
      <DieselGeneration />
      <PeakDemand />
      <EnergyConsumption />
      <WheeledInSolar />
      <WaterStorage />
      <Batteries />
      <EVChargerOverview />
    </div>
  );
};

export default EDashboard;
