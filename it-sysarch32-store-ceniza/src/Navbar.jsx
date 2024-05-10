// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>JujutSu Kaisen Shop</h1>
      <div className="navbar-links">
        <Link to="/products" className='products'>Products</Link> {/* Link to the products page */}
        <Link to="/cart" className="view-cart-link">View Cart</Link> {/* Link to the cart page with class */}
      </div>
      <hr className="navbar-divider" /> 
    </div>
  );
};

export default Navbar;
