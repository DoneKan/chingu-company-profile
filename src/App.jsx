import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChinguHomePage from './pages/HomePage';
import ContactUs from './pages/Contact';
import Navbar from './components/Navbar/navbar';
import  NotFound  from './pages/NotFound';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    
      <Router>
        <Navbar /> {/* Always visible on all pages */}
        <Routes>
          <Route path="/" element={<ChinguHomePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
        </Routes>
      </Router>
  );
}

export default App;
