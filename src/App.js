import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';
import MultiMeterGauge from './pages/MultiMeterGauge';
import Dashboard from './pages/Dashboard';
import IoTFleetStatus from './pages/IOTFleet';
import ThreeDChiller from './pages/ThreeDChiller';
import ChillerDetail from './pages/ChillerDetail';
import BuildingOverview from './pages/BuildingOverview';
import Client from './pages/Client';
import CoolingHVAC from './pages/CoolingHVAC';
import RenewableEnergy from './pages/RenewableEnergy';
import EVCharging from './pages/EVCharging';
import EnergyStorage from './pages/EnergyStorage';
import AlertsOverview from './pages/Alerts';
import ChillerOverview from './pages/Chiller';
import ChillerProcessFlow from './pages/ChillerProcessFlow';
import ChillerComponent from './pages/ChillerComponent';
import UPSControl from './pages/UPSControl';
import ThermalControl from './pages/ThermalControl';
import LTOControl from './pages/LTOControl';
import HotWaterControl from './pages/HotWaterControl';
import IOEBatteryControl from './pages/IOEBattery';
import BatteriesMonitor from './pagesc/BatteriesMonitor';
import PeakAnalysis from './pagesc/PeakAnalysis';
import Reports from './pagesc/Reports';


const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings, isCollapsed } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className={`fixed sidebar dark:bg-secondary-dark-bg bg-white transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-72'}`}>
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen transition-all duration-300 ${activeMenu ? (isCollapsed ? 'md:ml-20' : 'md:ml-72') : 'ml-0'} w-full`}>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full top-0 z-10"> {/* Added z-10 to ensure navbar is on top */}
              <Navbar />
            </div>
            <div className="mt-1"> {/* Added margin top to ensure main content is below the navbar */}
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                {/* dashboard  */}
                <Route path="/dashboard" element={(<Ecommerce />)} />
                <Route path="/ecommerce" element={(<Ecommerce />)} />

                {/* pages  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/control" element={<MultiMeterGauge />} />
                <Route path="/iotfleet" element={<IoTFleetStatus />} />
                <Route path="/threed" element={<ThreeDChiller />} />
                <Route path="/chillerdetail" element={<ChillerDetail />} />
                <Route path="/monitor/overview" element={<BuildingOverview />} />
                <Route path="/monitor/client" element={<Client />} />
                <Route path="monitor/usage" element={<CoolingHVAC />} />
                <Route path="/monitor/performance" element={<RenewableEnergy />} />
                <Route path="/ev-charging" element={<EVCharging />} />
                <Route path="/energy-storage" element={<EnergyStorage />} />
                <Route path="/alerts" element={<AlertsOverview />} />
                <Route path="/optimize" element={<PeakAnalysis />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/chiller/:id" element={<ChillerDetail />} />
                <Route path="/chiller/:id/process-flow" element={<ChillerProcessFlow />} />
                <Route path="/test" element={<ChillerComponent />} />
                <Route path="/control/upsbattery" element={<UPSControl />} />
                <Route path="/control/thermal" element={<ThermalControl />} />
                <Route path="/control/ltobattery" element={<LTOControl />} />
                <Route path="/control/watercontrol" element={<HotWaterControl />} />
                <Route path="/control/ioebattery" element={<IOEBatteryControl />} />
                <Route path="/monitor/batteries" element={<BatteriesMonitor />} />
                <Route path="/reports" element={<Reports />} />
                {/* apps  
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} /> */}
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
