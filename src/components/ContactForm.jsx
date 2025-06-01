import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [language, setLanguage] = useState("en");
  const [isVerified, setIsVerified] = useState(false);
  const formRef = useRef(null);
  const recaptchaRef = useRef(null);

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(localStorage.getItem("language") || "en");
    };
    
    window.addEventListener("languageChange", handleLanguageChange);
    return () => window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  const handleRecaptchaChange = (token) => {
    setIsVerified(!!token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isVerified) {
      alert(language === "en" ? "Please complete the reCAPTCHA" : "Por favor, complete el reCAPTCHA");
      return;
    }
    
    formRef.current.submit();
  };

  return (
    <>
      <MotionWrapper>
        <h2 className="text-2xl font-bold mb-8 text-center">
          📧 {language === "en" ? "Contact Me" : "Contáctame"}
        </h2>
      </MotionWrapper>
      <MotionWrapper>
        <form
          ref={formRef}
          id="contact"
          action="https://formsubmit.co/andrestf99@gmail.com"
          method="POST"
          className="w-full max-w-lg mx-auto space-y-6"
          onSubmit={handleSubmit}
        >
          {/* Honeypot field */}
          <input type="text" name="_honey" style={{ display: "none" }} />

          {/* Disable formsubmit's captcha since we're using reCAPTCHA */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Success page redirect */}
          <input
            type="hidden"
            name="_next"
            value="https://codeespu.github.io/"
          />

          {/* Real form fields */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground/80"
            >
              {language === "en" ? "Full Name" : "Nombre Completo"}
            </label>
            <input 
              type="text" 
              name="name" 
              id="name"
              required
              placeholder={language === "en" ? "John Doe" : "Juan Pérez"}
              className="w-full px-4 py-2 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground/80"
            >
              {language === "en" ? "Email Address" : "Correo Electrónico"}
            </label>
            <input 
              type="email" 
              name="email" 
              id="email"
              required
              placeholder={language === "en" ? "john@example.com" : "juan@ejemplo.com"}
              className="w-full px-4 py-2 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground/80"
            >
              {language === "en" ? "Message" : "Mensaje"}
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows="5"
              placeholder={language === "en" ? "Your message here..." : "Tu mensaje aquí..."}
              className="w-full px-4 py-2 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 outline-none transition-all resize-none"
            ></textarea>
          </div>

          {/* reCAPTCHA */}
          <div className="flex justify-center mb-4">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LeVD1IrAAAAADFmts1cjkhOp9Rocxd5W1yS09f7"
              onChange={handleRecaptchaChange}
              hl={language}
              theme="dark"
              aria-label={language === "en" ? "reCAPTCHA verification" : "Verificación reCAPTCHA"}
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 text-sm font-medium text-white bg-purple-500 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!isVerified}
          >
            {language === "en" ? "Send Message" : "Enviar Mensaje"}
          </button>
        </form>
      </MotionWrapper>
    </>
  );
}