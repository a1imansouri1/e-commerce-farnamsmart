import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import store from './store/store';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from './context/AuthProvider';
import { ShippingAddressProvider } from './context/ShippingAddressProvider';
import { CartItemsProvider } from './context/CartItemsProvider'
import { TotalQuantityProvider } from './context/TotalQuantityProvider';
import { TotalAmountProvider } from './context/TotalAmountProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>
      <ShippingAddressProvider>
        {/* <CartItemsProvider>
          <TotalQuantityProvider>
            <TotalAmountProvider> */}
              <AuthProvider>
                <Provider store={store}>
                  <App />
                </Provider>
              </AuthProvider>
            {/* </TotalAmountProvider>
          </TotalQuantityProvider>
        </CartItemsProvider> */}
      </ShippingAddressProvider>
    </Router>
  </React.StrictMode>
);