import React from "react";
import { Container, Navbar, Form, NavDropdown, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo/2-bookmyshow.png";

export default function NavigationBar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-light">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="logo" width="150" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="d-flex flex-grow-1" style={{ maxWidth: "900px" }}>
              <Form.Control
                type="search"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                className="me-2"
                style={{ width: "100%" }}
              />
            </Form>
            <div className="d-flex flex-column flex-lg-row align-items-lg-center mt-2 mt-lg-0 ms-auto">
              <NavDropdown title="Select City" className="mb-2 mb-lg-0 me-lg-3">
                <NavDropdown.Item href="#">Mumbai</NavDropdown.Item>
                <NavDropdown.Item href="#">Delhi</NavDropdown.Item>
                <NavDropdown.Item href="#">Bangalore</NavDropdown.Item>
                <NavDropdown.Item href="#">Chennai</NavDropdown.Item>
                <NavDropdown.Item href="#">Hyderabad</NavDropdown.Item>
              </NavDropdown>
              <Button variant="light" className="bg-danger text-white">
                Sign In
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      <Navbar expand="lg" className="bg-dark mt-2">
        <Container>
          <Nav className="d-flex flex-wrap">
            <Nav.Link as={Link} to="/movies" className="text-white">Movie</Nav.Link>
            <Nav.Link className="text-white">Stream</Nav.Link>
            <Nav.Link className="text-white">Events</Nav.Link>
            <Nav.Link className="text-white">Plays</Nav.Link>
            <Nav.Link className="text-white">Sports</Nav.Link>
            <Nav.Link className="text-white">Activities</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link className="text-white">ListYourShow</Nav.Link>
            <Nav.Link className="text-white">Corporates</Nav.Link>
            <Nav.Link className="text-white">Offers</Nav.Link>
            <Nav.Link className="text-white">GiftCards</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
