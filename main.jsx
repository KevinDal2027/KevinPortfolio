import { createRoot } from 'react-dom/client';
import App from './src/App';
import React from 'react';

const root = document.getElementById("root");
const rootStart = createRoot(root);
rootStart.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)