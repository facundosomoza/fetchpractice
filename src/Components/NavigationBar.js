import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "./logo.svg";

const NavigationBar = ({ handleActiveModule }) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand onClick={() => handleActiveModule("")}>
            <img src={logo} height={100} />
            <span>Fetch Practice</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => handleActiveModule("clients")}>
                Clients
              </Nav.Link>
              <Nav.Link onClick={() => handleActiveModule("todolist")}>
                To do list
              </Nav.Link>
              <Nav.Link onClick={() => handleActiveModule("")}>Clear</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
