import {Container, Nav, Navbar} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

export const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="/">My WW Shop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fa fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fa fa-user"></i> Login
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
