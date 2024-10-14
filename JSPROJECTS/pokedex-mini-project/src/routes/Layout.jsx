import {Outlet} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

const Layout = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>

      
        <Navbar.Collapse id="justify-content-end">
      
        <Navbar.Brand className = "title-brand header-titles-wrapper" href="/">
            <img
              alt=""
              src="src\assets\team-cyclone.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Team Cyclone
        </Navbar.Brand>
        

        <Nav className="me-auto header-navigation-wrapper">
            <Nav.Link className = "goto-react" href="/about">Who are we?</Nav.Link>
            <Nav.Link className = "goto-react" href="/pokedex">Pokedex</Nav.Link>
            <Nav.Link className = "goto-react" href="/join">Join us</Nav.Link>
        </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Outlet />
    </>
  )
};

export default Layout;