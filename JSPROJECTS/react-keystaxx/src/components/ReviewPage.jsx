import React from 'react';

const reviews = [
   { id: 1, text: "Great quality and feel!", author: "John Doe" },
   { id: 2, text: "Best keyboard I've ever used.", author: "Jane Smith" },
];

const ReviewPage = () => {
   return (
       <div className="app-container">
           <h1>Client Reviews</h1>
           {reviews.map(review => (
               <div key={review.id} className="review-card">
                   <p>"{review.text}" - {review.author}</p>
               </div>
           ))}
       </div>
   );
};

export default ReviewPage;
