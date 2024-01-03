import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import ProductsProvider from "./ProductContext";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </StrictMode>
);
