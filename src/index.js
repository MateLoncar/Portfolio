import React from 'react';
import App from './App';
import { LanguageProvider } from './components/LanguageContext';
import { createRoot } from 'react-dom/client';


createRoot(document.getElementById('root')).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
