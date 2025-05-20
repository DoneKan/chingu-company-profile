import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './assets/Themes/global';
import ChinguHomePage from './pages/HomePage';
import ContactUs from './pages/Contact';
import Navbar from './components/Navbar/navbar';
import  NotFound  from './pages/NotFound';
import AboutUs from './pages/AboutUs';
import ChinguStudioPage from './pages/chingu-studio';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
        <Router>
          <Navbar /> {/* Always visible on all pages */}
          <Routes>
            <Route path="/" element={<ChinguHomePage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/studio" element={<ChinguStudioPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
          </Routes>
        </Router>
      </ThemeProvider>
  );
}

export default App;
