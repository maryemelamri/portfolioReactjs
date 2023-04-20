import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'primereact/resources/themes/saga-blue/theme.css';

import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/themes/lara-light-purple/theme.css';
import 'primereact/resources/themes/lara-light-teal/theme.css';
import 'primereact/resources/themes/lara-dark-blue/theme.css';
import 'primereact/resources/themes/lara-dark-indigo/theme.css';
import 'primereact/resources/themes/lara-dark-purple/theme.css';
import 'primereact/resources/themes/lara-dark-teal/theme.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
