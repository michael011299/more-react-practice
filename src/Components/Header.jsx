import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = ({ setFilter }) => {
  return (
    <Navbar variant='dark' bg='dark' expand='lg'>
      <Container fluid>
        <Navbar.Brand href='#home'>Post Reader</Navbar.Brand>
        <Button id='button' variant='dark' onClick={() => setFilter(0)}>
          See All Reviews
        </Button>
        <Navbar.Toggle aria-controls='navbar-dark-example' />
        <Navbar.Collapse id='navbar-dark-example'>
          <Nav>
            <NavDropdown
              id='nav-dropdown-dark-example'
              title='Select User Reviews'
              menuVariant='dark'
            >
              <NavDropdown.Item onClick={() => setFilter(1)}>
                1
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setFilter(2)}>
                2
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setFilter(3)}>
                3
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setFilter(4)}>
                4
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setFilter(5)}>
                5
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setFilter(6)}>
                6
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setFilter(7)}>
                7
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setFilter(8)}>
                8
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setFilter(9)}>
                9
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setFilter(10)}>
                10
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
