import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Products from './Products';
import Login from './login';
import ProductDetailsPage from './ProductDetailsPage';
import CartPage from './CartPage';

export function ProductRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />}/>
        </Routes>
      </Router>
    </>
  );
}
