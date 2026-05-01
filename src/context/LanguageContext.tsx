import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { Language, translations } from "@/i18n/translations";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LANGUAGE_STORAGE_KEY = "vedansha-language";

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

// Convert URL parameter to Language type
const urlParamToLanguage = (param: string): Language | null => {
  switch (param) {
    case "hin":
      return "hi";
    case "mar":
      return "mr";
    case "en":
      return "en";
    default:
      return null;
  }
};

// Convert Language type to URL parameter
const languageToUrlParam = (lang: Language): string => {
  switch (lang) {
    case "hi":
      return "hin";
    case "mr":
      return "mar";
    default:
      return "en";
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check URL parameters first
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lan");
    if (urlLang) {
      const lang = urlParamToLanguage(urlLang);
      if (lang) return lang;
    }

    // Fall back to localStorage
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
    return savedLanguage && translations[savedLanguage] ? savedLanguage : "en";
  });

  // Update URL and localStorage when language changes
  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    
    // Update URL parameter
    const params = new URLSearchParams(window.location.search);
    params.set("lan", languageToUrlParam(language));
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, "", newUrl);
  }, [language]);

  const t = useMemo(
    () => (key: string) => translations[language][key] || translations.en[key] || key,
    [language]
  );

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};
