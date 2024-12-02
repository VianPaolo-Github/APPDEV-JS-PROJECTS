import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products'; // Ensure this imports your products data

const ProductManual = () => {
    const { id } = useParams(); // Get product ID from URL
    const navigate = useNavigate(); // Hook to navigate programmatically
    const product = products.find(p => p.id === parseInt(id)); // Find product by ID

    // Check if product is found
    if (!product) {
        return (
            <div className="app-container">
                <h1>Product Not Found</h1>
                <button onClick={() => navigate(-1)} style={{ marginBottom: '20px' }}>
                    Back
                </button>
                <p>The product you are looking for does not exist.</p>
            </div>
        );
    }

    const [commentText, setCommentText] = useState('');

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        
        if (commentText.trim()) {
            // Add new comment to the product's comments array
            product.comments.push({ text: commentText });
            setCommentText(''); // Reset input field
            // Optionally force a re-render by updating state (not necessary but can be done)
            // setComments([...product.comments]);
            //alert("Comment added!"); // Feedback to user
        }
    };

    return (
        <div className="app-container">
            <h1>{product.name} Manual</h1>
            <button onClick={() => navigate(-1)} style={{ marginBottom: '20px' }}>
                Back
            </button>
            <img src={product.image} alt={product.name} style={{ width: '300px', height: 'auto' }} />
            <p>{product.description}</p>
            <p><strong>Materials:</strong> {product.materials}</p>
            <p><strong>Switches:</strong> {product.switches}</p>
            <p><strong>Connection Type:</strong> {product.connectionType}</p>

            {/* Display comments */}
            <h2>Comments:</h2>
            {product.comments.length > 0 ? (
                product.comments.map((comment, index) => (
                    <div key={index} className="review-card">
                        <p>{comment.text}</p>
                    </div>
                ))
            ) : (
                <p>No comments yet.</p>
            )}

            {/* Comment form */}
            <form onSubmit={handleCommentSubmit} className="comment-form">
                <input 
                    type="text" 
                    value={commentText} 
                    onChange={(e) => setCommentText(e.target.value)} 
                    placeholder="Add a comment..." 
                    required 
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ProductManual;