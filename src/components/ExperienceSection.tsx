
import { useState, useEffect } from "react";
import { translations } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import { Briefcase, MapPin, Calendar, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

export default function ExperienceSection() {
  const [language, setLanguage] = useState<"en" | "es">(
    (localStorage.getItem("language") as "en" | "es") || "en"
  );

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(localStorage.getItem("language") as "en" | "es");
    };

    window.addEventListener("languageChange", handleLanguageChange);
    return () => window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  return (
    <section id="experience" className="py-12 bg-gradient-to-b from-muted/20 to-background">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left inline-flex items-center gap-2 justify-center md:justify-start w-full">
            <Briefcase className="size-6 text-purple-400" />
            {language === "en" ? "Work Experience" : "Experiencia Laboral"}
          </h2>
        </MotionWrapper>
        <div className="mb-8">
          {translations[language].workExperience.map((job, index) => (
            <TimelineItem
              key={job.company + job.period}
              title={`${job.position} | ${job.company}`}
              subtitle={
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-3.5 shrink-0" />
                  {job.location}
                </span>
              }
              date={
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="size-3.5 shrink-0" />
                  {job.period}
                </span>
              }
              isLast={index === translations[language].workExperience.length - 1}
              index={index}
            >
              {job.companyEvolution && job.companyEvolution.length > 0 && (
                <motion.div
                  className="mt-3 mb-1 ml-1 pl-4 border-l-2 border-dashed border-purple-500/30"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  viewport={{ once: true }}
                >
                  <p className="text-xs font-medium text-muted-foreground/80 mb-2 inline-flex items-center gap-1.5">
                    <Building2 className="size-3.5" />
                    {language === "en" ? "Company evolution" : "Evolución de la empresa"}
                  </p>
                  <div className="space-y-0">
                    {job.companyEvolution.map((phase) => (
                      <div
                        key={phase.name}
                        className={`relative flex items-start gap-2.5 py-1.5 ${
                          phase.current ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        <span
                          className={`mt-1.5 size-2 shrink-0 rounded-full ${
                            phase.current
                              ? "bg-purple-500 ring-2 ring-purple-500/30"
                              : "bg-muted-foreground/40"
                          }`}
                        />
                        <div className="min-w-0">
                          <p
                            className={`text-sm leading-snug ${
                              phase.current ? "font-medium" : "font-normal"
                            }`}
                          >
                            {phase.name}
                          </p>
                          <p className="text-xs text-muted-foreground/70">{phase.period}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              <motion.div
                className="mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-purple-500/20 dark:bg-card/10 dark:border-purple-500/10 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-3">
                  <div className="h-6 w-6 flex items-center justify-center rounded-full bg-purple-500/10 mr-2">
                    <Briefcase className="h-4 w-4 text-purple-500" />
                  </div>
                  <h4 className="text-sm font-medium">
                    {language === "en" ? "Skills" : "Habilidades"}
                  </h4>
                </div>
                <ul className="list-none ml-4 space-y-2 text-sm">
                  {job.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      className="text-muted-foreground relative pl-6"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      viewport={{ once: true }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
