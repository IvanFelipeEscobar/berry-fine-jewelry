import logo from "../assets/berry_logo01.png";
export default function NavBar() {
  return(
  <div id="nav-bar">
    <img id="logo" src={logo} alt="Berry Fine Jewelry logo"></img>
    <section id="nav-links">
        <a href="">Home </a>
        <a href="">Shop </a>
        <a href="">About </a>
        <a href="">Contact </a>
        <a href="">Book Online </a>
        <a href="">Log in/Sign up </a>
    </section>
  </div>)
}
