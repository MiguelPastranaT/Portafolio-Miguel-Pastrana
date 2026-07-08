import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const language = e.target.value;

    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <select
      value={i18n.language}
      onChange={handleLanguageChange}
      aria-label="Seleccionar idioma"
      className="
        bg-card
        text-foreground
        border
        border-default

        rounded-lg
        px-3
        py-2

        text-sm

        shadow-theme
        transition-theme

        focus:outline-none
        focus:ring-2
        focus:ring-[var(--primary)]

        hover:border-[var(--primary)]
        cursor-pointer
      "
    >
      <option value="es">🇪🇸 Español</option>
      <option value="en">🇺🇸 English</option>
    </select>
  );
};

export default LanguageSelector;