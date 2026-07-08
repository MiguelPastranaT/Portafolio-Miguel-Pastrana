import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { sendEmail } from "../services/emailService";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("miguel.pastrana.t@gmail.com");

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch (error) {
      console.error("No fue posible copiar el correo.", error);
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      await sendEmail(form);

      alert("Mensaje enviado correctamente.");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {

      console.error(error);
      alert("Ocurrió un error al enviar el mensaje.");

    } finally {

      setLoading(false);

    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="section pt-20 pb-20">
        <div className="container-custom max-w-5xl">

          {/* Encabezado */}

          <h1 className="text-4xl md:text-5xl font-bold text-center">
            {t("contact.title")}
          </h1>

          <p className="text-center text-muted max-w-2xl mx-auto mt-5 mb-14">
            {t("contact.text")}
          </p>

          {/* Tarjetas */}

          <div className="grid gap-6 md:grid-cols-3 mb-16">

            {/* Email */}

            <button
              type="button"
              onClick={handleCopyEmail}
              className="
                card
                card-hover
                flex
                flex-col
                items-center
                justify-center
                text-center
                p-8
              "
            >
              <h2 className="text-xl font-semibold text-primary mb-3">
                {t("contact.email")}
              </h2>

              <p className="text-muted break-all">
                miguel.pastrana.t@gmail.com
              </p>

            </button>

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/miguel-angel-pastrana-tamayo-122a01325"
              target="_blank"
              rel="noopener noreferrer"
              className="
                card
                card-hover
                flex
                flex-col
                items-center
                justify-center
                text-center
                p-8
              "
            >
              <h2 className="text-xl font-semibold text-primary mb-3">
                {t("contact.linkedin")}
              </h2>

              <p className="text-muted">
                LinkedIn
              </p>

            </a>

            {/* GitHub */}

            <a
              href="https://github.com/TUUSUARIO"
              target="_blank"
              rel="noopener noreferrer"
              className="
                card
                card-hover
                flex
                flex-col
                items-center
                justify-center
                text-center
                p-8
              "
            >
              <h2 className="text-xl font-semibold text-primary mb-3">
                {t("contact.github")}
              </h2>

              <p className="text-muted">
                GitHub
              </p>

            </a>

          </div>

          {/* Formulario */}

          <div className="form-panel max-w-3xl mx-auto p-8 md:p-10">

            <h2 className="text-2xl font-bold text-center mb-8">
              {t("contact.form_title")}
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t("contact.name")}
                required
                className="
                  w-full
                  rounded-theme
                  border
                  border-default
                  bg-background
                  text-foreground
                  px-4
                  py-3
                  transition-theme
                  outline-none
                  focus:border-primary
                "
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t("contact.email_placeholder")}
                required
                className="
                  w-full
                  rounded-theme
                  border
                  border-default
                  bg-background
                  text-foreground
                  px-4
                  py-3
                  transition-theme
                  outline-none
                  focus:border-primary
                "
              />

              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder={t("contact.subject")}
                required
                className="
                  w-full
                  rounded-theme
                  border
                  border-default
                  bg-background
                  text-foreground
                  px-4
                  py-3
                  transition-theme
                  outline-none
                  focus:border-primary
                "
              />

              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t("contact.message")}
                required
                className="
                  w-full
                  rounded-theme
                  border
                  border-default
                  bg-background
                  text-foreground
                  px-4
                  py-3
                  resize-none
                  transition-theme
                  outline-none
                  focus:border-primary
                "
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  bg-primary
                  hover:bg-primary-hover
                  text-on-primary
                  rounded-theme
                  py-3
                  font-semibold
                  transition-theme
                  disabled:opacity-50
                "
              >
                {loading
                  ? t("contact.sending")
                  : t("contact.send")}
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* Toast */}

      {copied && (
        <div
          className="
            fixed
            bottom-6
            right-6
            px-5
            py-3
            rounded-theme
            bg-primary
            text-on-primary
            shadow-theme-lg
            transition-theme
            z-50
          "
        >
          {t("contact.copied")}
        </div>
      )}

    </main>
  );
};

export default Contact;