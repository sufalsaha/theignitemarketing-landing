import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navber";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<h1>Who We Are</h1>} />
        <Route path="/services/seo" element={<h1>SEO Services</h1>} />
        <Route path="/services/smm" element={<h1>Social Media Marketing</h1>} />
        <Route path="/services/content" element={<h1>Content Services</h1>} />
        <Route path="/our-work" element={<h1>Our Work</h1>} />
        <Route path="/about" element={<h1>About Us</h1>} />
        <Route path="/contact" element={<h1>Contact Us</h1>} />
        <Route path="/portfolio" element={<h1>Portfolio Video</h1>} />
        <Route path="/book" element={<h1>Book Now Page</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
