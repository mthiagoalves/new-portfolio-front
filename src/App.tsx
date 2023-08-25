import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';
import { BrowserRouter } from "react-router-dom";
import Router from 'types/router';
import './App.css';
import Modal from 'react-modal';

const queryClient = new QueryClient();

Modal.setAppElement('#root'); 

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
