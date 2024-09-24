import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import './App.css'; // Assuming you have some global styles

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here if necessary */}
      </Routes>
    </Router>
  );
};

export default App;
