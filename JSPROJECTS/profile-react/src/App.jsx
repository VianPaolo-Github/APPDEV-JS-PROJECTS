import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import "./index.css";

import Footer from "./Footer"
import Body from "./Body"
import Header from "./Header"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App (){
 

  return (
    <>

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">REACT</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#prevproject">Prev Project</Nav.Link>
            <Nav.Link href="#repository">To React Repository</Nav.Link>
            <Nav.Link href="#nextproject">Next Project</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Header />

      <Body />
      <Footer /> {/*this works*/}
    </>
  )
}

export default App;
