import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import styles from '../styles/NavBar.module.css';
import Button from 'react-bootstrap/Button';
// TODO: navbar buttons should be spaced
function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">All Custom Sheet Metal</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Navbar>
  );
}

export default NavBar;