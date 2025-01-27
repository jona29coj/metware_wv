import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Sidebar, Navbar } from './components';
import './App.css';
import Dashboard from './sections/Dashboard/Dashboard';
import AlertsOverview from './sections/Alerts';
import Reports from './sections/Reports';

const AppLayout = ({ children, activeBlock, setActiveBlock }) => {
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
          {!isLoginPage && <Navbar activeBlock={activeBlock} setActiveBlock={setActiveBlock} />}
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  // State to manage the active dashboard block (e.g., Energy, Water, Air)
  const [activeBlock, setActiveBlock] = useState('Energy');

  return (
    <BrowserRouter>
      <AppLayout activeBlock={activeBlock} setActiveBlock={setActiveBlock}>
        <Routes>
          <Route
            path="/dashboard"
            element={<Dashboard activeBlock={activeBlock} />}
          />
          <Route
            path="/alerts"
            element={<AlertsOverview />}
          />
          <Route
            path="/reports"
            element={<Reports />}
          />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
