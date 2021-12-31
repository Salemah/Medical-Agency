import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import m1 from '../../images/1.jpg';
import m2 from '../../images/logo.png';

const Header = () => {
    return (
        
<>

<Navbar bg="light" variant="dark">
    <Container>
    {/* //<Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
    <Navbar.Brand href="#home">
        <img
          alt=""
          src={m2}
          width="60"
          height="40"
          className="d-inline-block align-top"
        /></Navbar.Brand>
    <Nav className="me-auto">
        <p variant="dark" >Home </p>
        <p variant="dark" >  Call Us +522 234 56789 </p>
        <p variant="dark" > Email us help@domain.com </p>
      {/* <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    </Nav>
    </Container>
  </Navbar>

{/* top end */}

  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
  

  <br />
 
</>
       
        
    );
};

export default Header;
