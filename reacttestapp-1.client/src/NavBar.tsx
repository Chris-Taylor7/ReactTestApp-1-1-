import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="light" variant="light">
      <Nav className="ml-auto">
        <Nav.Link as={NavLink} to="/paths/home">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/paths/view">View</Nav.Link>
        <Nav.Link as={NavLink} to="/paths/create">Create</Nav.Link>
        <Nav.Link as={NavLink} to="/paths/profile">Profile</Nav.Link>
      </Nav>
    </Navbar>
  );
}