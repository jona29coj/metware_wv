import React, { useState, useEffect } from "react";
import '../App.css';
import 'react-datepicker/dist/react-datepicker.css';
import Batteries from '../dcomponents/Batteries';
import WaterStorage from './WaterStorage';
import '../pages/enerndbuist.css';
import EVChargerOverview from './evchargers';
import FacilityInformation from './FacilityInformation';
import ChillerCard from './ChillerCard';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import EnergySources from "../dcomponents/EnergySources";
import FacilityUsage from "../dcomponents/FacilityUsage";
import WheeledInSolar from "../dcomponents/WheeledInSolar";
import PeakDemand from "../dcomponents/PeakDemand";
import EnergyConsumption from "../dcomponents/EnergyConsumption";
import ElectricityUsage from "../dcomponents/ElectricityUsage";
import FacilityUsageChart from "../components/FacilityUsageChart";
import FacilityUsaget from "../dcomponents/FacilityUsaget";

const Dashboard = () => {
  return (
<div className="min-h-screen flex flex-col bg-gray-100 p-5 gap-6">
  {/* Top Section */}
  <div className="flex flex-col md:flex-row flex-wrap gap-5">
  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-5">
    {/* Mini Card 1 */}
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-700">Energy Consumed</h3>
      <p className="text-2xl font-bold text-green-600">15439 kWh</p>
    </div>

     {/* Mini Card 2 */}
     <div className="bg-white shadow-md p-4 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-700">Peak Demand</h3>
      <p className="text-2xl font-bold text-green-600">2192 kVA 00:00:01</p>
    </div>

    {/* Mini Card 3 */}
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-700">Today’s CO2 Reduction</h3>
      <p className="text-2xl font-bold text-green-600">
        0.86 Tons of CO2 Equivalent
      </p>
    </div>
  </div>
</div>



  {/* Main Content Section */}
  <div className="flex flex-col gap-6">
    {/* Energy Sources and Facility Usage */}
    <div className="flex flex-col md:flex-row gap-6">
  <div className="w-full md:w-1/2">
    <EnergySources />
  </div>
  <div className="w-full md:w-1/2">
    <FacilityUsage />
  </div>
</div>


    {/* Remaining Cards */}
    <ElectricityUsage />
    <FacilityUsaget />
    <FacilityInformation />
    <ChillerCard />
    <WheeledInSolar />
    <PeakDemand />
    <EnergyConsumption />
    <WaterStorage />
    <Batteries />
    <EVChargerOverview />
  </div>
</div>

  );
};

export default Dashboard;


