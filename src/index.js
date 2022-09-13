import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteManager from './components/RouteManager';
import Footer from './components/Footer';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteManager/>
    <Footer/>
  </React.StrictMode>
);