import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projetos from "./components/Projetos";
import Certificacoes from "./pages/Certificacoes";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash ? location.hash.substring(1) : null;
    if (hash) {
      // Dá um pequeno delay para garantir que a seção exista no DOM
      setTimeout(() => {
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
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
