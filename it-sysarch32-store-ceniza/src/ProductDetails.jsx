// src/ProductDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from './Config/firebase';
import './ProductDetails.css'; // Import CSS file for ProductDetails styling

const ProductDetails = () => {
  const { productId } = useParams(); // Get the productId from the URL params
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = firestore.collection('products').doc(productId); // Get the product document reference
        const snapshot = await productRef.get(); // Fetch the product document
        if (snapshot.exists) {
          // If the product exists, set it to state
          setProduct({ id: snapshot.id, ...snapshot.data() });
        } else {
          // If the product doesn't exist, handle accordingly (e.g., show a message)
          console.error('Product not found.');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]); // Fetch product whenever productId changes

  const addToCart = () => {
    // Implement logic to add the product to the cart (e.g., using localStorage, Redux, etc.)
    // For simplicity, let's assume we're using localStorage here
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(product);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert('Product added to cart!');
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="product-title">Product Details</h1>
      <div className="product-details-card">
        <h2 className="product-name">{product.name}</h2>
        <div className="product-info">
          <div className="product-wrapper">
            <img src={product.imageUrl} alt="Product" className="product-details-image" />
          </div>
          <div className="product-description">
            <p className="product-price">{product.price}</p>
            <p>{product.description}</p>
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
