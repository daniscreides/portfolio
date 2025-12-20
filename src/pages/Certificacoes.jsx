import React from "react";
import Cert1 from "../assets/imagens/certificado01.jpg";
import Cert2 from "../assets/imagens/certificado02.jpg";
import Cert3 from "../assets/imagens/certificado03.jpg";
import Cert4 from "../assets/imagens/certificado04.jpg";
import Cert5 from "../assets/imagens/certificado05.jpg";

const certificacoes = [
  { titulo: "Formação Front-end", imagem: Cert1 },
  { titulo: "Java + POO", imagem: Cert2 },
  { titulo: "SQL", imagem: Cert3 },
  { titulo: "Sprint Agentes de IA", imagem: Cert4 },
  { titulo: "Front-end Iniciante", imagem: Cert5 },
  { titulo: "Certificação 6", imagem: "" },
  { titulo: "Certificação 7", imagem: "" },
  { titulo: "Certificação 8", imagem: "" },
];

export default function Certificacoes() {
  return (
    <section id="certificacoes" className="py-20 px-4 md:px-20 scroll-mt-28">
      <h2 className="text-3xl font-bold mb-8 text-center">
        CERTIFICAÇÕES
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
        {certificacoes.map((c, i) => (
          <div
            key={i}
            className="
              bg-[#1E264A]
              p-2
              rounded-xl 
              border border-[#2F3658]/60 
              shadow-md 
              hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] 
              hover:scale-105 
              transition-all 
              duration-300 
              h-[290px]
              flex
              flex-col
              items-center
              text-center
            "
          >
            {c.imagem ? (
              <img
                src={c.imagem}
                alt={c.titulo}
                className="w-25 h-25 object-contain pb-1 mb-2 drop-shadow-lg"
              />
            ) : (
              <div className="w-20 h-20 mb-4"></div>
            )}

            <h3 className="font-bold text-xl mb-2 w-full text-center">
              {c.titulo}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
