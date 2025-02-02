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
import LiveConsumption from "../LiveConsumptionChart";
import MeterInfo from "../EnergyMeter";
import ZoneUsageCard from "../../dcomponents/ZoneUsageCard";
import DieselGeneration from "../../dcomponents/DieselGeneration";
import Edmc from "../../dcomponents/Edmc";

const EDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-5 gap-6">
      <Edmc />
      <LiveConsumption />
      <ElectricityUsage />
      <MeterInfo />
      <DieselGeneration />
      <FacilityInformation />
      <ZoneUsageCard />
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
