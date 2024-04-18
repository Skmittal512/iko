import React, { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import "../assets/styles/header.scss"
import Logo from '../assets/images/logo.png'

const Header = () => {

  const [showBlogs, setShowBlogs] = useState(false);
  const timeoutRef = useRef(null);

  const handleBlogsMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowBlogs(true);
  };

  const handleBlogsMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowBlogs(false);
    }, 300);
  };

  const handleBlogsClick = () => {
    setShowBlogs(!showBlogs);
  };

  return (
    <Navbar expand="lg" className="mb-3 fixed-top">
      <Container className='custom-container'>
        <Navbar.Brand href="#" className="me-auto">
          <img src={Logo} alt="" style={{height: "35px"}}/>
        </Navbar.Brand>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
            <img src={Logo} alt="" style={{height: "35px"}}/>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <Nav.Link to="/" className="mx-lg-4" as={NavLink}>
                Home
              </Nav.Link>
              <Nav.Link to="/about" className="mx-lg-4" as={NavLink}>
                About
              </Nav.Link>
              <Nav.Link to="/contact" className="mx-lg-4" as={NavLink}>
                Contact
              </Nav.Link>
              <Nav.Link to="/portfolio" className="mx-lg-4" as={NavLink}>
                Portfolio
              </Nav.Link>
              <NavDropdown
                title="Blogs"
                show={showBlogs}
                onMouseEnter={handleBlogsMouseEnter}
                onMouseLeave={handleBlogsMouseLeave}
                onClick={handleBlogsClick}
              >
                <NavDropdown.Item to="/blogs1" as={NavLink}>
                  Blog 1
                </NavDropdown.Item>
                <NavDropdown.Item to="/blogs2" as={NavLink}>
                  Blog 2
                </NavDropdown.Item>
                <NavDropdown.Item to="/blogs3" as={NavLink}>
                  Blog 3
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <a href="" className="login-button d-none d-lg-block">
          Login
        </a>
        <Navbar.Toggle aria-controls="offcanvasNavbar" className="" />
      </Container>
    </Navbar>
  );
};

export default Header;
