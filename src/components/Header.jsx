import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"

function Header() {
  return (
    <div style={{background:"black", color:"white"}}>
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/">BookMyShow</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/movies"><Link to="/movies">All Movies</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/register"><Link to="/movies">User Registrations</Link>                       
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Container fluid style={{background:'black', color:"white"}}>
            <a>First Option</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a>Second Option</a>
        </Container>
    </div>
  );
}

export default Header;