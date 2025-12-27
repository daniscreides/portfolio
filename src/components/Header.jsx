import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [openContato, setOpenContato] = useState(false);
  const dropdownRef = useRef(null);

  const handleScroll = (e, id) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/#" + id);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleContatoClick = (opcao) => {
    switch (opcao) {
      case "email":
        window.location.href = "mailto:danielisouza436@gmail.com";
        break;
      case "whatsapp":
        window.open("https://wa.me/5583991427003", "_blank");
        break;
      case "linkedin":
        window.open("https://www.linkedin.com/in/daniscreides", "_blank");
        break;
      case "github":
        window.open("https://github.com/daniscreides", "_blank");
        break;
      default:
        break;
    }

    setOpenContato(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpenContato(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const contatos = [
    { label: "E-mail", value: "email" },
    { label: "WhatsApp", value: "whatsapp" },
    { label: "LinkedIn", value: "linkedin" },
    { label: "GitHub", value: "github" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0F1635] border-b-4 border-[#2F3658] py-4 sm:py-6 z-50 flex justify-center items-center px-4">
      <nav className="flex justify-center items-center gap-4 sm:gap-10 flex-nowrap whitespace-nowrap relative">

        <a
          href="#hero"
          onClick={(e) => handleScroll(e, "hero")}
          className="text-[#E0E0E0] text-sm sm:text-lg font-bold tracking-widest hover:text-[#485177] transition"
        >
          INÍCIO
        </a>

        <a
          href="#projetos"
          onClick={(e) => handleScroll(e, "projetos")}
          className="text-[#E0E0E0] text-sm sm:text-lg font-bold tracking-widest hover:text-[#485177] transition"
        >
          PROJETOS
        </a>

        <Link
          to="/certificacoes"
          className="text-[#E0E0E0] text-sm sm:text-lg font-bold tracking-widest hover:text-[#485177] transition"
        >
          CERTIFICAÇÕES
        </Link>

        <div className="relative">
          <button
            onClick={() => setOpenContato((prev) => !prev)}
            className="text-[#E0E0E0] text-sm sm:text-lg font-bold tracking-widest hover:text-[#485177] transition"
          >
            CONTATO
          </button>

          {openContato && (
            <div
              ref={dropdownRef}
              className="
                absolute
                top-full
                left-1/2
                -translate-x-1/2
                mt-2
                w-40 sm:w-44
                bg-[#1E264A]
                border
                border-[#2F3658]
                rounded-lg
                shadow-lg
                flex
                flex-col
                z-50
              "
            >
              {contatos.map((item) => (
                <button
                  key={item.value}
                  onClick={() => handleContatoClick(item.value)}
                  className="
                    p-2 sm:p-3
                    text-white
                    font-semibold
                    border-b
                    border-[#2F3658]
                    hover:bg-[#2F3658]
                    transition
                  "
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>

      </nav>
    </header>
  );
}
