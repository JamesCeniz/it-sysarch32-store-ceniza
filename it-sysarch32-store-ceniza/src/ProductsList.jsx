import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { firestore } from './Config/firebase';
import './index.css';

const ProductsList = ({ onSelectProduct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await firestore.collection('products').get();
        const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <div>
      {/* Navbar */}
      <nav>
        {/* Your navbar content here */}
      </nav>

      {/* Products List */}
      <div className="products-list">
        <h2>Products List</h2>
        
        {/* Banner */}
        <div className="banner">
          <img className="bannerImage" src="https://www.looper.com/img/gallery/jujutsu-kaisen-season-2-release-date-cast-and-plot-what-we-know-so-far/l-intro-1680014975.jpg" alt="Featured" />
        </div>
        
        <ul className="product-cards">
          {products.map(product => (
            <li key={product.id} className="product-card">
              {/* Wrap each product card with a Link */}
              <Link to={`/products/${product.id}`} className="product-link">
                <div className="product-image-wrapper">
                  <img src={product.imageUrl} alt="Product" className="product-image" />
                </div>
                <div className="product-details">
                  <h3 className="product-name">{product.name}</h3>
                  <p>{product.price}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsList;
