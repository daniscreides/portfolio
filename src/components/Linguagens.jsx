import React from "react";

const Linguagens = () => {
  const lista = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "TAILWIND",
    "REACT",
    "JAVA",
    "PYTHON",
    "SQL",
  ];

  return (
    <div className="linguagens w-full max-w-[40em] mx-auto">
      <ol
        className="
          grid
          grid-cols-2 sm:grid-cols-3 md:grid-cols-3
          gap-4 sm:gap-4
          list-none
          p-0
        "
      >
        {lista.map((item, index) => (
          <li
            key={index}
            className="
              flex
              justify-center
              items-center
              text-center
              text-lg sm:text-xl font-bold tracking-wide
              text-[#E0E0E0]
              bg-[#1E264A]
              px-4 sm:px-5 py-1 sm:py-3
              rounded-lg
              border border-[#2F3658]
              transition-all duration-300
              cursor-pointer
              shadow-md
              hover:bg-[#2F3658]
              hover:border-[#485177]
              hover:scale-105
              hover:shadow-lg
            "
          >
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Linguagens;
