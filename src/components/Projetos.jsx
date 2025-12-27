import React from "react";
import ZombiotecaImg from "../assets/imagens/zombioteca.png";
import DragonBallImg from "../assets/imagens/dragonball.png";

const projetos = [
  {
    titulo: "Zombioteca",
    descricao: "Site de indicações de filmes, séries e animações de zumbi.",
    imagem: ZombiotecaImg,
    link: "https://daniscreides.github.io/zombioteca/",
  },
  {
    titulo: "Dragon Ball",
    descricao: "Site com alguns personagens do universo Dragon Ball.",
    imagem: DragonBallImg,
    link: "https://daniscreides.github.io/dragon-ball/",
  },
  {
    titulo: "Projeto 3",
    descricao: "Descrição do projeto.",
    imagem: "",
    link: "#",
  },
  {
    titulo: "Projeto 4",
    descricao: "Descrição do projeto.",
    imagem: "",
    link: "#",
  },
];

export default function Projetos() {
  return (
    <section
      id="projetos"
      className="
        w-full
        pt-[14px]
        sm:pt-[18px]
        md:pt-[76px]
        pb-[38px]
        sm:pb-[48px]
        md:pb-[60px]
        scroll-mt-[50px]
        sm:scroll-mt-[60px]
        md:scroll-mt-[80px]
      "
    >
      <div className="max-w-8xl mx-auto px-4 md:px-20 lg:px-32">
        <h2 className="text-[22px] sm:text-[24px] font-bold mb-[32px] text-center">
          PROJETOS
        </h2>

        <div
          className="
            grid
            grid-cols-2         
            sm:grid-cols-3      
            lg:grid-cols-4    
            gap-[16px]
            sm:gap-[20px]
            lg:gap-[24px]
            place-items-center
          "
        >
          {projetos.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="
                bg-[#1E264A]
                rounded-lg
                shadow-lg
                border border-[#2F3658]/40
                hover:scale-105
                transition-all
                w-full
                max-w-[200px]     
                sm:max-w-[240px] 
                lg:max-w-[280px]
                h-[180px]
                sm:h-[220px]
                lg:h-[270px]
                p-[6px]
                sm:p-[8px]
                flex
                flex-col
              "
            >
              {p.imagem ? (
                <img
                  src={p.imagem}
                  alt={p.titulo}
                  className="
                    w-full
                    h-[80px]
                    sm:h-[100px]
                    lg:h-[130px]
                    object-contain
                    bg-[#2F3658]
                    rounded-lg
                    mb-[8px]
                    sm:mb-[12px]
                  "
                />
              ) : (
                <div
                  className="
                    w-full
                    h-[80px]
                    sm:h-[100px]
                    lg:h-[130px]
                    bg-[#2F3658]
                    rounded-lg
                    mb-[8px]
                    sm:mb-[12px]
                    flex
                    items-center
                    justify-center
                    text-gray-400
                    text-[10px]
                  "
                >
                  Sem imagem
                </div>
              )}

              <div className="flex flex-col flex-grow text-center px-[4px]">
                <h3
                  className="
                    text-[14px]
                    sm:text-[16px]
                    lg:text-[22px]
                    font-bold
                    mb-[6px]
                    sm:mb-[10px]
                  "
                >
                  {p.titulo}
                </h3>

                <p
                  className="
                    text-[11px]
                    sm:text-[13px]
                    lg:text-[16px]
                    text-gray-300
                    leading-snug
                  "
                >
                  {p.descricao}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
