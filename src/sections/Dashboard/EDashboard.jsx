import React, { useState, useEffect } from "react";
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
import { FaTachometerAlt, FaBolt, FaRupeeSign } from "react-icons/fa"; 
import LiveConsumption from "../LiveConsumptionChart";
import MeterInfo from "../EnergyMeter";
import ZoneUsageCard from "../../dcomponents/ZoneUsageCard";

const EDashboard = () => {
  return (
<div className="min-h-screen flex flex-col bg-gray-100 p-5 gap-6">
<div className="flex gap-4">
  <div className="flex flex-1 bg-white shadow-md p-4 rounded-md">
    <div className="flex flex-1 justify-between items-center">
      <div className="flex items-center w-1/3">
        <div className="bg-blue-100 p-2 rounded-md text-blue-600">
          <FaTachometerAlt className="w-6 h-6" />
        </div>
        <div className="pl-2">
          <h3 className="text-xs font-medium text-gray-700">Total Meters</h3>
          <p className="text-base font-bold text-gray-900">10</p>
        </div>
      </div>

      <div className="flex items-center w-1/3 border-l border-gray-200 pl-4">
        <div className="bg-blue-100 p-2 rounded-md text-blue-600">
          <FaBolt className="w-6 h-6" />
        </div>
        <div className="pl-2">
          <h3 className="text-xs font-medium text-gray-700">Total Consumption</h3>
          <p className="text-base font-bold text-gray-900 text-nowrap">
            11,438 <span className="text-xs font-normal">kWh</span>
          </p>
        </div>
      </div>

      <div className="flex items-center w-1/3 border-l border-gray-200 pl-4">
        <div className="bg-blue-100 p-2 rounded-md text-blue-600">
          <FaRupeeSign className="w-6 h-6" />
        </div>
        <div className="ml-2">
          <h3 className="text-xs font-medium text-gray-700">Total Cost</h3>
          <p className="text-base font-bold text-gray-900">₹78,545</p>
        </div>
      </div>
    </div>
  </div>

  <div className="flex flex-1 bg-white shadow-md p-4 rounded-md">
    <div className="flex flex-1 justify-between items-center">
      <div className="flex items-center w-1/3">
        <div>
          <h3 className="text-xs font-medium text-gray-700">
            Power Load: <span className="text-blue-600">Normal</span>
          </h3>
          <p className="text-sm font-bold text-gray-900">8,594 kWh</p>
          <p className="text-xs text-gray-600">₹52,427</p>
        </div>
      </div>

      <div className="flex items-center w-1/3 border-l border-gray-200 pl-4">
        <div>
          <h3 className="text-xs font-medium text-gray-700">
            Power Load: <span className="text-red-600">Peak</span>
          </h3>
          <p className="text-sm font-bold text-gray-900">2,843 kWh</p>
          <p className="text-xs text-gray-600">₹26,117</p>
        </div>
      </div>

      <div className="flex items-center w-1/3 border-l border-gray-200 pl-4">
        <div>
          <h3 className="text-xs font-medium text-gray-700">
            Power Load: <span className="text-orange-600">Off-Peak</span>
          </h3>
          <p className="text-sm font-bold text-gray-900">5,301 kWh</p>
          <p className="text-xs text-gray-600">₹24,252</p>
        </div>
      </div>
    </div>
  </div>
</div>







    <LiveConsumption />
    <MeterInfo />
    <ElectricityUsage />
    <FacilityInformation />
    <ZoneUsageCard />
    <PeakDemand />
    <EnergyConsumption />
    <WaterStorage />
    <Batteries />
    <EVChargerOverview />
    <WheeledInSolar />
  </div>


  );
};

export default EDashboard;


