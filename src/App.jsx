import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import Highlights from "./pages/Highlights";
import Contact from "./pages/Contact";
import Sidebar from "./components/Sidebar";
import "./index.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="app">
      <button className="hamburger" onClick={() => setMenuOpen(true)}>☰</button>
      <Sidebar open={menuOpen} onToggle={() => setMenuOpen(false)} />
      <div className="main-content">
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
