import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

function TopBar() {
  return (
    <>

      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand><Link to="/" className={styles.navText}>TaskMailer</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link><Link to="/dashboard" className={styles.navText}>Dashboard</Link></Nav.Link>
              <Nav.Link>
              <Link to="/" className={styles.navText}>Welcome, Guest</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default TopBar;
