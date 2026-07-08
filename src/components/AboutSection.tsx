import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="section">
      <div className="container-custom space-y-5 pb-20">
        {(t("about.text", { returnObjects: true }) as string[]).map(
          (paragraph, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
                filter: "blur(8px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -3,
              }}
              className="
              card
              card-hover
              group

              max-w-4xl
              mx-auto

              p-6
              md:p-7
              "
            >

              {/* Barra lateral */}
              <div className="card-accent" />

              {/* Glow */}
              <div className="card-glow" />

              <div className="relative flex items-start gap-5">

                {/* Número */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: .4,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 15,
                    delay: index * .12 + .15,
                  }}
                  whileHover={{
                    scale: 1.08,
                    rotate: 8,
                  }}
                  className="
                  flex
                  items-center
                  justify-center

                  w-12
                  h-12
                  shrink-0

                  rounded-full

                  bg-primary
                  text-on-primary

                  border-2
                  border-primary

                  shadow-theme

                  font-bold
                  text-lg
                  transition-theme
                "
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.div>

                {/* Texto */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .45,
                    delay: index * .12 + .25,
                  }}
                  className="
                  text-foreground
                  text-base
                  md:text-lg
                  leading-7
                  md:leading-8
                  flex-1
                "
                >
                  {paragraph}
                </motion.p>

              </div>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};

export default AboutSection;