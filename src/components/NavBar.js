// package imports
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
  
  return (
    <Navbar bg="dark" variant="dark" style={{ padding: '1rem' }}>
      <Navbar.Brand>Price Right</Navbar.Brand>
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
