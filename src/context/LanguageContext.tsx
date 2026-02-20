import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { Language, translations } from "@/i18n/translations";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LANGUAGE_STORAGE_KEY = "vedansha-language";

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
    return savedLanguage && translations[savedLanguage] ? savedLanguage : "en";
  });

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
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
