import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dictionaries, type DictKey, type Lang } from "./dictionaries";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: DictKey) => string;
  dir: "ltr" | "rtl";
  formatMAD: (n: number, decimals?: number) => string;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const saved = localStorage.getItem("pp-lang") as Lang | null;
    if (saved === "ar" || saved === "fr") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("pp-lang", l);
  };

  const value: Ctx = {
    lang,
    setLang,
    dir: lang === "ar" ? "rtl" : "ltr",
    t: (k) => dictionaries[lang][k] ?? k,
    formatMAD: (n, decimals = 0) =>
      `${n.toLocaleString("fr-FR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })} ${lang === "ar" ? "درهم" : "MAD"}`,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
