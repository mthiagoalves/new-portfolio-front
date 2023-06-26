import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';
import { BrowserRouter } from "react-router-dom";
import Router from 'types/router';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
   <ThemeProvider theme={theme}>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Router/>
      </QueryClientProvider>
    </BrowserRouter>
   </ThemeProvider>
  );
}

export default App;
