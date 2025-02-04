import React from "react";
import 'react-datepicker/dist/react-datepicker.css';
import Batteries from '../../dcomponents/Batteries';
import WaterStorage from '../WaterStorage';
import EVChargerOverview from '../evchargers';
import FacilityInformation from '../FacilityInformation';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import WheeledInSolar from "../../dcomponents/WheeledInSolar";
import PeakDemand from "../../dcomponents/PeakDemand";
import EnergyConsumption from "../../dcomponents/EnergyConsumption";
import ElectricityUsage from "../../dcomponents/ElectricityUsage";
import LiveConsumption from "../LiveConsumption";
import MeterInfo from "../EnergyMeter";
import DieselGeneration from "../../dcomponents/DieselGeneration";
import Edmc from "../../dcomponents/Edmc";
import ZoneUsage from "../../dcomponents/ZoneUsage";

const EDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-5 gap-6">
      <Edmc />
      
      {/* Flex container for side by side layout */}
<div className="flex flex-col md:flex-row justify-between gap-4">
  {/* Live Consumption and Zone Usage side by side */}
  <div className="w-full md:w-1/2">
    <LiveConsumption />
  </div>
  <div className="w-full md:w-1/2">
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
