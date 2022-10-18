import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = (props) => {
  return (
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Nav>
        <Nav.Link href="/">about</Nav.Link>
        <Nav.Link href="/resume">resumé</Nav.Link>
        <Nav.Link href="/projects">projects</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
};

export default NavBar;
