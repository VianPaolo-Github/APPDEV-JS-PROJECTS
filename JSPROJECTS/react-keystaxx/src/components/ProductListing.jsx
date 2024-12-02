import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products'; // Ensure this imports your

const ProductListing = () => {
    return (
        <div className="app-container">
            <h1>Product Listing</h1>
            <div className="product-listing">
                {products.map(product => (
                    <Link key={product.id} to={`/product/${product.id}`} className="card">
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductListing;