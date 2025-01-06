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
import { FaTachometerAlt, FaBolt, FaRupeeSign } from "react-icons/fa"; // Importing icons
import FacilityUsaget from "../dcomponents/FacilityUsaget";
import LiveConsumption from "./LiveConsumptionChart";
import EnergyMeter from "../dcomponents/EnergyMeter";
import MeterInfo from "./EnergyMeter";

const Dashboard = () => {
  const energyMeters = [
    {
      name: "EM6400NG",
      totalKW: 944.71,
      maxKW: 1200,
      consumption: 11438.48,
      cost: 69774.72,
      statusColor: "red",
      overload: false,
    },
    {
      name: "EM6450H",
      totalKW: 1050.5,
      maxKW: 1200,
      consumption: 23438.48,
      cost: 142974.72,
      statusColor: "red",
      overload: true,
    },
  ];

  return (
<div className="min-h-screen flex flex-col bg-gray-100 p-5 gap-6">
{/* Top Section */}
<div className="flex gap-4">
  {/* First Mini Card */}
  <div className="flex flex-1 bg-white shadow-md p-4 rounded-md">
    {/* Row Layout */}
    <div className="flex flex-1 justify-between items-center">
      {/* Total Meters */}
      <div className="flex items-center w-1/3">
        <div className="bg-blue-100 p-2 rounded-md text-blue-600">
          <FaTachometerAlt className="w-6 h-6" />
        </div>
        <div className="pl-2">
          <h3 className="text-xs font-medium text-gray-700">Total Meters</h3>
          <p className="text-base font-bold text-gray-900">210</p>
        </div>
      </div>

      {/* Total Consumption */}
      <div className="flex items-center w-1/3 border-l border-gray-200 pl-4">
        <div className="bg-blue-100 p-2 rounded-md text-blue-600">
          <FaBolt className="w-6 h-6" />
        </div>
        <div className="pl-2">
          <h3 className="text-xs font-medium text-gray-700">Total Consumption</h3>
          <p className="text-base font-bold text-gray-900 text-nowrap">
            11,438.48 <span className="text-xs font-normal">kWh</span>
          </p>
        </div>
      </div>

      {/* Total Cost */}
      <div className="flex items-center w-1/3 border-l border-gray-200 pl-4">
        <div className="bg-blue-100 p-2 rounded-md text-blue-600">
          <FaRupeeSign className="w-6 h-6" />
        </div>
        <div className="ml-2">
          <h3 className="text-xs font-medium text-gray-700">Total Cost</h3>
          <p className="text-base font-bold text-gray-900">₹78,545.15</p>
        </div>
      </div>
    </div>
  </div>

  {/* Second Mini Card */}
  <div className="flex flex-1 bg-white shadow-md p-4 rounded-md">
    {/* Row Layout */}
    <div className="flex flex-1 justify-between items-center">
      {/* Power Load: Normal */}
      <div className="flex items-center w-1/3">
        <div>
          <h3 className="text-xs font-medium text-gray-700">
            Power Load: <span className="text-blue-600">Normal</span>
          </h3>
          <p className="text-sm font-bold text-gray-900">8,594.74 kWh</p>
          <p className="text-xs text-gray-600">₹52,427.92</p>
        </div>
      </div>

      {/* Power Load: Peak */}
      <div className="flex items-center w-1/3 border-l border-gray-200 pl-4">
        <div>
          <h3 className="text-xs font-medium text-gray-700">
            Power Load: <span className="text-red-600">Peak</span>
          </h3>
          <p className="text-sm font-bold text-gray-900">2,843.74 kWh</p>
          <p className="text-xs text-gray-600">₹26,117.23</p>
        </div>
      </div>

      {/* Power Load: Off-Peak */}
      <div className="flex items-center w-1/3 border-l border-gray-200 pl-4">
        <div>
          <h3 className="text-xs font-medium text-gray-700">
            Power Load: <span className="text-orange-600">Off-Peak</span>
          </h3>
          <p className="text-sm font-bold text-gray-900">5,301 kWh</p>
          <p className="text-xs text-gray-600">₹24,252.06</p>
        </div>
      </div>
    </div>
  </div>
</div>







  {/* Main Content Section */}
  <LiveConsumption />


    {/* Remaining Cards */}
    <MeterInfo />
    <ElectricityUsage />
    <FacilityInformation />
    <WheeledInSolar />
    <PeakDemand />
    <EnergyConsumption />
    <WaterStorage />
    <Batteries />
    <EVChargerOverview />
  </div>


  );
};

export default Dashboard;


