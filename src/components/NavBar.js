// package imports
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import logo from "./logo.png"

const NavBar = () => {
  
  return (
    <Navbar bg="light" className="navybar" style={{ padding: '0.5rem' }}>
      <Navbar.Brand>
      <img
          alt=""
          src={logo}
          height="25"
          width="auto"
      />
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/about">Our Mission</Nav.Link>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavBar
