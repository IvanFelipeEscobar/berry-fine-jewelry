import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookOnline from "./pages/BookOnline";
import "./App.css";

function App() {
  return (
    <Router>
      
        <NavBar />
        <main>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-online" element={<BookOnline />} />
        </Routes>
        </main>
        <Footer />
      
    </Router>
  );
}

export default App;
