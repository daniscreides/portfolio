// Contato.jsx
import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha os campos obrigatórios!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido!");
      return;
    }

    emailjs
      .send(
        "service_contato",
        "template_contato",
        {
          name: nome,
          email: email,
          telefone: telefone,
          message: mensagem,
        },
        "Mis5dJsgIjNuiL6OH"
      )
      .then(() => {
        setNome("");
        setEmail("");
        setTelefone("");
        setMensagem("");
        setEnviado(true);
        setTimeout(() => setEnviado(false), 3000);
      })
      .catch((err) => {
        alert("Erro ao enviar a mensagem: " + err.text);
      });
  };

  return (
    <section
      id="contato"
      className="py-6 px-4 sm:px-6 md:px-20 scroll-mt-28"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">
        CONTATO
      </h2>

      <form
        onSubmit={handleSubmit}
        className="
          flex flex-col gap-3
          w-full
          max-w-[320px]
          sm:max-w-[360px]
          md:max-w-xl
          mx-auto
          p-4 sm:p-5 md:p-6
          mb-10
          bg-[#1E264A]
          border border-[#2F3658]
          rounded-xl
          shadow-md
        "
      >
        {/* NOME */}
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="
            text-[12px] sm:text-[14px] md:text-[15px]
            p-2 sm:p-2.5 md:p-3
            rounded
            bg-[#2F3658]
            text-white
            placeholder:text-[11px] sm:placeholder:text-[13px]
            focus:outline-none
            focus:ring-2 focus:ring-[#FF6347]
            transition
          "
          required
        />

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
            text-[12px] sm:text-[14px] md:text-[15px]
            p-2 sm:p-2.5 md:p-3
            rounded
            bg-[#2F3658]
            text-white
            placeholder:text-[11px] sm:placeholder:text-[13px]
            focus:outline-none
            focus:ring-2 focus:ring-[#FF6347]
            transition
          "
          required
        />

        <input
          type="tel"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          className="
            text-[12px] sm:text-[14px] md:text-[15px]
            p-2 sm:p-2.5 md:p-3
            rounded
            bg-[#2F3658]
            text-white
            placeholder:text-[11px] sm:placeholder:text-[13px]
            focus:outline-none
            focus:ring-2 focus:ring-[#FF6347]
            transition
          "
        />

        <textarea
          placeholder="Mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          rows={4}
          className="
            text-[12px] sm:text-[14px] md:text-[15px]
            p-2 sm:p-2.5 md:p-3
            rounded
            bg-[#2F3658]
            text-white
            placeholder:text-[11px] sm:placeholder:text-[13px]
            focus:outline-none
            focus:ring-2 focus:ring-[#FF6347]
            transition
            resize-none
          "
          required
        />

        <button
          type="submit"
          className="
            mt-2
            text-[12px] sm:text-[14px] md:text-[15px]
            px-3 sm:px-4
            py-1.5 sm:py-2
            bg-[#2F3658]
            text-white
            font-bold
            rounded
            border border-[#2F3658]/40
            shadow-md
            hover:shadow-[0_0_10px_3px_rgba(72,81,119,0.4)]
            transition-all duration-300
          "
        >
          ENVIAR
        </button>

        {enviado && (
          <p className="text-green-400 text-[11px] sm:text-[13px] font-bold text-center mt-2">
            Mensagem enviada!
          </p>
        )}
      </form>
    </section>
  );
}
