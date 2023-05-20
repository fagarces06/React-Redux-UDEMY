import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import  App  from './App.js'; // IMPORTANTE QUE EL App.js tenga esta url


createRoot(document.getElementById('app')).render(<App/>);