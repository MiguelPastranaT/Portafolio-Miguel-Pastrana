import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("projects.inventory_title"),
      description: t("projects.inventory_desc"),
      github: "/under-construction",
    },
    {
      title: t("projects.chatbot_title"),
      description: t("projects.chatbot_desc"),
      github: "/under-construction",
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

            {projects.map((project, index) => (

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

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
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
                  "
                >
                  <FaGithub size={18} />

                  {t("projects.github_link")}
                </a>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
};

export default Projects;