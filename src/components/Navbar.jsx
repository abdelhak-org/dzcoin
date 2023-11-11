import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function AppNavbar() {
  return (
    <Container className ="my-2">
      <Navbar
        expand="lg"
        className="bg-light sm_navbar"
        style={{
          padding: "0px 8px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Navbar.Brand href="/" className="fw-bold fst-italic">
          DZ.<span style={{ color: "red" }}>C</span>
          <span style={{ color: "green" }}>oin</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="mobile">Mobile  </Nav.Link>
            <Nav.Link href="immobilien"> Immobilien </Nav.Link>
            <Nav.Link href="products">  Products</Nav.Link>
            <Nav.Link href="jobs"> Jobs</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="about"> About</NavDropdown.Item>
              <NavDropdown.Item href="contact">Contact</NavDropdown.Item>
              <NavDropdown.Item href="blog">Blog</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="login">Login</NavDropdown.Item>
              <NavDropdown.Item href="register">Register</NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default AppNavbar;
