// src/index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client'; // Alternativa ao ReactDOM
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!); // Cria a raiz para o React 18+

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
