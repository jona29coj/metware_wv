import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './sections/Dashboard/Dashboard';
import AlertsOverview from './sections/Alerts';
import Reports from './sections/Reports';
import Profile from './sections/Profile';
import Files from './sections/Files';
import BuildingOverview from './sections/Monitor/BuildingOverview';
import Diesel from './sections/Monitor/Diesel';
import Zones from './sections/Monitor/Zones';
import Emd from './dcomponents/Emd';
import Dgd from './dcomponents/Dgd';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  const [activeBlock, setActiveBlock] = useState('Energy');
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 1024);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      } else if (window.innerWidth < 1024) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
    setRefreshKey((prevKey) => prevKey + 1); // Triggers re-render of components
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-main-bg min-h-screen flex">
        {/* Sidebar */}
        <div
          className={`bg-white shadow-md transition-all duration-300 ${
            isCollapsed ? 'w-16 absolute sm:relative' : 'w-56'
          }`}
        >
          <Sidebar isCollapsed={isCollapsed} setIsCollapsed={toggleSidebar} />
        </div>

        {/* Main Content */}
        <div key={refreshKey} className="flex-1 flex flex-col min-h-screen overflow-hidden max-w-full transition-all duration-300">
          <Navbar 
            activeBlock={activeBlock} 
            setActiveBlock={setActiveBlock} 
            isCollapsed={isCollapsed} 
            setIsCollapsed={toggleSidebar} 
          />
          <div className="flex-1 overflow-auto max-w-full mt-[-10px]">
            <Routes>
              <Route path="/dashboard" element={<Dashboard activeBlock={activeBlock} />} />
              <Route path="/alerts" element={<AlertsOverview />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/files" element={<Files />} />
              <Route path="/monitor/overview" element={<BuildingOverview />} />
              <Route path="/monitor/zones" element={<Zones />} />
              <Route path="/monitor/diesel" element={<Diesel />} />
              <Route path="/meter/:id" element={<Emd />} />
              <Route path="/generator/:id" element={<Dgd />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
