import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import AboutSection from "../components/AboutSection";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-background text-foreground transition-theme">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-16 md:py-20 px-6 pb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          {t("hero.title")}
        </h2>

        <h3 className="text-lg md:text-2xl font-semibold text-primary mb-4">
          {t("hero.subtitle")}
        </h3>

        <p className="max-w-xl md:max-w-2xl text-muted mb-8 text-sm md:text-base leading-relaxed">
          {t("hero.description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/projects"
            className="btn-primary px-6 py-3"
          >
            {t("hero.btn_projects")}
          </Link>

          <Link
            to="/contact"
            className="btn-secondary px-6 py-3"
          >
            {t("hero.btn_contact")}
          </Link>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <AboutSection />
    </main>
  );
};

export default Home;