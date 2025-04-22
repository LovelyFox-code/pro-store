import { Navbar, Nav } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Navbar.Brand as={Link} to="/">ProShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-bar" />
        <Navbar.Collapse id="basic-navbar-bar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/cart">
              <FaShoppingCart className="me-2" />
              Cart
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              <FaUser className="me-2" />
              Sign in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
