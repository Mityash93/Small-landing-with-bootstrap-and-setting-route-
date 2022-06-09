// import { Button } from 'bootstrap';
import React, { Component } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./logo192.png";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
        //   fixed="top"
          collapseOnSelect
          expand="md"
          bg="light"
          variant="blue"
        >
          <Container>
            <Navbar.Brand>
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              style={{ justifyContent: "space-between" }}
              id="responsive-navbar-nav"
            >
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About us
                </Nav.Link>
              </Nav>
              <Form inline="true" style={{ display: "flex" }}>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
