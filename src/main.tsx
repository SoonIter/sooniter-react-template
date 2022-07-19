import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FocaProvider } from 'foca';
import './store/store'
import 'uno.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <FocaProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FocaProvider>
  </React.StrictMode>,
);
