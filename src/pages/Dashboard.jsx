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
  <div className="flex justify-between gap-2 flex-wrap">
      {/* Total Meters */}
      <div className="flex items-center bg-white shadow-md p-2 rounded-md w-[16%]">
        <div className="bg-blue-100 p-2 rounded-md text-blue-600">
          <FaTachometerAlt className="w-5 h-5" />
        </div>
        <div className="ml-2">
          <h3 className="text-xs font-medium text-gray-700">Total Meters</h3>
          <p className="text-base font-bold text-gray-900">210</p>
        </div>
      </div>

      {/* Total Consumption */}
      <div className="flex items-center bg-white shadow-md p-2 rounded-md w-[16%]">
        <div className="bg-blue-100 p-2 rounded-md text-blue-600">
          <FaBolt className="w-5 h-5" />
        </div>
        <div className="ml-2">
          <h3 className="text-xs font-medium text-gray-700">Total Consumption</h3>
          <p className="text-base font-bold text-gray-900">11,438.48 kWh</p>
        </div>
      </div>

      {/* Total Cost */}
      <div className="flex items-center bg-white shadow-md p-2 rounded-md w-[16%]">
        <div className="bg-blue-100 p-2 rounded-md text-blue-600">
          <FaRupeeSign className="w-5 h-5" />
        </div>
        <div className="ml-2">
          <h3 className="text-xs font-medium text-gray-700">Total Cost</h3>
          <p className="text-base font-bold text-gray-900">₹78,545.15</p>
        </div>
      </div>

      {/* Power Load: Normal */}
      <div className="flex items-center bg-white shadow-md p-2 rounded-md w-[16%]">
        <div>
          <h3 className="text-xs font-medium text-gray-700">
            Power Load: <span className="text-blue-600">Normal</span>
          </h3>
          <p className="text-sm font-bold text-gray-900">8,594.74 kWh</p>
          <p className="text-xs text-gray-600">₹52,427.92</p>
        </div>
      </div>

      {/* Power Load: Peak */}
      <div className="flex items-center bg-white shadow-md p-2 rounded-md w-[16%]">
        <div>
          <h3 className="text-xs font-medium text-gray-700">
            Power Load: <span className="text-red-600">Peak</span>
          </h3>
          <p className="text-sm font-bold text-gray-900">2,843.74 kWh</p>
          <p className="text-xs text-gray-600">₹26,117.23</p>
        </div>
      </div>

      {/* Power Load: Off-Peak */}
      <div className="flex items-center bg-white shadow-md p-2 rounded-md w-[16%]">
        <div>
          <h3 className="text-xs font-medium text-gray-700">
            Power Load: <span className="text-orange-600">Off-Peak</span>
          </h3>
          <p className="text-sm font-bold text-gray-900">5,301 kWh</p>
          <p className="text-xs text-gray-600">₹24,252.06</p>
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


