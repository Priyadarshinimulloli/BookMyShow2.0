import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="text-white mt-4 py-3">
      <Container>
        <Row>
          <Col md={4}>
            <h5>BookMyShow 2.0</h5>
            <p>Experience movies, events, and more with us.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">About Us</a></li>
              <li><a href="#" className="text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-white">Terms & Conditions</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <p>
              <a href="https://www.facebook.com" className="text-white me-3">Facebook</a>
              <a href="https://twitter.com" className="text-white me-3">Twitter</a>
              <a href="https://www.instagram.com" className="text-white">Instagram</a>
            </p>
          </Col>
        </Row>
        <hr className="bg-white"/>
        <p className="text-center m-0">© 2025 BookMyShow 2.0. All rights reserved.</p>
      </Container>
    </footer>
  );
}
