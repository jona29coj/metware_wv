import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FiMonitor, FiSettings, FiAlertCircle, FiFileText, FiHome, FiBook, FiUser } from "react-icons/fi";
import { FaChartLine } from "react-icons/fa";
import logo from "../logo2.png";

const links = {
  monitor: [
    { name: "Building Overview", path: "/monitor/overview" },
    { name: "Zones", path: "/monitor/zones" },
    { name: "Diesel", path: "/monitor/diesel" },
  ],
};

const Sidebar = () => {
  const [dropdown, setDropdown] = useState({ monitor: false });

  // Styles
  const activeLink = `flex items-center gap-5 p-3 rounded-lg text-white text-md m-2 bg-green-600 shadow transition-all duration-300`;
  const normalLink = `flex items-center gap-5 p-3 rounded-lg text-md text-gray-700 hover:bg-green-500 hover:text-white transition-all duration-300 m-2`;

  return (
    <div className="h-screen w-full overflow-auto bg-white shadow-lg transition-all duration-300">
      {/* Sidebar Header */}
      <div className="flex justify-center items-center bg-white p-5">
        <Link to="/">
          <img src={logo} alt="logo" className="h-30 w-auto object-contain" />
        </Link>
      </div>

      {/* Elements Score (Hidden on md and sm) */}
      <div className="flex flex-col items-center bg-white py-4 px-4 rounded-lg shadow border mx-4 mt-2 lg:flex md:hidden sm:hidden">
        <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Elements Score
        </h3>
        <p className="text-green-600 text-xl font-bold mt-1">760</p>
      </div>

      <div className="mt-8">
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          <FiHome className="text-xl" />
          <span className="lg:block md:hidden sm:hidden">Dashboard</span>
        </NavLink>

        {/* Dropdown for Monitor */}
        <div className="mt-4">
          <div
            className={`flex items-center justify-between p-3 ${normalLink} cursor-pointer`}
            onClick={() => setDropdown((prev) => ({ ...prev, monitor: !prev.monitor }))}
          >
            <div className="flex items-center gap-5">
              <FiMonitor className="text-xl" />
              <span className="lg:block md:hidden sm:hidden">Monitor</span>
            </div>
            {!dropdown.monitor ? <MdKeyboardArrowDown className="lg:block md:hidden sm:hidden" /> : <MdKeyboardArrowUp className="lg:block md:hidden sm:hidden" />}
          </div>
          {dropdown.monitor && (
            <div className="pl-6 mt-2 space-y-2">
              {links.monitor.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className="block py-2 px-4 text-gray-600 hover:bg-green-500 hover:text-white rounded"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        {/* Disabled Control Section */}
        <div className="flex items-center gap-5 p-3 rounded-lg text-md text-gray-400 cursor-not-allowed m-2">
          <FiSettings className="text-xl" />
          <span className="lg:block md:hidden sm:hidden">Control</span>
        </div>

        {/* Static Links */}
        {[
          { name: "Optimize", path: "#", icon: <FaChartLine /> },
          { name: "Alerts", path: "/alerts", icon: <FiAlertCircle /> },
          { name: "Reports", path: "/reports", icon: <FiFileText /> },
          { name: "Files", path: "/files", icon: <FiBook /> },
          { name: "Profile", path: "/profile", icon: <FiUser /> },
        ].map((item, index) => (
          <NavLink
            key={index}
            to={item.name === "Optimize" ? "#" : item.path}
            className={({ isActive }) =>
              item.name === "Optimize"
                ? "flex items-center gap-5 p-3 rounded-lg text-gray-400 cursor-not-allowed m-2"
                : isActive
                ? activeLink
                : normalLink
            }
          >
            {item.icon}
            <span className="lg:block md:hidden sm:hidden">{item.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
