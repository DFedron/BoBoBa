import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from "react-router-dom";
import { Auth0ProviderWithHistory } from "./auth0-provider-with-history";
import { EnvProvider } from "./context/env.context";
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      {
        //@ts-ignore
        <EnvProvider>
          <Auth0ProviderWithHistory>
            <App />
          </Auth0ProviderWithHistory>
        </EnvProvider>
      }
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
