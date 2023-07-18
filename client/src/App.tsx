import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
        <NavBar />
        <main>
        <Outlet/>
        </main>
        <Footer /> 
    </>
  );
}

export default App;
