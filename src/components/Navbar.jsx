import "../style/Navbar.css";

import menuIcon from "../assets/imagens/menu.png";
import closeIcon from "../assets/imagens/x.png";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <div className="nav-container">
        <a href="#" className="logo">
          <span className="gradient-text" id="nav-logo">
            DS
          </span>
        </a>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <button className="close-menu-btn" onClick={() => setMenuOpen(false)}>
            <img src={closeIcon} alt="Fechar menu" className="menu-icon" />
          </button>

          <a
            href="#home"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Início
          </a>

          <a
            href="#about"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Sobre
          </a>

          <a
            href="#projects"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Projetos
          </a>

          <a
            href="#skills"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>

          <a
            href="#contact"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Contatos
          </a>
        </div>

        {!menuOpen && (
          <button className="mobile-menu-btn" onClick={() => setMenuOpen(true)}>
            <img src={menuIcon} alt="Abrir menu" className="menu-icon" />
          </button>
        )}
      </div>
    </nav>
  );
}
