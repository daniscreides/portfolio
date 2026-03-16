import "../style/About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-grid">

          <div className="about-content">
            <h2 className="about-title">
              Sobre <span className="gradient-text">Mim</span>
            </h2>

            <p className="gradient-text-sobre">
              Autista • 30 anos • Brasil • Mãe da Luna
            </p>

            <p className="about-description">
              Apaixonado por tecnologia, o que começou como curiosidade agora é a base da minha jornada para me tornar um desenvolvedor full-stack. Como iniciante, estou me aprofundando cada vez mais na construção de soluções completas que fazem a diferença.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}