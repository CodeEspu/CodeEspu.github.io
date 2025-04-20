/*import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-purple-500/10 py-6 bg-gradient-to-b from-background to-muted/20 backdrop-blur-sm">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-sm text-muted-foreground text-center md:text-left"
            whileHover={{ scale: 1.01 }}
          >
            &copy; {new Date().getFullYear()} Rishikesh S. template | Adapted by {personalInfo.name}
          </motion.p>
          <motion.p
            className="text-sm text-muted-foreground mt-2 md:mt-0 text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            Born from passion {" "}
            <motion.span
              className="inline-block"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
              }}
            >
              ❤️
            </motion.span>
            
            
            {" "} tested in the lab {" "}
            <motion.span
              className="inline-block"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              💻
            </motion.span>{" "}
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}*/
import { translations } from "@/lib/data";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Footer() {
  const [language, setLanguage] = useState<"en" | "es">("en"); // Valor por defecto "en"

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(localStorage.getItem("language") as "en" | "es");
    };
  
    window.addEventListener("languageChange", handleLanguageChange);
    return () => window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  return (
    <footer className="border-t border-purple-500/10 py-6 bg-gradient-to-b from-background to-muted/20 backdrop-blur-sm">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-sm text-muted-foreground text-center md:text-left"
            whileHover={{ scale: 1.01 }}
          >
            &copy; {new Date().getFullYear()} Rishikesh S. template | Adaptado por {translations[language].personalInfo.name}
          </motion.p>
          <motion.p
            className="text-sm text-muted-foreground mt-2 md:mt-0 text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            {language === "en" ? "Born from passion" : "Nacido de la pasión"}{" "}
            <motion.span
              className="inline-block"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
              }}
            >
              ❤️
            </motion.span>{" "}
            {language === "en" ? "tested in the lab" : "probado en el laboratorio"}{" "}
            <motion.span
              className="inline-block"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              💻
            </motion.span>{" "}
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}


