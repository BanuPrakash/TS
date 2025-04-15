import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from './context/CartContextProvider';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <CartContextProvider>
  <App />
  </CartContextProvider>
  
  </BrowserRouter>
);
