import { useTranslation } from "react-i18next";
import "../style/About.css";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-content">

            <h2 className="about-title">
              {t("about.title.normal")}{" "}
              <span className="gradient-text">
                {t("about.title.gradient")}
              </span>
            </h2>

            <p className="gradient-text-sobre">
              {t("about.info")}
            </p>

            <p className="about-description">
              {t("about.description")}
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}