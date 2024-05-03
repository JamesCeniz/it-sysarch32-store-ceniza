import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProductsList from './ProductsList';
import ProductDetails from './ProductDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} /> {/* Redirect to /product */}
        <Route path="/products" element={<ProductsList/>} />
        <Route path="/products/:productId" element={<ProductDetails/>} />
      </Routes>
    </Router>
  );
};

export default App;
