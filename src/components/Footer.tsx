import React from "react";
import { NavLink } from "react-router-dom";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const handleNavigate = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  return (
    <footer className="bg-surface border-t border-default">


      <div className="container-custom py-12">

        {/* Nombre */}
        <div className="text-center">

          <h2 className="text-2xl font-bold text-primary">
            Miguel Pastrana
          </h2>

          <p className="text-muted mt-2">
            Full Stack Developer
          </p>

        </div>

        {/* Navegación */}
        <nav className="flex flex-wrap justify-center gap-8 mt-10">

          <NavLink
            to="/"
            onClick={handleNavigate}
            className="text-muted hover:text-primary transition-theme"
          >
            {t("navbar.home")}
          </NavLink>

          <NavLink
            to="/skills"
            onClick={handleNavigate}
            className="text-muted hover:text-primary transition-theme"
          >
            {t("navbar.skills")}
          </NavLink>

          <NavLink
            to="/projects"
            onClick={handleNavigate}
            className="text-muted hover:text-primary transition-theme"
          >
            {t("navbar.projects")}
          </NavLink>

          <NavLink
            to="/contact"
            onClick={handleNavigate}
            className="text-muted hover:text-primary transition-theme"
          >
            {t("navbar.contact")}
          </NavLink>

        </nav>

        {/* Redes */}
        <div className="flex justify-center gap-6 mt-10">

          <a
            href="https://github.com/TUUSUARIO"
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-3
              rounded-full
              card-hover
              transition-theme
              text-muted
              hover:text-primary
            "
          >
         <FaGithub size={22} />
          </a>

          <a
            href="https://linkedin.com/in/TUUSUARIO"
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-3
              rounded-full
              card-hover
              transition-theme
              text-muted
              hover:text-primary
            "
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="mailto:miapt69@gmail.com"
            className="
              p-3
              rounded-full
              card-hover
              transition-theme
              text-muted
              hover:text-primary
            "
          >
            <FaEnvelope size={20} />
          </a>

        </div>

        {/* Copyright */}

        <div className="mt-12 pt-6 border-t border-default text-center">

          <p className="text-muted-light">

            {t("footer", {
              year: new Date().getFullYear(),
            })}

          </p>

          <p className="text-muted mt-2 text-sm">

            React • TypeScript • Tailwind CSS

          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;