import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter } from"react-router-dom"

import { MainPage } from './pages/main';


import './index.css';
import App from './component/app/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
<div>
  <App />
</div>
</BrowserRouter>
);
