import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Navigation = () => (
  <Navbar bg='dark' variant='dark' expand='lg'>
    <Container fluid>
      <Navbar.Brand href='/'>gifty</Navbar.Brand>
      <Navbar.Toggle aria-controls='navbarScroll' />
      <Navbar.Collapse id='navbarScroll'>
        <Nav className='me-auto my-2 my-lg-0'>
          <NavLink className='nav-link' to='/'>
            Home
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Navigation
