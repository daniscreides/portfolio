import React from "react";
import Linguagens from "./Linguagens";
import FotoPerfil from "../assets/imagens/foto.jpg";

export default function Hero() {
  return (
      <section
        id="hero"
        className="
          min-h-[50vh]
          sm:min-h-[60vh]
          md:min-h-[65vh]
          w-full
          pt-6
          sm:pt-10
          md:pt-28
          mb-2
          sm:mb-4
          md:mb-6
          scroll-mt-28
        "
      >

      <div
        className="
          max-w-8xl
          mx-auto
          px-4
          sm:px-6
          md:px-20
          lg:px-32
          flex
          flex-row
          items-start
          justify-between
          gap-6
          md:gap-0
        "
      >
        <div className="w-[48%] md:w-1/2 flex flex-col items-start text-left">
          <h1
            className="
              font-tech
              font-bold
              text-[26px]
              sm:text-[36px]
              md:text-[46px]
              lg:text-[50px]
              leading-tight
              tracking-wide
              text-[#E0E0E0]
              mb-6
              md:mb-8
              whitespace-nowrap
            "
          >
            Desenvolvedora
            <br />
            FullStack
          </h1>

          <div className="mt-6 sm:mt-8 md:mt-16 w-full">
            <Linguagens />
          </div>
        </div>

        <div className="w-[48%] md:w-1/2 flex flex-col items-end justify-start md:-mt-16">
          <div className="w-full max-w-[20rem] flex flex-col items-center">
            <img
              src={FotoPerfil}
              alt="Foto Perfil"
              className="
                w-[96px] h-[96px]
                sm:w-[152px] sm:h-[152px]
                md:w-[216px] md:h-[216px]
                lg:w-[240px] lg:h-[240px]
                rounded-full
                object-cover
                border-4
                border-[#485177]
                shadow-xl
              "
            />

            <div
              className="
                mt-4
                md:mt-6
                bg-[#1E264A]
                border
                border-[#2F3658]
                text-[#E0E0E0]
                p-3
                sm:p-4
                rounded-xl
                w-full
                shadow-lg
              "
            >
              <h2 className="text-[12px] sm:text-[16px] md:text-[22px] font-bold text-center mb-1">
                OLÁ, SOU DANIELI!
              </h2>

              <p className="text-[8px] sm:text-[10px] md:text-[12px] font-semibold text-center mb-3">
                AUTISTA • 30 ANOS • CAMPINA GRANDE - PB
              </p>

              <p className="text-[10px] sm:text-[12px] md:text-[14px] leading-relaxed text-center">
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
