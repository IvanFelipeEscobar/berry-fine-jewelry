import logo from "../assets/berry_logo01.png";
import { Link } from "react-router-dom";
export default function NavBar() {
  return(
  <div id="nav-bar">
    <img id="logo" src={logo} alt="Berry Fine Jewelry logo"></img>
    <ul id="nav-links">
      <li><Link to="/">Home |</Link></li>
      <li><Link to="/Shop">Shop |</Link></li>
      <li><Link to="/about">About  |</Link></li>
      <li><Link to="/contact">Contact  |</Link></li>
      <li><Link to="/book-online">Book On Line  </Link></li>
    </ul>
  </div>)
}
