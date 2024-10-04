import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import logo from '../logo2.png';

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, isCollapsed } = useStateContext(); // Ensure isCollapsed is available

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className={`h-screen overflow-auto pb-10 bg-[#003F3F] transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      {activeMenu && (
        <>
          {/* Logo section with white background */}
          <div className="flex justify-center items-center bg-[#F0FFF0] p-3 mb-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="logo" className={`h-28.5 w-28.5 object-contain ${isCollapsed ? 'mx-auto' : ''}`} />
            </Link>
          </div>

          {/* Savings card */}
          {!isCollapsed && ( // Show only when not collapsed
            <div className="bg-white shadow-md rounded-lg p-4 mb-4 mx-3">
              <h3 className="text-lg font-semibold">Savings Overview</h3>
              <p className="text-sm text-gray-600">Energy Savings: <span className="font-bold">100 kWh</span></p>
              <p className="text-sm text-gray-600">Cost Savings: <span className="font-bold">$20</span></p>
            </div>
          )}

          {/* Close button for mobile view */}
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

          {/* Navigation Links */}
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                {!isCollapsed && ( // Show title only when not collapsed
                  <p className="text-white m-3 mt-4 uppercase">
                    {item.title}
                  </p>
                )}
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    <span className="text-white">{link.icon}</span>
                    {!isCollapsed && ( // Show link name only when not collapsed
                      <span className="capitalize text-white">{link.name}</span>
                    )}
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
