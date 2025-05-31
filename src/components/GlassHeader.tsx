
import { useState, useEffect } from "react";
import ThemeToggle from "./ui/theme-toggle";
import { translations } from "@/lib/data";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button"; 

export default function GlassHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "es">(
    (localStorage.getItem("language") as "en" | "es") || "en"
  );

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as "en" | "es";
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en";
    localStorage.setItem("language", newLanguage); // ✅ Guardar el nuevo idioma en `localStorage`
    setLanguage(newLanguage);
    window.dispatchEvent(new Event("languageChange")); // ✅ Emitir evento global
  };

  const personalInfo = translations[language]?.personalInfo;

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md backdrop-filter bg-background/70 dark:bg-background/40 border-b border-border/40">
      <div className="container max-w-4xl mx-auto p-4 flex justify-between items-center">
        <motion.a className="flex items-center text-lg font-medium" href="/" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          ✨ {personalInfo?.name}
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {["skills", "projects", "experience", "education"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item}`}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {language === "en"
                ? (item === "skills"
                    ? "🛠 Skills"
                    : item === "projects"
                    ? "🚀 Projects"
                    : item === "experience"
                    ? "💼 Experience"
                    : "🎓 Education")
                : (item === "skills"
                    ? "🛠 Habilidades"
                    : item === "projects"
                    ? "🚀 Proyectos"
                    : item === "experience"
                    ? "💼 Experiencia"
                    : "🎓 Educación")}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />

          {/* Botón de cambio de idioma */}
          <Button variant="ghost" size="icon" onClick={toggleLanguage} className="rounded-full cursor-pointer">
            <img src={`/flags/${language === "en" ? "es" : "uk"}.png`} alt="Cambiar idioma" className="h-5 w-5" />
            <span className="sr-only">Toggle language</span>
          </Button>

          {/* Mobile Menu Button */}
          <motion.button className="md:hidden p-2 text-foreground" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>
    </header>
  );
}





