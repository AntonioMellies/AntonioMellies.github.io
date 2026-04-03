"use client";

import { useLocale } from "@/contexts/LocaleContext";

export function SkipLink() {
  const { t } = useLocale();

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-zinc-900 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/80 dark:focus:bg-zinc-950 dark:focus:text-white dark:focus:ring-cyan-400/80"
    >
      {t.skipLink}
    </a>
  );
}
