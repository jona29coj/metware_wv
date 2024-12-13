import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { FiMonitor, FiSettings, FiAlertCircle, FiFileText, FiHome, FiBook } from 'react-icons/fi';
import { useStateContext } from '../contexts/ContextProvider';
import logo from '../logo2.png';
import { FaChartLine } from 'react-icons/fa';



// Links for Monitor and Control sections
const monitorLinks = [
  { name: 'Building Overview', path: '/monitor/overview' },
  { name: 'Client', path: '/monitor/client' },
  { name: 'Cooling/HVAC', path: '/chillerdetail' },
  { name: 'Renewable Energy', path: '/monitor/performance' },
  { name: 'Batteries', path: '/monitor/batteries' },
];

const controlLinks = [
  { name: 'UPS Battery Control', path: '/control/upsbattery' },
  { name: 'Thermal Control', path: '/control/thermal' },
  { name: 'LTO Battery Control', path: '/control/ltobattery' },
  { name: 'Hot Water Control', path: '/control/watercontrol' },
  { name: 'IOE Battery Control', path: '/control/ioebattery' },
];

const Sidebar = () => {
  const [isMonitorOpen, setMonitorOpen] = useState(false);
  const [isControlOpen, setControlOpen] = useState(false);

    // Scroll to top function
    const scrollToTop = () => {
      window.scrollTo(0, 0); // This will immediately scroll to the top
    };

  const activeLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-green-600 shadow-md transition-all duration-300';
  const normalLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 hover:bg-green-500 hover:text-white transition-all duration-300 m-2';

  return (
    <div className="h-screen overflow-auto pb-10 bg-[#003F3F] w-full">
        <>
          <div className="flex justify-center items-center bg-white p-3 mb-4">
            <Link to="/dashboard" className="flex items-center gap-3">
              <img src={logo} alt="logo" className="h-28.5 w-25 object-contain mx-auto" />
            </Link>
          </div>

          <div className="mt-10 mx-auto">
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={scrollToTop}
            >
              <FiHome className="text-xl text-white" />
              <span className="text-white">Dashboard</span>
            </NavLink>

            {/* Monitor Link */}
            <div className="mt-3">
              <div
                className={`flex items-center justify-between p-3 ${normalLink}`}
                onClick={() => setMonitorOpen(!isMonitorOpen)}
              >
                <div className="flex items-center gap-5">
                  <FiMonitor className="text-xl text-white" />
                  <span className="text-white">Monitor</span>
                </div>
                {isMonitorOpen ? (
                  <MdKeyboardArrowUp className="text-white" />
                ) : (
                  <MdKeyboardArrowDown className="text-white" />
                )}
              </div>

              {/* Dropdown for Monitor */}
              {isMonitorOpen && (
                <div className="pl-5">
                  {monitorLinks.map((item, index) => (
                    <NavLink
                      key={index}
                      to={item.path}
                      className="block py-2 px-4 text-white font-medium hover:bg-green-500 transition-colors duration-200 rounded"
                      onClick={scrollToTop}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* Control Link */}
            <div className="mt-3">
              <div
                className={`flex items-center justify-between p-3 ${normalLink}`}
                onClick={() => setControlOpen(!isControlOpen)}
              >
                <div className="flex items-center gap-5">
                  <FiSettings className="text-xl text-white" />
                  <span className="text-white">Control</span>
                </div>
                {isControlOpen ? (
                  <MdKeyboardArrowUp className="text-white" />
                ) : (
                  <MdKeyboardArrowDown className="text-white" />
                )}
              </div>

              {/* Dropdown for Control */}
              {isControlOpen && (
                <div className="pl-5">
                  {controlLinks.map((item, index) => (
                    <NavLink
                      key={index}
                      to={item.path}
                      className="block py-2 px-4 text-white font-medium hover:bg-green-500 transition-colors duration-200 rounded"
                      onClick={scrollToTop}

                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/optimize" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
              <FaChartLine className="text-xl text-white" />
              <span className="text-white">Optimize</span>
            </NavLink>
            <NavLink to="/alerts" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
              <FiAlertCircle className="text-xl text-white" />
              <span className="text-white">Alerts</span>
            </NavLink>
            <NavLink to="/reports" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
              <FiFileText className="text-xl text-white" />
              <span className="text-white">Reports</span>
            </NavLink>
            <NavLink
              to="/documentation"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <FiBook className="text-xl text-white" />
              <span className="text-white">Files</span>
            </NavLink>
          </div>
        </>
    </div>
  );
};

export default Sidebar;
