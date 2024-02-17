// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SiteRoutes from './SiteRoutes';
import Header from './components/Header'; // Update the import path
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <SiteRoutes />
      <Footer />
    </Router>
  );
}

export default App;
