import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Sidebar, Navbar } from './components';
import './App.css';
import Dashboard from './sections/Dashboard/Dashboard';
import AlertsOverview from './sections/Alerts';
import Reports from './sections/Reports';
import Profile from './sections/Profile';
import Files from './sections/Files';
import BuildingOverview from './sections/Monitor/BuildingOverview';
import Diesel from './sections/Monitor/Diesel';
import Zones from './sections/Monitor/Zones';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when route changes
  }, [pathname]);

  return null;
};

const AppLayout = ({ children, activeBlock, setActiveBlock }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  const navbarHeight = 52; // Adjust this value to match the reduced Navbar height

  return (
    <div className="bg-main-bg min-h-screen">
      <div className="flex relative">
        {!isLoginPage && (
          <div className="w-56 fixed sidebar bg-white shadow-md">
            <Sidebar />
          </div>
        )}
        <div
          className={`bg-main-bg min-h-screen ${!isLoginPage ? 'ml-56' : ''} w-full`}
          style={{ paddingTop: !isLoginPage ? `${navbarHeight}px` : '0' }}
        >
          {!isLoginPage && <Navbar activeBlock={activeBlock} setActiveBlock={setActiveBlock} />}
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [activeBlock, setActiveBlock] = useState('Energy');

  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Ensures scroll resets on route change */}
      <AppLayout activeBlock={activeBlock} setActiveBlock={setActiveBlock}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard activeBlock={activeBlock} />} />
          <Route path="/alerts" element={<AlertsOverview />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/files" element={<Files />} />
          <Route path="/monitor/overview" element={<BuildingOverview />} />
          <Route path="/monitor/zones" element={<Zones />} />
          <Route path="/monitor/diesel" element={<Diesel />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
