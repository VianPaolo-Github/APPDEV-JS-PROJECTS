import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ProductListing from './components/ProductListing';
import ReviewPage from './components/ReviewPage';
import CompanyProfile from './components/CompanyProfile';
import DeveloperPage from './components/DeveloperPage';
import ProductManual from './components/ProductManual';
import ResumePage from './components/ResumePage';
import './App.css'

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />

        <Route path="/products" element={<ProductListing/>} />
        <Route path="/reviews" element={<ReviewPage/>} />
        <Route path="/company-profile" element={<CompanyProfile/>} />
        <Route path="/developer" element={<DeveloperPage/>} />
        <Route path="/product/:id" element={<ProductManual />} />
        <Route path="/resume/:id" element={<ResumePage />} />
      </Routes>
    </Router>
  );
}

export default App
