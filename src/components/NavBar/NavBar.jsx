import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import { Link, useNavigate } from "react-router";
import { useContext } from "react";
import { MyContext } from "../../Context";
import { UserContext } from "../../UserContext.jsx";

function NavBar() {
  const { total } = useContext(MyContext);
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="ContenedorNavBar">
        <Container>
          <Navbar.Brand>Pizzería Mamma Mia!</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {token ? (
              <>
                <Nav.Link as={Link} to="/profile">
                  Profile
                </Nav.Link>
                <Nav.Link onClick={handleLogout} style={{ cursor: "pointer" }}>
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
          <Nav className="ms-auto bg-body-tertiary">
            <Nav.Link as={Link} to={"/cart"} style={{ fontSize: "larger" }}>
              Total: {total.toLocaleString("es-CL")}$
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
