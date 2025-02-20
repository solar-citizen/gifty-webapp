import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const user = { id: 0, name: 'TestUser' }

const Navigation = () => (
  <Navbar bg='dark' variant='dark'>
    <Container fluid>
      <Navbar.Collapse id='navbarScroll'>
        <Nav className='me-auto my-2 my-lg-0'>
          <NavLink className='nav-link' to='/'>
            Home
          </NavLink>
          <NavLink className='nav-link' to='/admin'>
            Administration
          </NavLink>
        </Nav>
        <Nav className='ml-auto my-2 my-lg-0'>
          <span className='d-flex align-items-center text-light'>
            Welcome,
            <NavLink className='nav-link' to='/profile'>
              {user.name}
            </NavLink>
          </span>
          <Button variant='outline-light' size='sm' className='align-self-center'>
            {user ? 'Logout' : 'Login'}
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Navigation
