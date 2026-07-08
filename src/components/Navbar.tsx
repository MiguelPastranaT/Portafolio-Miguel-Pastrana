import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LanguageSelector from "./LanguageSelector";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  const handleNavigate = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `
      transition-theme
      whitespace-nowrap
      ${
        isActive
          ? "text-primary font-semibold"
          : "text-foreground hover:text-primary"
      }
    `;

  return (
    <nav
      className="
        sticky
        top-0
        z-50

        bg-card
        border-b
        border-default
        shadow-theme
        transition-theme
      "
    >
      <div
        className="
          container-custom

          flex
          flex-wrap
          items-center
          justify-between

          py-4
          gap-y-4
        "
      >
        {/* Logo */}
        <NavLink
          to="/"
          onClick={handleNavigate}
          className="
            text-2xl
            font-bold
            text-primary
            transition-theme
            hover:opacity-80
            shrink-0
          "
        >
          Miguel Pastrana
        </NavLink>

        {/* Controles (móvil y escritorio) */}
        <div
          className="
            flex
            items-center
            gap-3
            shrink-0
            order-2
            md:order-3
          "
        >
          <LanguageSelector />
          <ThemeToggle />
        </div>

        {/* Menú */}
        <ul
          className="
            order-3
            md:order-2

            basis-full
            md:basis-auto

            flex
            justify-center
            items-center

            gap-6
            md:gap-8

            text-sm
            md:text-base
            font-medium
          "
        >
          <li>
            <NavLink
              to="/skills"
              className={navLinkClass}
              onClick={handleNavigate}
            >
              {t("navbar.skills")}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={navLinkClass}
              onClick={handleNavigate}
            >
              {t("navbar.projects")}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={handleNavigate}
            >
              {t("navbar.contact")}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;