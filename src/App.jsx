import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projetos from "./components/Projetos";
import Certificacoes from "./pages/Certificacoes";
import Contato from "./components/Contato";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.getElementById(location.hash.substring(1));
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="bg-[#0F1635] text-white min-h-screen scroll-smooth">
      <Header />

      <main className="pt-20">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Projetos />
                <Contato />
              </>
            }
          />

          <Route path="/certificacoes" element={<Certificacoes />} />
        </Routes>
        
      </main>

      <Footer />
    </div>
  );
}
