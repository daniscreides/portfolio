import React from "react";

export default function ContatoModal({ open, setOpen }) {
  const handleClick = (opcao) => {
    switch (opcao) {
      case "email":
        window.location.href = "mailto:danielisouza436@gmail.com";
        break;

      case "whatsapp":
        window.open("https://wa.me/5583991427003", "_blank");
        break;

      case "linkedin":
        window.open(
          "https://www.linkedin.com/in/daniscreides",
          "_blank"
        );
        break;

      case "github":
        window.open(
          "https://github.com/daniscreides",
          "_blank"
        );
        break;

      default:
        break;
    }

    setOpen(false);
  };

  if (!open) return null;

  const opcoes = [
    { label: "E-mail", value: "email" },
    { label: "WhatsApp", value: "whatsapp" },
    { label: "LinkedIn", value: "linkedin" },
    { label: "GitHub", value: "github" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="flex flex-col gap-3 w-full max-w-xs sm:max-w-sm">
        {opcoes.map((opcao) => (
          <button
            key={opcao.value}
            onClick={() => handleClick(opcao.value)}
            className="
              p-3
              bg-[#2F3658]
              rounded
              border
              border-transparent
              hover:border-[#FF6347]
              hover:shadow-[0_0_10px_#FF6347]
              transition-all
              font-semibold
              text-white
            "
          >
            {opcao.label}
          </button>
        ))}

        <button
          className="mt-3 text-sm text-gray-400 hover:text-white transition"
          onClick={() => setOpen(false)}
        >
          VOLTAR
        </button>
      </div>
    </div>
  );
}
