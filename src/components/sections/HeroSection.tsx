"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site-content";
import { useLocale } from "@/contexts/LocaleContext";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Typewriter } from "@/components/ui/Typewriter";

export function HeroSection() {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const roles = t.hero.roles;

  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-24 pt-28 sm:pb-32 sm:pt-36"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute -left-1/3 top-0 h-[520px] w-[520px] rounded-full bg-cyan-500/15 blur-3xl dark:bg-cyan-500/20" />
        <div className="absolute -right-1/4 bottom-0 h-[480px] w-[480px] rounded-full bg-violet-500/15 blur-3xl dark:bg-violet-600/25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.08),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.1),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.15),transparent_40%)]" />
      </div>

      <motion.div
        className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
        initial={reduce ? false : "hidden"}
        animate={reduce ? undefined : "show"}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-zinc-600 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.85)] dark:bg-emerald-400 dark:shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            {t.hero.badge}
          </p>

          <div className="space-y-4">
            <h1
              id="hero-heading"
              className="text-balance text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl"
            >
              <span className="block text-zinc-600 dark:text-zinc-400">
                {t.hero.greeting}
              </span>
              <span className="mt-2 block bg-gradient-to-r from-cyan-600 via-sky-600 to-violet-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-300 dark:to-violet-300">
                {t.hero.headline}
              </span>
            </h1>
            <p
              className="max-w-xl text-pretty text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl"
              aria-hidden
            >
              <Typewriter
                phrases={roles}
                className="block min-h-[1.6em] text-zinc-800 dark:text-zinc-200"
              />
            </p>
            <p className="sr-only">
              {t.hero.rolesSr}
            </p>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {t.hero.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-600/20 outline-none ring-offset-2 ring-offset-zinc-50 transition hover:brightness-110 focus-visible:ring-2 focus-visible:ring-cyan-500 dark:from-cyan-500 dark:to-violet-600 dark:shadow-cyan-500/25 dark:ring-offset-zinc-950 dark:focus-visible:ring-cyan-400"
              whileHover={reduce ? undefined : { scale: 1.02 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
            >
              {t.hero.ctaPrimary}
            </motion.a>
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300/90 bg-white/70 px-6 py-3 text-sm font-semibold text-zinc-900 outline-none ring-cyan-500/40 transition hover:bg-zinc-100 focus-visible:ring-2 dark:border-white/15 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>

          <dl className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200/80 bg-white/60 p-4 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.03]">
              <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                {t.hero.locationLabel}
              </dt>
              <dd className="mt-1 text-sm text-zinc-800 dark:text-zinc-200">
                {t.contact.locationValue}
              </dd>
            </div>
            <div className="rounded-2xl border border-zinc-200/80 bg-white/60 p-4 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.03]">
              <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                {t.hero.contactLabel}
              </dt>
              <dd className="mt-1 text-sm">
                <a
                  className="text-cyan-700 underline-offset-4 hover:underline dark:text-cyan-300"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="relative mx-auto flex max-w-md justify-center lg:mx-0 lg:justify-end"
        >
          <div className="relative">
            <motion.div
              aria-hidden
              className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-transparent to-violet-600/30 blur-2xl dark:from-cyan-500/30 dark:to-violet-600/40"
              animate={
                reduce
                  ? undefined
                  : { opacity: [0.55, 0.85, 0.55], rotate: [0, 1.5, 0] }
              }
              transition={
                reduce
                  ? undefined
                  : { duration: 10, repeat: Infinity, ease: "easeInOut" }
              }
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white/50 p-2 shadow-2xl shadow-zinc-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/40 dark:shadow-black/50">
              <Image
                src="/img/profile.png"
                alt={t.hero.portraitAlt}
                width={420}
                height={520}
                priority
                className="h-auto w-full max-w-[320px] rounded-[1.6rem] object-cover sm:max-w-[360px]"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
