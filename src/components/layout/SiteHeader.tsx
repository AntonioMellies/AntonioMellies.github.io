"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ThemeLanguageControls } from "@/components/layout/ThemeLanguageControls";
import { useLocale } from "@/contexts/LocaleContext";

export function SiteHeader() {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = useMemo(
    () =>
      [
        { href: "#about", label: t.nav.links.about },
        { href: "#impact", label: t.nav.links.impact },
        { href: "#stack", label: t.nav.links.stack },
        { href: "#projects", label: t.nav.links.projects },
        { href: "#experience", label: t.nav.links.experience },
        { href: "#contact", label: t.nav.links.contact },
      ] as const,
    [t],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const bar = scrolled
    ? "border-b border-zinc-200/80 bg-white/75 shadow-lg shadow-zinc-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/70 dark:shadow-black/20"
    : "bg-transparent";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow] duration-300 ${bar}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="#hero"
          className="group flex min-w-0 shrink-0 items-center gap-2 rounded-lg px-1 py-1 text-sm font-semibold tracking-tight text-zinc-900 outline-none ring-cyan-500/40 transition hover:text-zinc-950 focus-visible:ring-2 dark:text-zinc-100 dark:hover:text-white"
        >
          <span className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-zinc-200/80 bg-gradient-to-br from-cyan-500/35 to-violet-600/35 text-[10px] font-bold text-white dark:border-white/10 dark:from-cyan-500/30 dark:to-violet-600/30">
            AM
            <span className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <span className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-transparent" />
            </span>
          </span>
          <span className="hidden truncate sm:inline">Antonio Mellies</span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label={t.nav.primary}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-2.5 py-2 text-sm text-zinc-600 outline-none ring-cyan-500/40 transition hover:bg-zinc-900/5 hover:text-zinc-900 focus-visible:ring-2 dark:text-zinc-300 dark:hover:bg-white/5 dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeLanguageControls />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-zinc-200/90 bg-white/80 px-3 py-2 text-sm font-medium text-zinc-900 outline-none ring-cyan-500/40 transition hover:bg-zinc-100 focus-visible:ring-2 md:hidden dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {t.nav.menu}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="border-b border-zinc-200/80 bg-white/95 px-4 py-4 backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-zinc-950/95"
            initial={reduce ? undefined : { opacity: 0, y: -8 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <nav
              className="flex flex-col gap-1"
              aria-label={t.nav.mobilePrimary}
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3 py-3 text-base text-zinc-800 outline-none ring-cyan-500/40 hover:bg-zinc-900/5 focus-visible:ring-2 dark:text-zinc-200 dark:hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
