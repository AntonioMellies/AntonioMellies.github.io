import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { en } from "@/i18n/locales/en";
import { es } from "@/i18n/locales/es";
import { ptBR } from "@/i18n/locales/pt-BR";

export const dictionaries: Record<Locale, Dictionary> = {
  "pt-BR": ptBR,
  en,
  es,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
