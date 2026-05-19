import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./index.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className={menuOpen ? "app-overlay" : ""}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
