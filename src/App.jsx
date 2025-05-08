import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './assets/Themes/global';
import ChinguHomePage from './pages/HomePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ChinguHomePage />
    </ThemeProvider>
  );
}

export default App;