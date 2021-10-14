import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Header.css";
import FirebaseAuth from "./../../Firebase/Firebase.authentication";

const Header = () => {
  const { user, loggedIn, logout } = FirebaseAuth();

  return (
    <div className="header">
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className="logo" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Nav className="me-1">
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/items">
                Food items
              </Nav.Link>
              <Nav.Link as={Link} to="/placeorder">
                Place Order
              </Nav.Link>

              {loggedIn ? (
                <Navbar.Text>
                  Signed in as: <span> {user?.email}</span>
                  <Button onClick={logout} varient="danger"> Log out </Button>
                </Navbar.Text>
              ) : (
                <div className="signup-login">
                  <Nav.Link as={Link} to="/signup">
                    Sign up
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login">
                    login
                  </Nav.Link>
                </div>
              )}
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
