import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import DonateProvider from './Context/DonateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DonateProvider>
      <App />
    </DonateProvider>
  </React.StrictMode>
);