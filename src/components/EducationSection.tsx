
import { translations } from "@/lib/data";
import { useState, useEffect } from "react";
import TimelineItem from "./TimelineItem";
import { Award, GraduationCap, Building2, Calendar, MapPin } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";

export default function EducationSection() {
  const [language, setLanguage] = useState<"en" | "es">(
    (localStorage.getItem("language") as "en" | "es") || "en"
  );

  useEffect(() => {
    const handleLanguageChange = () => {
      const storedLanguage = localStorage.getItem("language") as "en" | "es";
      if (storedLanguage) {
        setLanguage(storedLanguage);
      }
    };

    window.addEventListener("languageChange", handleLanguageChange);
    return () => window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  return (
    <section id="education" className="py-12 bg-gradient-to-b from-muted/10 to-background">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left inline-flex items-center gap-2 justify-center md:justify-start w-full">
            <GraduationCap className="size-6 text-purple-400" />
            {language === "en" ? "Education" : "Educación"}
          </h2>
        </MotionWrapper>

        <div className="mb-8">
          {translations[language]?.education.map((edu, index) => (
            <TimelineItem
              key={edu.institution + edu.period}
              title={edu.degree}
              subtitle={
                <span className="inline-flex items-center gap-1.5">
                  <Building2 className="size-3.5 shrink-0" />
                  {edu.institution}
                </span>
              }
              date={
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="size-3.5 shrink-0" />
                  {edu.period}
                </span>
              }
              isLast={index === translations[language].education.length - 1}
              index={index}
            >
              <p className="text-sm text-muted-foreground mb-3 inline-flex items-center gap-1.5">
                <MapPin className="size-3.5 shrink-0" />
                {edu.location}
              </p>

              {edu.achievements && edu.achievements.length > 0 && (
                <motion.div className="mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-purple-500/20 shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="h-6 w-6 flex items-center justify-center rounded-full bg-purple-500/10 mr-2">
                      <Award className="h-4 w-4 text-purple-500" />
                    </div>
                    <h4 className="text-sm font-medium">
                      {language === "en" ? "Achievements & Activities" : "Logros y Actividades"}
                    </h4>
                  </div>
                  <ul className="list-none ml-4 space-y-2 text-sm">
                    {edu.achievements.map((achievement, i) => (
                      <motion.li key={i} className="text-muted-foreground relative pl-6">
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
