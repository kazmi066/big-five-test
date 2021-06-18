import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <Container>
        <Navbar>
          <Navbar.Brand>
            <img
              src="https://www.orangeballcreative.com/wp-content/uploads/2018/07/brand-personality.png"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="#home">Test your personality</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}
