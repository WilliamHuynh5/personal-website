import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import resumePdf from '../assets/resume.pdf';

const NavBar = (props) => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/"></Navbar.Brand>
        <Nav>
          <Nav.Link href="/">about</Nav.Link>
          <Nav.Link href="/projects">projects</Nav.Link>
          <Nav.Item>
            <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="nav-link">
              resumé
            </a>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
