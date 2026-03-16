import "../style/Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-bg">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
      </div>

      <div className="hero-content">
        <p className="hero-welcome">
          Bem-Vindo ao meu portfolio.
        </p>

        <h1 className="hero-title">
          Danieli <span className="gradient-text">Souza</span>
        </h1>

        <p className="hero-subtitle">
          Full-Stack Developer
        </p>

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
        <svg
          width="40"
          height="40"
          viewBox="0 0 26 26"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.5"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>

    </section>
  );
}