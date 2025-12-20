import React from "react";
import EmailIcon from "../assets/icons/email.png";
import LinkedinIcon from "../assets/icons/linkedin.png";
import GithubIcon from "../assets/icons/github.png";

const Footer = () => {
  return (
    <footer className="bg-[#1E264A] py-4 mt-0 text-center px-4">
      <div className="flex justify-center gap-2 mb-2 flex-wrap">
        <a
          href="mailto:danielisouza436@gmail.com"
          aria-label="Enviar email"
          className="hover:opacity-80 transition-opacity"
        >
          <img src={EmailIcon} alt="Email" className="w-14 h-14" />
        </a>

        <a
          href="https://www.linkedin.com/in/daniscreides"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:opacity-80 transition-opacity"
        >
          <img src={LinkedinIcon} alt="LinkedIn" className="w-14 h-14" />
        </a>

        <a
          href="https://github.com/daniscreides"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="hover:opacity-80 transition-opacity"
        >
          <img src={GithubIcon} alt="Github" className="w-14 h-14" />
        </a>
      </div>

      <p className="text-white text-lg font-semibold mb-1">
        Desenvolvido por Daniscreides.
      </p>
      <p className="text-gray-400 text-base">
        &copy; 2025 Portfólio
      </p>
    </footer>
  );
};

export default Footer;
