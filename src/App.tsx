import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';
import { BrowserRouter } from "react-router-dom";
import Router from 'types/router';
import './App.css';

function App() {
  return (
   <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
   </ThemeProvider>
  );
}

export default App;
