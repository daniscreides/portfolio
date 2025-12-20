import React from "react";
import Linguagens from "./Linguagens";
import FotoPerfil from "../assets/imagens/foto.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[65vh] w-full pt-10 sm:pt-14 md:pt-28 mb-10 scroll-mt-28"
    >

      <div className="
        max-w-8xl
        mx-auto
        px-4
        md:px-20
        lg:px-32
        flex
        flex-col
        md:flex-row
        items-center
        md:items-start
        justify-between
        gap-12
        md:gap-0
      ">

        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="font-tech font-bold text-5xl sm:text-6xl md:text-5xl leading-tight tracking-wide text-[#E0E0E0] mb-6 md:mb-8">
            Desenvolvedora
            <br />
            FullStack
          </h1>

          <div className="mt-6 sm:mt-8 md:mt-16 w-full">
            <Linguagens />
          </div>
        </div>

        <div className="
          md:w-1/2
          flex
          flex-col
          items-center
          md:items-end
          justify-start
          mt-0
          md:-mt-16
        ">
          <div className="w-full max-w-[20rem] flex flex-col items-center">
            <img
              src={FotoPerfil}
              alt="Foto Perfil"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-60 lg:h-60 rounded-full object-cover border-4 border-[#485177] shadow-xl"
            />

            <div className="mt-5 md:mt-6 bg-[#1E264A] border border-[#2F3658] text-[#E0E0E0] p-4 rounded-xl w-full shadow-lg">
              <h2 className="text-xl md:text-2xl font-bold text-center mb-1">
                OLÁ, SOU DANIELI!
              </h2>

              <p className="text-center text-[11px] md:text-xs font-semibold mb-3 md:mb-4">
                AUTISTA • 30 ANOS • CAMPINA GRANDE - PB
              </p>

              <p className="text-center leading-relaxed text-sm">
                Apaixonada por tecnologia, o que começou como curiosidade, hoje é
                a base da minha jornada para me tornar desenvolvedora fullstack.
                Como iniciante, estou me aprofundando cada vez mais para construir
                soluções completas.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
