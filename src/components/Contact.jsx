import React, { useState } from "react";
import "../style/Contact.css";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title gradient-text">Contatos</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <input
            type="text"
            placeholder="Name"
            required
            className="contact-input"
          />
          <input
            type="email"
            placeholder="E-mail"
            required
            className="contact-input"
          />
        </div>

        <input
          type="text"
          placeholder="Subject"
          required
          className="contact-input full-width"
        />

        <textarea
          placeholder="Message"
          required
          className="contact-textarea full-width"
        />

        <div className="form-row button-row">
          <button type="submit" className="contact-button">
            {sent ? "Mensagem enviada ✓" : "ENVIAR"}
          </button>
        </div>
      </form>
    </section>
  );
}