// Cart.jsx
import React from 'react';
import './Cart.css'; // Import Cart.css for styling

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    window.location.reload(); // Refresh page to reflect changes
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            <img src={item.imageUrl} alt="Product" className="product-details-image" />
            <div className="cart-item-details">
              <p>{item.name}</p>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(index)} className='delete'>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
