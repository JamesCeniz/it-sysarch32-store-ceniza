// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductsList from './ProductsList';
import ProductDetails from './ProductDetails';
import Navbar from './Navbar';
import Footer from './Footer';
import Cart from './Cart';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} /> {/* Use element prop instead of component */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
