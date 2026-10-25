
import { useState, useEffect } from "react";
import { translations } from "@/lib/translations";
import { motion } from "framer-motion";
import {
  Wrench,
  Code2,
  Crosshair,
  Network,
  Fingerprint,
  Boxes,
} from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 20,
      delay: 0.04 * index,
    },
  }),
};

function SkillTag({ skill, index }: { skill: string; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={tagVariants}
      whileHover={{ scale: 1.05, y: -2 }}
      className="px-3 py-1 bg-muted/80 backdrop-blur-sm rounded-md text-sm border border-purple-500/10 shadow-sm"
    >
      {skill}
    </motion.div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillCategoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function SkillsSection() {
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

  const categories = [
    {
      id: "programming",
      icon: Code2,
      title: language === "en" ? "Programming & Scripting" : "Programación y Scripts",
      skills: translations[language].skills.programmingLanguages,
    },
    {
      id: "pentesting",
      icon: Crosshair,
      title:
        language === "en"
          ? "Penetration Testing & Exploitation"
          : "Pentesting y Explotación",
      skills: translations[language].skills.frontendDevelopment,
    },
    {
      id: "network",
      icon: Network,
      title:
        language === "en"
          ? "Network Security & Monitoring"
          : "Seguridad y Monitorización de Redes",
      skills: translations[language].skills.backendDevelopment,
    },
    {
      id: "forensics",
      icon: Fingerprint,
      title: language === "en" ? "Forensic Analysis" : "Análisis Forense",
      skills: translations[language].skills.databaseAndStorage,
    },
    {
      id: "tools",
      icon: Boxes,
      title: language === "en" ? "General Tools" : "Herramientas Generales",
      skills: translations[language].skills.cloudAndDevOps,
    },
  ];

  return (
    <section id="skills" className="py-12 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left inline-flex items-center gap-2 justify-center md:justify-start w-full">
            <Wrench className="size-6 text-purple-400" />
            {language === "en" ? "Technical Skills" : "Habilidades Técnicas"}
          </h2>
        </MotionWrapper>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.id} variants={skillCategoryVariants}>
                <GlassCard className="p-4">
                  <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
                    <Icon className="size-5 text-purple-400 shrink-0" />
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {category.skills.map((skill, index) => (
                      <SkillTag key={skill} skill={skill} index={index} />
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
