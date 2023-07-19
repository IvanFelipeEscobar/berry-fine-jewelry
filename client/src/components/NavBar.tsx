import { Link } from "react-router-dom";
import {Navbar, Nav, Container} from 'react-bootstrap'

export default function NavBar() {
  return (

    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Brand>
        <h1>Berry Fine Jewelry</h1>
      </Navbar.Brand>
      <Container className="justify-content-end">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul></Container>
    </Navbar>
  );
}
