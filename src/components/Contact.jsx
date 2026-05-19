import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../style/Contact.css";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useRef();
  const isSending = useRef(false); // 🔒 trava real

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending.current) return;

    isSending.current = true;
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_hwyymk9",
        "template_contato",
        form.current,
        "Mis5dJsgIjNuiL6OH"
      );

      setSent(true);
      form.current.reset();

      setTimeout(() => {
        setSent(false);
      }, 3000);

    } catch (error) {
      console.log(error);
      alert("Erro ao enviar mensagem");
    } finally {
      setLoading(false);
      isSending.current = false;
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title gradient-text">Contatos</h2>

      <form ref={form} onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="E-mail" required />
        </div>

        <input type="text" name="titulo" placeholder="Subject" required />

        <textarea name="message" placeholder="Message" required />

        <button
          type="submit"
          disabled={loading}
          onClick={(e) => {
            if (loading) e.preventDefault();
          }}
        >
          {loading ? "Enviando..." : sent ? "Enviado ✓" : "ENVIAR"}
        </button>
      </form>
    </section>
  );
}