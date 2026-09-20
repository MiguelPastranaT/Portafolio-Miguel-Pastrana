import React from "react";
import { useTranslation } from "react-i18next";
import { FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";

const UnderConstruction: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="bg-background text-foreground min-h-screen">

      <section className="section min-h-screen flex items-center justify-center">

        <div className="container-custom">

          <div className="max-w-2xl mx-auto text-center">

            {/* Icono */}
            <div className="flex justify-center mb-8">

              <div
                className="
                  flex
                  items-center
                  justify-center

                  w-20
                  h-20

                  rounded-full

                  bg-primary
                  text-on-primary
                "
              >
                <FaTools size={32} />
              </div>

            </div>

            {/* Encabezado */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("underConstruction.title")}
            </h1>

            {/* Descripción */}
            <p className="text-muted text-lg leading-8 mb-10">
              {t("underConstruction.description")}
            </p>

            {/* Botón */}
            <Link
              to="/projects"
              className="
                inline-flex
                items-center
                justify-center

                px-6
                py-3

                rounded-theme

                bg-primary
                text-on-primary

                transition-theme

                hover:bg-primary-hover
              "
            >
              {t("underConstruction.back_to_projects")}
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default UnderConstruction;
