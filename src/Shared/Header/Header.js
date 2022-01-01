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
          width="80"
          height="60"
          className="d-inline-block align-top"
        /></Navbar.Brand>
    <Nav className="justify-content-end pt-3 ">
   
        <p variant="dark" className="" > <i class="fas fa-phone-alt text-danger bold  "></i> Call Us <span>+522 234 56789</span> </p>
        <p variant="dark " className="ms-3" ><i class="far fa-envelope-open text-danger bold"></i> Email us help@domain.com </p>
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
      <Nav.Link href="#features">Service</Nav.Link>
      <Nav.Link href="#pricing">Specislist</Nav.Link>
    </Nav>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  
  

  <br />
 
</>
       
        
    );
};

export default Header;
