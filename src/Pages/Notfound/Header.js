import React from 'react';
import { Button, ButtonToolbar, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../burj-alarab-2/src/Hooks/useAuth';
import { NavHashLink } from 'react-router-hash-link';

const Header = () => {
  const{user,logout} = useAuth();
    return (
        
            <>
  <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand  as={NavHashLink} to="/home#home">Genius Car Mechanic</Navbar.Brand>
    <Navbar.Toggle />
 
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={NavHashLink} to='/home#home'>Home</Nav.Link>
      <Nav.Link as={NavHashLink} to="/home#experts">Experts</Nav.Link>
      <Nav.Link as={NavHashLink} to="/home#services">Services</Nav.Link>
      {
      user?.email?<button className="btn btn-outline-light me-2" onClick={logout}>Logout</button>:<Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
      {
      user?.email &&<Navbar.Text>
        Signed in as: {user.displayName}
      </Navbar.Text>
      }
    </Navbar.Collapse>
   
    </Container>
  </Navbar>

  

  
 
</>
        
    );
};

export default Header;