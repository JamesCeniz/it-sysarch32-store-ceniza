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
            <div className="products-list">
                {/* Banner Holder with Curved Corners */}
                <div className="banner-holder">
                    {/* Banner */}
                    <div className="banner">
                        <img className="bannerImage" src="https://pbs.twimg.com/media/EnqBQtsXIAExF_a?format=jpg&name=large" alt="Featured" />
                    </div>
                </div>
                <div className="Subtitle">
                <h1>Featured</h1> {/* Move the "Featured" heading above the product cards */}
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
                                    <p className='price'>{product.price}</p>
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
