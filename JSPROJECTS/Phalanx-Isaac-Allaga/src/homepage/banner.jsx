import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import BannerImage from '../assets/Banner2Resized.jpeg'; 
import '../styles.css';

function Banner() {
  return (
    <div className="banner">
      <img 
        src={BannerImage}
        alt="Banner"
        className="img-fluid" // Bootstrap class for responsive images
      />
      <div className="carousel-caption">
        <h5>Your Caption Here</h5> 
        <p>Your description here.</p>
      </div>
    </div>
  );
}

export default Banner;
 