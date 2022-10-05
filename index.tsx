import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from 'react-router-dom';

import App from './App';
import  PageProductDetail  from './pages/PageProductDetail';
import Cart from './pages/Cart'
import CartList from './pages/CartList'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path=":lang/pageDetail/:productid"
          element={<PageProductDetail />}
        />
        <Route path="/pageDetail/:productid" element={<PageProductDetail />} />
        <Route path="/Cart" element={ <CartList/>} />
        <Route path="/Cart" element={ <Cart/>} />
        {/* <Route path=":lang/invoices/:invoiceid" element={<Invoices />} /> */}
      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </StrictMode>
);
