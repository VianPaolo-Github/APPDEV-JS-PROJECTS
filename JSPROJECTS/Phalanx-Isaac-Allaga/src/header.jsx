import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.css';

function Header() {
  return (
    <div className="header-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid"> 
          <a className="navbar-brand" href="#">PHALANX</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNavAltMarkup" 
            aria-controls="navbarNavAltMarkup" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">Home <span className="visually-hidden">(current)</span></a>
              <a className="nav-item nav-link" href="#">Services</a>
              <a className="nav-item nav-link" href="#">Operations</a>
              <a className="nav-item nav-link" href="#">Careers</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
