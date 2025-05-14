import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './assets/Themes/global';
import ChinguHomePage from './pages/HomePage';
import ContactUs from './pages/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<ChinguHomePage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;