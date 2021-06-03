import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from '../styles/NavBar.module.css';
// TODO: navbar buttons should be spaced
function NavBar() {
  return (
    <Navbar scrolling="true" dark="true" expand="md" fixed="top">
    <Navbar.Brand href="#home" className={styles.brand}>All Custom Sheet Metal</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Navbar>
  );
}

export default NavBar;