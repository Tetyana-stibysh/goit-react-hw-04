import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        removeDelay: 1000,
        style: {
          background: '#c8c0c0',
          color: '#cb2323',
          fontWeight: ' 600',
        },
      }}
    />
  </StrictMode>
);
