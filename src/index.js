import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { PaginationContextProvider } from './context/PaginationContext';


ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <PaginationContextProvider>
       <App />
      </PaginationContextProvider>
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
