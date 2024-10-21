import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCancel, MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiMonitor, FiSettings, FiAlertCircle, FiFileText, FiBarChart, FiHome } from 'react-icons/fi';
import { useStateContext } from '../contexts/ContextProvider';
import logo from '../logo2.png';
import { FaChartLine } from 'react-icons/fa';

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, isCollapsed } = useStateContext();
  const [isMonitorOpen, setMonitorOpen] = useState(false);
  const [isControlOpen, setControlOpen] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-green-600 shadow-md transition-all duration-300';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 hover:bg-green-500 hover:text-white transition-all duration-300 m-2';

  // Style for rotated icons
  const rotateStyle = {
    transition: 'transform 0.5s ease',
    transform: hoveredIcon ? 'rotate(360deg)' : 'rotate(0deg)',
  };

  return (
    <div className={`h-screen overflow-auto pb-10 bg-[#003F3F] transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-full'}`}>
      {activeMenu && (
        <>
          <div className="flex justify-center items-center bg-[#F0FFF0] p-3 mb-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="logo" className={`h-28.5 w-28.5 object-contain ${isCollapsed ? 'mx-auto' : ''}`} />
            </Link>
          </div>

          {!isCollapsed && (
            <div className="bg-white shadow-md rounded-lg p-4 mb-4 mx-3">
              <h3 className="text-lg font-semibold">Savings Overview</h3>
              <p className="text-sm text-gray-600">Energy Savings: <span className="font-bold">100 kWh</span></p>
              <p className="text-sm text-gray-600">Cost Savings: <span className="font-bold">$20</span></p>
            </div>
          )}

          <TooltipComponent content="Menu" position="BottomCenter">
            <button
              type="button"
              onClick={() => setActiveMenu(!activeMenu)}
              style={{ color: currentColor }}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
            >
              <MdOutlineCancel />
            </button>
          </TooltipComponent>

          <div className="mt-10">
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onMouseEnter={() => setHoveredIcon('dashboard')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <FiHome style={hoveredIcon === 'dashboard' ? rotateStyle : {}} className="text-xl text-white" />
              {!isCollapsed && <span className="text-white">Dashboard</span>}
            </NavLink>

            <div className="mt-3">
              <div className={`flex items-center justify-between p-3 ${normalLink}`} onClick={() => setMonitorOpen(!isMonitorOpen)}>
                <div className="flex items-center gap-5"
                  onMouseEnter={() => setHoveredIcon('monitor')}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <FiMonitor style={hoveredIcon === 'monitor' ? rotateStyle : {}} className="text-xl text-white" />
                  {!isCollapsed && <span className="text-white">Monitor</span>}
                </div>
                {isMonitorOpen ? <MdKeyboardArrowUp className="text-white" /> : <MdKeyboardArrowDown className="text-white" />}
              </div>

              {/* Dropdown items visible when hovering over the icon */}
              {(isCollapsed && hoveredIcon === 'monitor') && (
                <div className="pl-5">
                  <NavLink to="/monitor/overview" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <span className="text-white">Building Overview</span>
                  </NavLink>
                  <NavLink to="/monitor/client" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <span className="text-white">Client</span>
                  </NavLink>
                  <NavLink to="/monitor/usage" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <span className="text-white">Cooling/HVAC</span>
                  </NavLink>
                  <NavLink to="/monitor/performance" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <span className="text-white">Renewable Energy</span>
                  </NavLink>
                  <NavLink to="/monitor/errors" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <span className="text-white">EV Charging</span>
                  </NavLink>
                  <NavLink to="/monitor/settings" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <span className="text-white">Energy Storage</span>
                  </NavLink>
                </div>
              )}

              {isMonitorOpen && !isCollapsed && (
                <div className="pl-5">
                  <NavLink to="/monitor/overview" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <span className="text-white">Building Overview</span>
                  </NavLink>
                  <NavLink to="/monitor/client" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <span className="text-white">Client</span>
                  </NavLink>
                  <NavLink to="/monitor/usage" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <span className="text-white">Cooling/HVAC</span>
                  </NavLink>
                  <NavLink to="/monitor/performance" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <span className="text-white">Renewable Energy</span>
                  </NavLink>
                  <NavLink to="/monitor/errors" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <span className="text-white">EV Charging</span>
                  </NavLink>
                  <NavLink to="/monitor/settings" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <span className="text-white">Energy Storage</span>
                  </NavLink>
                </div>
              )}
            </div>

            <div className="mt-3">
              <div className={`flex items-center justify-between p-3 ${normalLink}`} onClick={() => setControlOpen(!isControlOpen)}>
                <div className="flex items-center gap-5"
                  onMouseEnter={() => setHoveredIcon('control')}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <FiSettings style={hoveredIcon === 'control' ? rotateStyle : {}} className="text-xl text-white" />
                  {!isCollapsed && <span className="text-white">Control</span>}
                </div>
                {isMonitorOpen ? <MdKeyboardArrowUp className="text-white" /> : <MdKeyboardArrowDown className="text-white" />}
              </div>

              {/* Dropdown items visible when hovering over the icon */}
              {(isCollapsed && hoveredIcon === 'control') && (
                <div className="pl-5">
                  <NavLink to="/control/upsbattery" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <span className="text-white">UPS Battery Control</span>
                  </NavLink>
                  <NavLink to="/control/thermal" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <span className="text-white">Thermal Control</span>
                  </NavLink>
                  <NavLink to="/control/ltobattery" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <span className="text-white">LTO Battery Control</span>
                  </NavLink>
                  <NavLink to="/control/watercontrol" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <span className="text-white">Hot Water Control</span>
                  </NavLink>
                  <NavLink to="/control/ioebattery" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <span className="text-white">IOE Battery Control</span>
                  </NavLink>
                </div>
              )}

              {isControlOpen && !isCollapsed && (
                <div className="pl-5">
                   <NavLink to="/control/upsbattery" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <span className="text-white">UPS Battery Control</span>
                  </NavLink>
                  <NavLink to="/control/thermal" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <span className="text-white">Thermal Control</span>
                  </NavLink>
                  <NavLink to="/control/ltobattery" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <span className="text-white">LTO Battery Control</span>
                  </NavLink>
                  <NavLink to="/control/watercontrol" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <span className="text-white">Hot Water Control</span>
                  </NavLink>
                  <NavLink to="/control/ioebattery" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <span className="text-white">IOE Battery Control</span>
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/optimize"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onMouseEnter={() => setHoveredIcon('optimize')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <FaChartLine style={hoveredIcon === 'optimize' ? rotateStyle : {}} className="text-xl text-white" />
              {!isCollapsed && <span className="text-white">Optimize</span>}
            </NavLink>
            <NavLink
              to="/alerts"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onMouseEnter={() => setHoveredIcon('alerts')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <FiAlertCircle style={hoveredIcon === 'alerts' ? rotateStyle : {}} className="text-xl text-white" />
              {!isCollapsed && <span className="text-white">Alerts</span>}
            </NavLink>
            <NavLink
              to="/reports"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onMouseEnter={() => setHoveredIcon('reports')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <FiFileText style={hoveredIcon === 'reports' ? rotateStyle : {}} className="text-xl text-white" />
              {!isCollapsed && <span className="text-white">Reports</span>}
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
