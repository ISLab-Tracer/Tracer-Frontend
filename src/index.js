import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import LoadingManager from './Utils/LoadingManager';
import SessionManager from 'Hooks/SessionManager';

console.log(`
--------------------------
\n
Release Version: V1.0.0.1
Last Release: 2023.03.28
\n
--------------------------`);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <SessionManager>
      <LoadingManager>
        <App />
      </LoadingManager>
    </SessionManager>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
