// src/ProductDetails.jsx
import React from 'react';

const ProductDetails = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <p>Image: <img src={product.imageUrl} alt="Product" className="product-image" /></p>
      <p>Name: {product.name}</p>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetails;
