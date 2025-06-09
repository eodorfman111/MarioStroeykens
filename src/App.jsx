import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import Highlights from "./pages/Highlights";
import Contact from "./pages/Contact";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const isMobile = width < 768;

  return (
    <div className="app">
      {isMobile ? (
        <Header onMenuToggle={() => setMenuOpen(!menuOpen)} />
      ) : (
        <Sidebar open />
      )}
      {isMobile && (
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      )}
      <div className="main-content">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
