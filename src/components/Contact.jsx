import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import "../style/Contact.css";

export default function Contact() {
  const { t } = useTranslation();

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useRef();
  const isSending = useRef(false);

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
      alert(t("contact.error"));
    } finally {
      setLoading(false);
      isSending.current = false;
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title gradient-text">
        {t("contact.title")}
      </h2>

      <form
        ref={form}
        onSubmit={handleSubmit}
        className="contact-form"
      >

        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder={t("contact.name")}
            required
            className="contact-input"
          />

          <input
            type="email"
            name="email"
            placeholder={t("contact.email")}
            required
            className="contact-input"
          />
        </div>

        <input
          type="text"
          name="titulo"
          placeholder={t("contact.subject")}
          required
          className="contact-input full-width"
        />

        <textarea
          name="message"
          placeholder={t("contact.message")}
          required
          className="contact-textarea"
        />

        <div className="form-row button-row">
          <button
            type="submit"
            className="contact-button"
            disabled={loading}
          >
            {loading
              ? t("contact.sending")
              : sent
              ? t("contact.sent")
              : t("contact.send")}
          </button>
        </div>

      </form>
    </section>
  );
}