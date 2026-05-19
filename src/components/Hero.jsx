import seta from "../assets/imagens/setabranca.png";
import "../style/Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
      </div>

      <div className="hero-content">
        <p className="hero-welcome">Bem-Vindo ao meu portfolio.</p>

        <h1 className="hero-title">
          Danieli <span className="gradient-text">Souza</span>
        </h1>

        <p className="hero-subtitle">FullStack Developer</p>

        <p className="hero-description">
          Transformar ideias em código e criar soluções que fazem a diferença.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            Ver Projetos
          </a>

          <a href="#contact" className="btn-secondary">
            Entre em contato
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <a href="#about">
          <img
            src={seta}
            alt="Scroll down"
            width="40"
            height="40"
            style={{ opacity: 0.5 }}
          />
        </a>
      </div>
    </section>
  );
}
