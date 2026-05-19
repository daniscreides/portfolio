import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../style/Contact.css";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // impede múltiplos envios
    if (loading) return;

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
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title gradient-text">Contatos</h2>

      <form ref={form} onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="contact-input"
          />

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            className="contact-input"
          />
        </div>

        <input
          type="text"
          name="titulo"
          placeholder="Subject"
          required
          className="contact-input full-width"
        />

        <textarea
          name="message"
          placeholder="Message"
          required
          className="contact-textarea full-width"
        />

        <div className="form-row button-row">
          <button
            type="submit"
            className="contact-button"
            disabled={loading}
          >
            {loading
              ? "Enviando..."
              : sent
              ? "Mensagem enviada ✓"
              : "ENVIAR"}
          </button>
        </div>
      </form>
    </section>
  );
}