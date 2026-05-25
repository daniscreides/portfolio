import { useTranslation } from "react-i18next";
import seta from "../assets/imagens/setabranca.png";
import "../style/Hero.css";

export default function Hero() {
  const { t, i18n } = useTranslation();

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
      </div>

      <div className="hero-content">
        <p className="hero-welcome">
          {t("hero.welcome")}
        </p>

        <h1 className="hero-title">
          Danieli <span className="gradient-text">Souza</span>
        </h1>

        <p className="hero-subtitle">
          {t("hero.subtitle")}
        </p>

        <p className="hero-description">
          {t("hero.description")}
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            {t("hero.projects")}
          </a>

          <a href="#contact" className="btn-secondary">
            {t("hero.contact")}
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <a href="#about">
          <img
            src={seta}
            alt={
              i18n.language === "pt"
                ? "Rolar para baixo"
                : "Scroll down"
            }
            width="40"
            height="40"
            style={{ opacity: 0.5 }}
          />
        </a>
      </div>
    </section>
  );
}