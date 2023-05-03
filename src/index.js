import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import './index.css';
import App from './App';
import { store } from './redux/store';
import { AuthProvider } from './contexts/JWTContext';
import { CollapseDrawerProvider } from './contexts/CollapseDrawerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <ReduxProvider store={store}>
      <CollapseDrawerProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CollapseDrawerProvider>
    </ReduxProvider>
  </AuthProvider>
);
