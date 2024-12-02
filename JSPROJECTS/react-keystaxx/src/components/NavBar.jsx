import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/reviews">Reviews</Link>
      <Link to="/company-profile">Company Profile</Link>
      <Link to="/developer">Developer Page</Link>
    </nav>
  );
};

export default NavBar;