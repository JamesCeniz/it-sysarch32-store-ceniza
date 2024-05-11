import React, { useState, useEffect } from 'react';
import './Cart.css'; // Import Cart.css for styling

const Cart = () => {
  const [sessionId, setSessionId] = useState(null);
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    window.location.reload(); // Refresh page to reflect changes
  };

  const handleBuyNow = async (index) => {
    try {
      const response = await fetch('http://localhost:4000/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productName: cartItems[index].name,
          price: cartItems[index].price * 100,
        }),
      });
      const data = await response.json();
      setSessionId(data.id);
    } catch (error) {
      console.error('Error creating checkout session:', error);
    }
  };

  useEffect(() => {
    if (sessionId) {
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/';
      script.async = true;
      script.onload = () => {
        const stripe = window.Stripe('pk_test_51PF3OE2LIH2lHJASiwkrXCqKbBFOvdbyIZQusvOVYcceHgfnk2Cc0duYI6A8lBRkZcUx0C1hID2LzLdkMyiDC9MX00oJh6oMPG');
        stripe.redirectToCheckout({
          sessionId: sessionId
        });
      };
      document.body.appendChild(script);
    }
  }, [sessionId]);

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
              <button onClick={() => handleBuyNow(index)} className='buy-now'>Buy Now</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
