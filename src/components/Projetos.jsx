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
    <section id="projetos" className="w-full py-20 scroll-mt-28">

      <div className="max-w-8xl mx-auto px-4 md:px-20 lg:px-32">
        <h2 className="text-3xl font-bold mb-10 text-center">
          PROJETOS
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
          {projetos.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="bg-[#1E264A] p-2 rounded-lg shadow-lg border border-[#2F3658]/40 hover:scale-105 transition-all max-w-[300px] w-full h-[280px] flex flex-col"
            >
              {p.imagem ? (
                <img
                  src={p.imagem}
                  alt={p.titulo}
                  className="
                    rounded-lg
                    mb-4
                    w-full
                    object-cover
                    h-32
                    sm:h-36
                    md:h-36
                    lg:h-36
                  "
                />
              ) : (
                <div className="
                  bg-[#2F3658]
                  w-full
                  mb-4
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  rounded-lg
                  h-32
                  sm:h-36
                  md:h-40
                  lg:h-46
                ">
                  Sem imagem
                </div>
              )}

              <div className="flex flex-col flex-grow text-center px-2">
                <h3 className="text-xl font-bold mb-4">
                  {p.titulo}
                </h3>

                <p className="text-sm text-gray-300">
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
