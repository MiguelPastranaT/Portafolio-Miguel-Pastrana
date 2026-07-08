import React from "react";
import { useTranslation } from "react-i18next";

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const skillsRaw = t("skills.items", {
    returnObjects: true,
  }) as unknown;

  const skills: string[] = Array.isArray(skillsRaw)
    ? (skillsRaw as string[])
    : typeof skillsRaw === "string"
    ? [skillsRaw]
    : [];

  return (
    <main className="bg-background text-foreground min-h-screen">

      <section className="section pt-20 pb-20">

        <div className="container-custom">

          {/* Encabezado */}
          <header className="text-center mb-14">

            <h1 className="text-4xl md:text-5xl font-bold">
              {t("skills.title")}
            </h1>

            <p className="text-muted max-w-3xl mx-auto mt-5 leading-8">
              {t("skills.description")}
            </p>

          </header>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

            {skills.map((skill, index) => (

              <div
                key={index}
                className="
                  card
                  card-hover

                  flex
                  flex-col
                  items-center
                  justify-center

                  p-7
                  text-center

                  min-h-[80px]
                "
              >

                <h3 className="text-foreground font-semibold text-lg">
                  {skill}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
};

export default Skills;