import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/NavBar.module.css";
// TODO: navbar buttons should be spaced
function NavBar() {
  return (
    <Navbar scrolling="true" dark="true" expand="md" fixed="top">
      <Navbar.Brand href="/" className={styles.navBarText}>
        All Custom Sheet Metal
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/projects">Projects</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/why-us">Why us</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
