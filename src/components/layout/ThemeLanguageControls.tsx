"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import { LOCALES } from "@/i18n/config";
import { useLocale } from "@/contexts/LocaleContext";

export function ThemeLanguageControls() {
  const { locale, setLocale, t } = useLocale();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) {
    return (
      <div
        className="flex shrink-0 items-center gap-2"
        aria-hidden
      >
        <div className="h-9 w-[7.5rem] rounded-lg border border-zinc-200/80 bg-zinc-100/80 dark:border-white/10 dark:bg-white/5" />
        <div className="h-9 w-[5.5rem] rounded-lg border border-zinc-200/80 bg-zinc-100/80 dark:border-white/10 dark:bg-white/5" />
      </div>
    );
  }

  const localeValue: Locale = locale;

  return (
    <div className="flex shrink-0 flex-wrap items-center justify-end gap-2 md:gap-3">
      <label className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400">
        <span className="sr-only">{t.language.label}</span>
        <span className="hidden font-medium sm:inline">{t.language.label}</span>
        <select
          value={localeValue}
          onChange={(e) => setLocale(e.target.value as Locale)}
          className="rounded-lg border border-zinc-300/90 bg-white/90 py-1.5 pr-8 pl-2 text-xs font-medium text-zinc-900 shadow-sm outline-none ring-cyan-500/40 focus-visible:ring-2 dark:border-white/15 dark:bg-zinc-900/80 dark:text-zinc-100"
          aria-label={t.language.label}
        >
          {LOCALES.map((loc) => (
            <option key={loc} value={loc}>
              {loc === "pt-BR"
                ? t.language.ptBR
                : loc === "en"
                  ? t.language.en
                  : t.language.es}
            </option>
          ))}
        </select>
      </label>

      <label className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400">
        <span className="sr-only">{t.theme.label}</span>
        <span className="hidden font-medium sm:inline">{t.theme.label}</span>
        <select
          value={theme ?? "dark"}
          onChange={(e) =>
            setTheme(e.target.value as "dark" | "light" | "system")
          }
          className="rounded-lg border border-zinc-300/90 bg-white/90 py-1.5 pr-8 pl-2 text-xs font-medium text-zinc-900 shadow-sm outline-none ring-cyan-500/40 focus-visible:ring-2 dark:border-white/15 dark:bg-zinc-900/80 dark:text-zinc-100"
          aria-label={t.theme.label}
        >
          <option value="dark">{t.theme.dark}</option>
          <option value="light">{t.theme.light}</option>
          <option value="system">{t.theme.system}</option>
        </select>
      </label>
    </div>
  );
}
