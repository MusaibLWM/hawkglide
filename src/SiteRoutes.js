// src/SiteRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';

const SiteRoutes = () => {
  return (
    <Routes>
      {/* Add other routes as needed */}
      <Route path="/" element={<Home />} />
      {/* Add more routes here if necessary */}
    </Routes>
  );
};

export default SiteRoutes;
