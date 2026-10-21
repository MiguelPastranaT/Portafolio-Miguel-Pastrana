import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi"; // Opcional para indicar enlace externo

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("projects.inventory_title"),
      description: t("projects.inventory_desc"),
      link: "https://inventory-system-nine-tau.vercel.app",
      isExternal: true,
      buttonText: t("projects.github_link"),
    },
    {
      title: t("projects.chatbot_title"),
      description: t("projects.chatbot_desc"),
      link: "/under-construction",
      isExternal: false,
      buttonText: t("projects.github_link"),
    },
  ];

  return (
    <main className="bg-background text-foreground min-h-screen">
      <section className="section pt-20 pb-20">
        <div className="container-custom">
          {/* Encabezado */}
          <header className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold">
              {t("projects.title")}
            </h1>
            <p className="text-muted max-w-3xl mx-auto mt-5 leading-8">
              {t("projects.description")}
            </p>
          </header>

          {/* Tarjetas */}
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => {
              const buttonClasses = `
                inline-flex
                items-center
                justify-center
                gap-3
                self-start
                px-5
                py-3
                rounded-theme
                bg-primary
                text-on-primary
                transition-theme
                hover:bg-primary-hover
              `;

              return (
                <div
                  key={index}
                  className="
                    card
                    card-hover
                    flex
                    flex-col
                    p-8
                  "
                >
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    {project.title}
                  </h2>

                  <p className="text-muted leading-8 flex-1 mb-8">
                    {project.description}
                  </p>

                  {project.isExternal ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonClasses}
                    >
                      <FiExternalLink size={18} />
                      {project.buttonText}
                    </a>
                  ) : (
                    <Link to={project.link} className={buttonClasses}>
                      <FaGithub size={18} />
                      {project.buttonText}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;