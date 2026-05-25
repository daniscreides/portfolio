import { useTranslation } from "react-i18next";
import frontendIcon from "../assets/imagens/front.png";
import backendIcon from "../assets/imagens/backend.png";
import "../style/Skills.css";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">
            {t("skills.title.normal")}{" "}
            <span className="gradient-text">
              {t("skills.title.gradient")}
            </span>
          </h2>
        </div>

        <div className="skills-grid">
          <div className="skills-group card">
            <div className="card-header">
              <div className="card-icon gradient-1">
                <img
                  src={frontendIcon}
                  alt="Frontend"
                  width="24"
                  height="24"
                />
              </div>

              <div>
                <h3 className="skills-group-title">FRONTEND</h3>

                <p className="card-subtitle">
                  {t("skills.frontend.subtitle")}
                </p>
              </div>
            </div>

            <div className="skill-bar-item">
              <div className="skill-info">
                <span>React</span>
                <span>60%</span>
              </div>

              <div className="progress">
                <div
                  className="progress-fill gradient-1"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>

            <div className="skill-bar-item">
              <div className="skill-info">
                <span>JavaScript</span>
                <span>50%</span>
              </div>

              <div className="progress">
                <div
                  className="progress-fill gradient-1"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>

            <div className="skill-bar-item">
              <div className="skill-info">
                <span>HTML/CSS</span>
                <span>75%</span>
              </div>

              <div className="progress">
                <div
                  className="progress-fill gradient-1"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            <div className="skill-bar-item">
              <div className="skill-info">
                <span>Vue.js</span>
                <span>30%</span>
              </div>

              <div className="progress">
                <div
                  className="progress-fill gradient-1"
                  style={{ width: "30%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="skills-group card">
            <div className="card-header">
              <div className="card-icon gradient-2">
                <img
                  src={backendIcon}
                  alt="Backend"
                  width="24"
                  height="24"
                />
              </div>

              <div>
                <h3 className="skills-group-title">BACKEND</h3>

                <p className="card-subtitle">
                  {t("skills.backend.subtitle")}
                </p>
              </div>
            </div>

            <div className="skill-bar-item">
              <div className="skill-info">
                <span>Node.js</span>
                <span>50%</span>
              </div>

              <div className="progress">
                <div
                  className="progress-fill gradient-2"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>

            <div className="skill-bar-item">
              <div className="skill-info">
                <span>Java</span>
                <span>40%</span>
              </div>

              <div className="progress">
                <div
                  className="progress-fill gradient-2"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>

            <div className="skill-bar-item">
              <div className="skill-info">
                <span>Python</span>
                <span>40%</span>
              </div>

              <div className="progress">
                <div
                  className="progress-fill gradient-2"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>

            <div className="skill-bar-item">
              <div className="skill-info">
                <span>MySQL</span>
                <span>30%</span>
              </div>

              <div className="progress">
                <div
                  className="progress-fill gradient-2"
                  style={{ width: "30%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}