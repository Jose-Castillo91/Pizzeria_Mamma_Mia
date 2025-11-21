import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import { Link } from "react-router";

function NavBar() {
  const total = 25000;
  const token = true;

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="ContenedorNavBar">
        <Container>
          <Navbar.Brand href="#home">Pizzería Mamma Mia!</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={token ? "/profile" : "/register"}>
              {token ? "Profile" : "Register"}
            </Nav.Link>
            <Nav.Link as={Link} to={token ? "/login" : "register"}>{token ? "Logout" : "Login"}</Nav.Link>
          </Nav>
          <Nav className="ms-auto bg-body-tertiary">
            <Nav.Link as={Link} to={"/cart"}>
              Total: {total.toLocaleString("es-CL")}$
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
