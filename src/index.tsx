import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MapProvider from './provider/map-provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapProvider>
      <App />
    </MapProvider>
  </React.StrictMode>
);