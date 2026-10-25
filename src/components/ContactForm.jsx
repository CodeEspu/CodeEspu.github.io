import React, { useState, useEffect, useRef } from "react";
import { Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import ReCAPTCHA from "react-google-recaptcha";

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/andrestf99@gmail.com";
const SUBMIT_TIMEOUT_MS = 20000;

export default function ContactForm() {
  const [language, setLanguage] = useState("en");
  const [isVerified, setIsVerified] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef(null);
  const recaptchaRef = useRef(null);

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(localStorage.getItem("language") || "en");
    };

    window.addEventListener("languageChange", handleLanguageChange);
    return () => window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  const t =
    language === "en"
      ? {
          title: "Contact Me",
          name: "Full Name",
          namePlaceholder: "John Doe",
          email: "Email Address",
          emailPlaceholder: "john@example.com",
          message: "Message",
          messagePlaceholder: "Your message here...",
          send: "Send Message",
          sending: "Sending...",
          captchaRequired: "Please complete the reCAPTCHA",
          captchaAria: "reCAPTCHA verification",
          success: "Message sent successfully. Thank you!",
          error: "Something went wrong. Please try again.",
          timeout: "The request took too long. Please check your connection and try again.",
        }
      : {
          title: "Contáctame",
          name: "Nombre Completo",
          namePlaceholder: "Juan Pérez",
          email: "Correo Electrónico",
          emailPlaceholder: "juan@ejemplo.com",
          message: "Mensaje",
          messagePlaceholder: "Tu mensaje aquí...",
          send: "Enviar Mensaje",
          sending: "Enviando...",
          captchaRequired: "Por favor, complete el reCAPTCHA",
          captchaAria: "Verificación reCAPTCHA",
          success: "Mensaje enviado correctamente. ¡Gracias!",
          error: "Algo salió mal. Por favor, inténtalo de nuevo.",
          timeout: "La solicitud tardó demasiado. Revisa tu conexión e inténtalo de nuevo.",
        };

  const handleRecaptchaChange = (token) => {
    setIsVerified(!!token);
  };

  const handleRecaptchaExpired = () => {
    setIsVerified(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "submitting") return;

    const captchaToken = recaptchaRef.current?.getValue?.();
    if (!isVerified || !captchaToken) {
      setStatus("error");
      setErrorMessage(t.captchaRequired);
      return;
    }

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    formData.set("_captcha", "false");
    formData.set("_template", "table");
    formData.set("_subject", language === "en" ? "New portfolio contact message" : "Nuevo mensaje del portfolio");
    formData.set("g-recaptcha-response", captchaToken);

    setStatus("submitting");
    setErrorMessage("");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), SUBMIT_TIMEOUT_MS);

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      let payload = null;
      try {
        payload = await response.json();
      } catch {
        payload = null;
      }

      if (!response.ok || payload?.success === "false" || payload?.ok === false) {
        throw new Error(payload?.message || t.error);
      }

      setStatus("success");
      form.reset();
      setIsVerified(false);
      recaptchaRef.current?.reset?.();
    } catch (err) {
      clearTimeout(timeoutId);
      setStatus("error");
      setErrorMessage(
        err?.name === "AbortError" ? t.timeout : err?.message || t.error
      );
      recaptchaRef.current?.reset?.();
      setIsVerified(false);
    }
  };

  return (
    <>
      <MotionWrapper>
        <h2 className="text-2xl font-bold mb-8 text-center inline-flex items-center justify-center gap-2 w-full">
          <Mail className="size-6 text-purple-400" />
          {t.title}
        </h2>
      </MotionWrapper>
      <MotionWrapper>
        <form
          ref={formRef}
          id="contact"
          className="w-full max-w-lg mx-auto space-y-6"
          onSubmit={handleSubmit}
          noValidate={false}
        >
          <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-foreground/80">
              {t.name}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              disabled={status === "submitting"}
              placeholder={t.namePlaceholder}
              className="w-full px-4 py-2 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 outline-none transition-all disabled:opacity-60"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-foreground/80">
              {t.email}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              disabled={status === "submitting"}
              placeholder={t.emailPlaceholder}
              className="w-full px-4 py-2 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 outline-none transition-all disabled:opacity-60"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-foreground/80">
              {t.message}
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows="5"
              disabled={status === "submitting"}
              placeholder={t.messagePlaceholder}
              className="w-full px-4 py-2 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 outline-none transition-all resize-none disabled:opacity-60"
            ></textarea>
          </div>

          <div className="flex justify-center mb-4 overflow-x-auto">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LeVD1IrAAAAADFmts1cjkhOp9Rocxd5W1yS09f7"
              onChange={handleRecaptchaChange}
              onExpired={handleRecaptchaExpired}
              onErrored={handleRecaptchaExpired}
              hl={language}
              theme="dark"
              aria-label={t.captchaAria}
            />
          </div>

          {status === "success" && (
            <div className="flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-300">
              <CheckCircle2 className="size-4 shrink-0" />
              {t.success}
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              <AlertCircle className="size-4 shrink-0" />
              {errorMessage || t.error}
            </div>
          )}

          <button
            type="submit"
            className="w-full px-6 py-3 text-sm font-medium text-white bg-purple-500 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
            disabled={!isVerified || status === "submitting"}
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                {t.sending}
              </>
            ) : (
              t.send
            )}
          </button>
        </form>
      </MotionWrapper>
    </>
  );
}
