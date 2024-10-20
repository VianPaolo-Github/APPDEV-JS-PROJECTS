import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Banner from './banner' 
import About from './about'
import '../styles.css';

function Home() {
  return (
    <div className='contents'>
      <Banner />
      <About />
    </div>
  );
}

export default Home;
