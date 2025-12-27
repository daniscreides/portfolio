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
    <div className="w-full max-w-[640px]">
      <ol
        className="
          grid
          grid-cols-2
          md:grid-cols-2
          lg:grid-cols-3
          gap-[8px]
          md:gap-[12px]
          lg:gap-[16px]
          list-none
          p-0
        "
      >
        {lista.map((item, index) => (
          <li
            key={index}
            className="
              w-full
              box-border
              flex
              justify-center
              items-center
              text-center
              text-[10px]
              md:text-[10px]
              lg:text-[20px]
              font-bold
              tracking-wide
              text-[#E0E0E0]
              bg-[#1E264A]
              px-[6px]
              py-[6px]
              md:px-[8px]
              md:py-[8px]
              lg:px-[14px]
              lg:py-[10px]
              whitespace-normal
              break-words
              rounded-lg
              border
              border-[#2F3658]
              transition-transform
              duration-300
              cursor-pointer
              shadow-md
              hover:bg-[#2F3658]
              hover:border-[#485177]
              lg:hover:scale-105
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
