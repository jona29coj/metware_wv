import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar, Navbar } from './components'; // Import Navbar here
import './App.css';
import MultiMeterGauge from './pages/MultiMeterGauge';
import IoTFleetStatus from './pages/IOTFleet';
import ThreeDChiller from './pages/ThreeDChiller';
import ChillerDetail from './pages/ChillerDetail';
import BuildingOverview from './pages/BuildingOverview';
import Client from './pages/Client';
import RenewableEnergy from './pages/RenewableEnergy';
import EVCharging from './pages/EVCharging';
import EnergyStorage from './pages/EnergyStorage';
import AlertsOverview from './pages/Alerts';
import UPSControl from './pages/UPSControl';
import ThermalControl from './pages/ThermalControl';
import LTOControl from './pages/LTOControl';
import HotWaterControl from './pages/HotWaterControl';
import IOEBatteryControl from './pages/IOEBattery';
import BatteriesMonitor from './pages/BatteriesMonitor';
import PeakAnalysis from './pages/PeakAnalysis';
import Reports from './pages/Reports';
import Dashboard from './pages/Dashboard';
import Documentation from './pages/Documentation';

const App = () => {
  return (
    <div className="bg-main-bg min-h-screen">
      <BrowserRouter>
        <div className="flex relative">
          {/* Fixed Sidebar */}
          <div className="w-56 fixed sidebar bg-white shadow-md">
        <Sidebar />
      </div>

          {/* Main Content */}
          <div className="bg-main-bg min-h-screen ml-56 w-full">
            {/* Navbar */}
            <Navbar />

            {/* Content */}
            <div className="pt-16"> {/* Add padding-top based on navbar height */}
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/control" element={<MultiMeterGauge />} />
                <Route path="/iotfleet" element={<IoTFleetStatus />} />
                <Route path="/threed" element={<ThreeDChiller />} />
                <Route path="/chillerdetail" element={<ChillerDetail />} />
                <Route path="/monitor/overview" element={<BuildingOverview />} />
                <Route path="/monitor/client" element={<Client />} />
                <Route path="/monitor/performance" element={<RenewableEnergy />} />
                <Route path="/ev-charging" element={<EVCharging />} />
                <Route path="/energy-storage" element={<EnergyStorage />} />
                <Route path="/alerts" element={<AlertsOverview />} />
                <Route path="/optimize" element={<PeakAnalysis />} />
                <Route path="/chiller/:id" element={<ChillerDetail />} />
                <Route path="/control/upsbattery" element={<UPSControl />} />
                <Route path="/control/thermal" element={<ThermalControl />} />
                <Route path="/control/ltobattery" element={<LTOControl />} />
                <Route path="/control/watercontrol" element={<HotWaterControl />} />
                <Route path="/control/ioebattery" element={<IOEBatteryControl />} />
                <Route path="/monitor/batteries" element={<BatteriesMonitor />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/documentation" element={<Documentation />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
