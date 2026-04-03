"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProjectsSection() {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();
  const projects = t.projects.items;

  return (
    <MotionSection
      id="projects"
      ariaLabel={t.projects.aria}
      className="px-4 py-20 sm:px-6 sm:py-28"
    >
      <SectionHeading
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        description={t.projects.description}
      />

      <motion.div
        className="mx-auto mt-14 flex max-w-6xl flex-col gap-5"
        initial={reduce ? false : "hidden"}
        whileInView={reduce ? undefined : "show"}
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={staggerContainer}
      >
        {projects.map((project, idx) => {
          const expanded = open === idx;
          const panelId = `${baseId}-panel-${idx}`;
          const buttonId = `${baseId}-btn-${idx}`;

          return (
            <motion.article key={project.name} variants={fadeUp}>
              <GlassPanel className="overflow-hidden">
                <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:p-8">
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-cyan-800 dark:text-cyan-300/90">
                      {project.company} · {project.period}
                    </p>
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-2xl">
                      {project.name}
                    </h3>
                    <p className="max-w-2xl text-pretty text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {project.summary}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                      {project.outcomes.map((o) => (
                        <li key={o} className="flex gap-2">
                          <span
                            className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-emerald-500/90 dark:bg-emerald-400/90"
                            aria-hidden
                          />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-zinc-200/90 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-800 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 sm:items-end">
                    <a
                      href={project.linkHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-zinc-200/90 bg-white/70 px-4 py-2 text-sm font-semibold text-cyan-800 outline-none ring-cyan-500/40 transition hover:bg-zinc-100 focus-visible:ring-2 dark:border-white/10 dark:bg-white/5 dark:text-cyan-200 dark:hover:bg-white/10"
                    >
                      {t.projects.companySite}
                    </a>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={expanded}
                      aria-controls={panelId}
                      className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600/95 to-violet-600/95 px-4 py-2 text-sm font-semibold text-white outline-none ring-offset-2 ring-offset-zinc-50 transition hover:brightness-110 focus-visible:ring-2 focus-visible:ring-cyan-500 dark:from-cyan-500/90 dark:to-violet-600/90 dark:ring-offset-zinc-950 dark:focus-visible:ring-cyan-400"
                      onClick={() => setOpen((v) => (v === idx ? null : idx))}
                    >
                      {expanded ? t.projects.archHide : t.projects.archShow}
                    </button>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {expanded ? (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={reduce ? undefined : { height: 0, opacity: 0 }}
                      animate={reduce ? undefined : { height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden border-t border-zinc-200/80 bg-zinc-50/80 dark:border-white/10 dark:bg-black/20"
                    >
                      <div className="grid gap-6 p-6 sm:grid-cols-3 sm:p-8">
                        {project.architecture.map((block) => (
                          <div key={block.title} className="space-y-2">
                            <h4 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                              {block.title}
                            </h4>
                            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                              {block.body}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </GlassPanel>
            </motion.article>
          );
        })}
      </motion.div>
    </MotionSection>
  );
}
