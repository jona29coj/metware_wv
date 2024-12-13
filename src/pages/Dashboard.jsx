import React, { useState, useEffect } from "react";
import '../App.css';
import 'react-datepicker/dist/react-datepicker.css';
import Batteries from './Batteries';
import WaterStorage from './WaterStorage';
import '../pages/enerndbuist.css';
import EVChargerOverview from './evchargers';
import FacilityInformation from './FacilityInformation';
import ChillerCard from './ChillerCard';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import FacilityInfo from "../dcomponents/FacilityInfo";
import ElementsScore from "../dcomponents/ElementsScore";
import EnergySources from "../dcomponents/EnergySources";
import FacilityUsage from "../dcomponents/FacilityUsage";
import WheeledInSolar from "../dcomponents/WheeledInSolar";
import PeakDemand from "../dcomponents/PeakDemand";
import EnergyConsumption from "../dcomponents/EnergyConsumption";

const Dashboard = () => {
  return (
<div className="min-h-screen flex flex-col bg-gray-100 p-5 gap-6">
  {/* Top Section */}
  <div className="flex flex-col md:flex-row flex-wrap gap-5">
  <div className="flex-1">
    <FacilityInfo />
  </div>
  <div className="flex-1">
    <ElementsScore />
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
    <ChillerCard />
    <FacilityInformation />
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


