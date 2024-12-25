import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.scss';
import { Provider } from 'react-redux';
import { store } from './store';

const root = createRoot(document.getElementById('app'));
root.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>
);
