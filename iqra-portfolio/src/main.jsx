import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@emotion/react";
import { theme } from "./ThemeProvider/AppThemeProvider";
import { BrowserRouter } from 'react-router-dom';
import ReactGA from "react-ga4";
ReactGA.initialize('G-1TSD80KJ1L');
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
          <BrowserRouter>
    <App />
           </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
