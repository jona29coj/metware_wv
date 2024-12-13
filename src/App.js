import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Sidebar, Navbar } from './components';
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
import Login from './pages/Login';
import ChillerDetails from './pages/ChillerDetail';

const AppLayout = ({ children }) => {
  const location = useLocation();

  // Check if the current route is the Login page
  const isLoginPage = location.pathname === '/';

  // Dynamic padding-top based on Navbar visibility
  const navbarHeight = 52; // Adjust this value to match the reduced Navbar height

  return (
    <div className="bg-main-bg min-h-screen">
      <div className="flex relative">
        {/* Render Sidebar only if not on the Login page */}
        {!isLoginPage && (
          <div className="w-56 fixed sidebar bg-white shadow-md">
            <Sidebar />
          </div>
        )}

        <div
          className={`bg-main-bg min-h-screen ${!isLoginPage ? 'ml-56' : ''} w-full`}
          style={{
            paddingTop: !isLoginPage ? `${navbarHeight}px` : '0',
          }}
        >
          {/* Render Navbar only if not on the Login page */}
          {!isLoginPage && <Navbar />}
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};


const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/control" element={<MultiMeterGauge />} />
          <Route path="/iotfleet" element={<IoTFleetStatus />} />
          <Route path="/threed" element={<ThreeDChiller />} />
          <Route path="/chillerdetail" element={<ChillerDetails />} />
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
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
