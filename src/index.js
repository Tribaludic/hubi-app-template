import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import appTheme from './config/app_theme';
import Home from './pages/home/Home';
import Page1 from './pages/page1/Page1';
import ServiceDesk from './pages/sd/ServiceDesk';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={appTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/sd" element={<ServiceDesk />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
);