import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store, persistor } from './redux/store.js';
import App from './App.jsx';
import 'modern-normalize';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter basename="/CamperRentUA">
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);
