"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  return (
    <MotionSection
      id="about"
      ariaLabel={t.about.aria}
      className="px-4 py-20 sm:px-6 sm:py-28"
    >
      <SectionHeading
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        description={t.about.description}
      />

      <motion.div
        className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
        initial={reduce ? false : "hidden"}
        whileInView={reduce ? undefined : "show"}
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp}>
          <GlassPanel className="space-y-5 p-6 sm:p-8">
            {t.about.paragraphs.map((p) => (
              <p
                key={p.slice(0, 32)}
                className="text-pretty text-base leading-relaxed text-zinc-700 dark:text-zinc-300"
              >
                {p}
              </p>
            ))}
          </GlassPanel>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-6">
          <GlassPanel className="p-6 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              {t.about.educationTitle}
            </h3>
            <p className="mt-3 text-lg font-medium text-zinc-900 dark:text-zinc-50">
              {t.about.degree}
            </p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {t.about.schoolLine}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {t.about.educationHighlight}
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <a
                href="/static/academics/monograph.pdf"
                className="inline-flex items-center justify-center rounded-lg border border-zinc-200/90 bg-white/70 px-4 py-2 text-sm font-medium text-cyan-800 outline-none ring-cyan-500/40 transition hover:bg-zinc-100 focus-visible:ring-2 dark:border-white/10 dark:bg-white/5 dark:text-cyan-200 dark:hover:bg-white/10"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.about.eduLinks.monograph}
              </a>
              <a
                href="/static/academics/article.pdf"
                className="inline-flex items-center justify-center rounded-lg border border-zinc-200/90 bg-white/70 px-4 py-2 text-sm font-medium text-cyan-800 outline-none ring-cyan-500/40 transition hover:bg-zinc-100 focus-visible:ring-2 dark:border-white/10 dark:bg-white/5 dark:text-cyan-200 dark:hover:bg-white/10"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.about.eduLinks.article}
              </a>
            </div>
          </GlassPanel>

          <GlassPanel className="p-6 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              {t.about.principlesTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
              {t.about.principles.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-cyan-600 dark:bg-cyan-400" />
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-zinc-500 dark:text-zinc-500">
              {t.about.resumeNote}
            </p>
          </GlassPanel>
        </motion.div>
      </motion.div>
    </MotionSection>
  );
}
