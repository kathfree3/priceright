// package imports
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
  
  return (
    <Navbar bg="dark" variant="dark" style={{ padding: '1rem' }}>
      <Navbar.Brand>
      <img
          alt=""
          src="../style/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Price Right
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/about">Our Mission</Nav.Link>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>Beep</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
