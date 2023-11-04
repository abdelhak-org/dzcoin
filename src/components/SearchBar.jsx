import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function SearchBar() {
  return (
    <Container>
      <Navbar expand="lg" className="bg-dark">
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </div>
          <div>
            <NavDropdown title="LogIn" id="navbarScrollingDropdown">
              <NavDropdown.Item href="login">Login</NavDropdown.Item>
              <NavDropdown.Item href="register">Register</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="addpost">Add Announce</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Container>
      </Navbar>
    </Container>
  );
}

export default SearchBar;
