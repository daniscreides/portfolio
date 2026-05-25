import { useTranslation } from "react-i18next";
import "../style/Projects.css";

import zombioteca from "../assets/imagens/zombioteca.png";
import dragonball from "../assets/imagens/db.png";
import jojo from "../assets/imagens/jojo.png";
import blackpaladins from "../assets/imagens/bp.png";

export default function Projects() {
  const { t } = useTranslation();

  const handleConstruction = (e) => {
    e.preventDefault();

    alert(t("projects.construction"));
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">
            {t("projects.title.normal")}{" "}
            <span className="gradient-text">
              {t("projects.title.gradient")}
            </span>
          </h2>
        </div>

        <div className="projects-grid">
          <a
            href="#"
            className="project-card"
            onClick={handleConstruction}
          >
            <img src={blackpaladins} alt="Black Paladins" />

            <div className="project-info">
              <span className="project-tag secondary">
                {t("projects.professional")}
              </span>

              <h3>Black Paladins</h3>

              <p>Vue.js • JavaScript • Node.js</p>
            </div>
          </a>

          <a
            href="https://daniscreides.github.io/site-jojo/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img src={jojo} alt="JoJo's Bizarre Adventure" />

            <div className="project-info">
              <span className="project-tag primary">
                {t("projects.personal")}
              </span>

              <h3>JoJo's Bizarre Adventure</h3>

              <p>React • JavaScript • Node.js</p>
            </div>
          </a>

          <a
            href="https://daniscreides.github.io/dragon-ball/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img src={dragonball} alt="Dragon Ball" />

            <div className="project-info">
              <span className="project-tag primary">
                {t("projects.personal")}
              </span>

              <h3>Dragon Ball</h3>

              <p>React • JavaScript • Node.js</p>
            </div>
          </a>

          <a
            href="https://daniscreides.github.io/zombioteca/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img src={zombioteca} alt="Zombioteca" />

            <div className="project-info">
              <span className="project-tag primary">
                {t("projects.personal")}
              </span>

              <h3>Zombioteca</h3>

              <p>HTML • CSS</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}