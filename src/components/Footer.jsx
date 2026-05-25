import { useTranslation } from "react-i18next";
import Email from "../assets/imagens/email.png";
import Github from "../assets/imagens/github.png";
import Linkedin from "../assets/imagens/linkedin.png";
import "../style/Footer.css";

export default function Footer() {
  const { t } = useTranslation();

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {year} Danieli Souza. {t("footer.rights")}
        </p>

        <div className="footer-icons">
          <a
            href="mailto:danielisouza436@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="Enviar email"
          >
            <img src={Email} alt="Email" />
          </a>

          <a
            href="https://github.com/daniscreides"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="GitHub"
          >
            <img src={Github} alt="GitHub" />
          </a>

          <a
            href="https://www.linkedin.com/in/daniscreides/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="LinkedIn"
          >
            <img src={Linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
}