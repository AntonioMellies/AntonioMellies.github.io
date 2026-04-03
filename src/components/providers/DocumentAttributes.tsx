"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n/config";
import { useLocale } from "@/contexts/LocaleContext";

const htmlLang: Record<Locale, string> = {
  "pt-BR": "pt-BR",
  en: "en",
  es: "es",
};

export function DocumentAttributes() {
  const { locale } = useLocale();

  useEffect(() => {
    document.documentElement.lang = htmlLang[locale];
  }, [locale]);

  return null;
}
