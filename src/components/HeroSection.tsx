

import { useState, useEffect } from "react";
import { translations } from "@/lib/translations";
import { Mail, Github, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

export default function HeroSection() {
  const [language, setLanguage] = useState<"en" | "es">("en"); // Valor por defecto "en"

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(localStorage.getItem("language") as "en" | "es");
    };
  
    window.addEventListener("languageChange", handleLanguageChange);
    return () => window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Asegurar que `translations[language].personalInfo` existe antes de acceder a sus propiedades
  const personalInfo = translations[language]?.personalInfo;

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-6 md:px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1 className="text-4xl font-bold mb-2" variants={childVariants}>
              {personalInfo?.name}{" "}
              <span className="inline-block animate-pulse">✨</span>
            </motion.h1>

            <motion.p className="text-xl text-muted-foreground mb-6" variants={childVariants}>
  {language === "en" ? "Cybersecurity Specialist 👨‍💻" : "Especialista en Ciberseguridad 👨‍💻"}
</motion.p>


            <motion.div className="flex flex-col gap-2 items-center md:items-start" variants={containerVariants}>
              <motion.div className="flex items-center text-sm text-muted-foreground" variants={childVariants} whileHover={{ scale: 1.05, color: "#4b5563" }}>
                <MapPin className="h-4 w-4 mr-2" />
                📍 {personalInfo?.location}
              </motion.div>

              <motion.a href={`mailto:${personalInfo?.email}`} className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors" variants={childVariants} whileHover={{ scale: 1.05, color: "#4b5563" }}>
                <Mail className="h-4 w-4 mr-2" />
                ✉️ {personalInfo?.email}
              </motion.a>

              <motion.a href={personalInfo?.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors" variants={childVariants} whileHover={{ scale: 1.05, color: "#4b5563" }}>
                <Github className="h-4 w-4 mr-2" />
                🌟 GitHub
              </motion.a>

              <motion.a href={personalInfo?.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors" variants={childVariants} whileHover={{ scale: 1.05, color: "#4b5563" }}>
                <Linkedin className="h-4 w-4 mr-2" />
                🔗 LinkedIn
              </motion.a>
            </motion.div>
          </div>

          {/* Imagen de perfil con verificación y fallback */}
          <motion.div
            className="mt-6 md:mt-0 flex justify-center"
            variants={childVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-48 md:w-60 rounded-full relative ring-4 shadow-[0_0_15px_rgba(0,191,255,0.8)] ring-[#51249d]"
                style={{ objectFit: "cover" }}
                onError={(e) => (e.currentTarget.src = "/fallback-image.jpg")} // Imagen de respaldo si profile.jpg no se encuentra
              />
            </div>
          </motion.div>
        </motion.div>

        <MotionWrapper>
  <div className="bg-gradient-to-r from-blue-500/10 to-pink-500/10 backdrop-blur-sm backdrop-filter p-4 rounded-lg border border-blue-500/20 dark:border-blue-500/10 shadow-sm">
    <p className="text-muted-foreground pl-4 py-2 mb-4 relative"
      style={{ textAlign: 'justify' }}>
      <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-pink-500 rounded-full"></span>
      💻 <strong>{language === "en" ? "Telecommunications and IT Systems Technician" : "Técnico en Sistemas de Telecomunicaciones e Informáticos"}</strong> {language === "en" ? "with specialized training in" : "con formación especializada en"} <strong>{language === "en" ? "IT Cybersecurity" : "Ciberseguridad IT"}</strong>, {language === "en" ? "covering key areas such as " : "cubriendo áreas clave como "} 
      <span className="font-bold text-cyan-600">
        {language === "en" ? "Digital Forensics" : "Informática Forense"}, 
        {language === "en" ? " Cybersecurity Regulations" : " Normativas de Ciberseguridad"}, 
        {language === "en" ? " Network Hardening" : " Seguridad en Redes"}, 
        {language === "en" ? " Incident Response " : " Respuesta ante Incidentes "}
      </span>  
      {language === "en" ? "and" : "y"} <span className="font-bold text-cyan-600">{language === "en" ? "Ethical Hacking" : "Hacking Ético"}</span>.<br /> <br />
      
      🔍 {language === "en" ? "Currently focused on" : "Actualmente enfocado en"} <span className="font-bold text-red-600">
        {language === "en" ? "Pentesting and Red Teaming" : "Pentesting y Red Team"}
      </span>, {language === "en" ? "preparing for the " : "preparándome para la "} 
      <span className="font-bold text-red-600">{language === "en" ? "eJPT (Junior Penetration Tester) " : "eJPT (Junior Penetration Tester) "}</span> 
      {language === "en" ? "certification as the first step toward a professional career in offensive cybersecurity." : "como primer paso hacia una carrera profesional en ciberseguridad ofensiva."}<br /> <br />
      
      💼 {language === "en" ? "Actively seeking a job or internship in the cybersecurity sector, with a strong interest in" : "Buscando activamente empleo o prácticas en el sector de ciberseguridad, con especial interés en"} 
      <strong>{language === "en" ? " Red Team / Pentesting" : " Red Team / Pentesting"}</strong>, 
      {language === "en" ? " while remaining open to opportunities in SOC, vulnerability assessment, digital forensics, or incident handling." : " manteniéndome abierto a oportunidades en SOC, evaluación de vulnerabilidades, forensia digital o gestión de incidentes."}
    </p>
  </div>
</MotionWrapper>

      </div>
    </section>
  );
}




