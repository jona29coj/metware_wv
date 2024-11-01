import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCancel, MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { FiMonitor, FiSettings, FiAlertCircle, FiFileText, FiHome, FiBook } from 'react-icons/fi';
import { useStateContext } from '../contexts/ContextProvider';
import logo from '../logo2.png';
import { FaChartLine } from 'react-icons/fa';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';  // Icon for the toggle button
import ReactDOM from 'react-dom';

// DropdownMenu component for Monitor and Control items
const DropdownMenu = ({ items, onClose }) => {
  return ReactDOM.createPortal(
    <div
      className="absolute left-20 top-16 bg-white border border-gray-300 shadow-xl rounded-lg p-3 w-52"
      style={{ zIndex: 9999 }}
    >
      {items.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          onClick={onClose}
          className="block py-2 px-4 text-gray-800 font-medium hover:bg-green-500 hover:text-white transition-colors duration-200 rounded"
        >
          {item.name}
        </NavLink>
      ))}
    </div>,
    document.body
  );
};

// Links for Monitor and Control sections
const monitorLinks = [
  { name: 'Building Overview', path: '/monitor/overview' },
  { name: 'Client', path: '/monitor/client' },
  { name: 'Cooling/HVAC', path: '/monitor/usage' },
  { name: 'Renewable Energy', path: '/monitor/performance' },
  { name: 'Batteries', path: '/monitor/batteries' },
  { name: 'Energy Storage', path: '/monitor/settings' },
];

const controlLinks = [
  { name: 'UPS Battery Control', path: '/control/upsbattery' },
  { name: 'Thermal Control', path: '/control/thermal' },
  { name: 'LTO Battery Control', path: '/control/ltobattery' },
  { name: 'Hot Water Control', path: '/control/watercontrol' },
  { name: 'IOE Battery Control', path: '/control/ioebattery' },
];

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, isCollapsed, toggleSidebar } = useStateContext();
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


  // Toggle button for collapsing/expanding sidebar
  const handleToggle = () => {
    toggleSidebar(!isCollapsed);
    setMonitorOpen(false); // Close dropdowns when toggling
    setControlOpen(false);
  };

  return (
    <div className={`h-screen overflow-auto pb-10 bg-[#003F3F] transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-full'}`}>
      {activeMenu && (
        <>
          <div className="flex justify-center items-center bg-[#F0FFF0] p-3 mb-4">
            <Link to="/dashboard" className="flex items-center gap-3">
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

{/* Monitor Link */}
<div className="mt-3">
        <div 
          className={`flex items-center justify-between p-3 ${normalLink}`} 
          onClick={() => setMonitorOpen(!isMonitorOpen)}
        >
          <div 
            className="flex items-center gap-5"
            onMouseEnter={() => setHoveredIcon('monitor')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <FiMonitor style={hoveredIcon === 'monitor' ? rotateStyle : {}} className="text-xl text-white" />
            {!isCollapsed && <span className="text-white">Monitor</span>}
          </div>
          {isMonitorOpen ? <MdKeyboardArrowUp className="text-white" /> : <MdKeyboardArrowDown className="text-white" />}
        </div>

        {/* Dropdown for Monitor */}
        {(isMonitorOpen || (isCollapsed && hoveredIcon === 'monitor')) && (
          !isCollapsed ? (
            <div className="pl-5">
              {monitorLinks.map((item, index) => (
                <NavLink 
                  key={index}
                  to={item.path}
                  className="block py-2 px-4 text-white font-medium hover:bg-green-500 transition-colors duration-200 rounded"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          ) : (
            <DropdownMenu items={monitorLinks} onClose={() => setMonitorOpen(false)} />
          )
        )}
      </div>

      {/* Control Link */}
      <div className="mt-3">
        <div 
          className={`flex items-center justify-between p-3 ${normalLink}`} 
          onClick={() => setControlOpen(!isControlOpen)}
        >
          <div 
            className="flex items-center gap-5"
            onMouseEnter={() => setHoveredIcon('control')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <FiSettings style={hoveredIcon === 'control' ? rotateStyle : {}} className="text-xl text-white" />
            {!isCollapsed && <span className="text-white">Control</span>}
          </div>
          {isControlOpen ? <MdKeyboardArrowUp className="text-white" /> : <MdKeyboardArrowDown className="text-white" />}
        </div>

        {/* Dropdown for Control */}
        {(isControlOpen || (isCollapsed && hoveredIcon === 'control')) && (
          !isCollapsed ? (
            <div className="pl-5">
              {controlLinks.map((item, index) => (
                <NavLink 
                  key={index}
                  to={item.path}
                  className="block py-2 px-4 text-white font-medium hover:bg-green-500 transition-colors duration-200 rounded"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          ) : (
            <DropdownMenu items={controlLinks} onClose={() => setControlOpen(false)} />
          )
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
            <NavLink
              to="/documentation"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onMouseEnter={() => setHoveredIcon('documentation')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <FiBook style={hoveredIcon === 'documentation' ? rotateStyle : {}} className="text-xl text-white" />
              {!isCollapsed && <span className="text-white">Documentation</span>}
            </NavLink>
          </div>
           {/* Toggle Button for Sidebar */}
           <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <button 
              onClick={handleToggle} 
              className="flex items-center justify-center text-white p-2 hover:bg-green-500 rounded-full transition-all duration-300"
            >
              {isCollapsed ? <BsArrowRightCircle size={24} /> : <BsArrowLeftCircle size={24} />}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;