import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import NoMatch from './pages/NoMatch';
import AppLayout from './components/layout/AppLayout';
import { theme } from './theme/theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
