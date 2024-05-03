// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProductsList from './ProductsList';
import ProductDetails from './ProductDetails';
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './Footer'; // Import the Footer component

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Include the Navbar component */}
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} /> {/* Redirect to /products */}
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
};

export default App;
