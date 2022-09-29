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
import PageProductDetail from './pages/productdetail';

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
        {/* <Route path=":lang/invoices/:invoiceid" element={<Invoices />} /> */}
      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </StrictMode>
);
