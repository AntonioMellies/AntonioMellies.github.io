"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExperienceSection() {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const jobs = t.experience.items;

  return (
    <MotionSection
      id="experience"
      ariaLabel={t.experience.aria}
      className="px-4 py-20 sm:px-6 sm:py-28"
    >
      <SectionHeading
        eyebrow={t.experience.eyebrow}
        title={t.experience.title}
        description={t.experience.description}
      />

      <motion.div
        className="relative mx-auto mt-16 max-w-4xl"
        initial={reduce ? false : "hidden"}
        whileInView={reduce ? undefined : "show"}
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={staggerContainer}
      >
        <div
          className="absolute top-2 bottom-4 left-[11px] w-px bg-gradient-to-b from-cyan-500/50 via-zinc-300/40 to-transparent sm:left-4 dark:from-cyan-400/50 dark:via-white/15"
          aria-hidden
        />

        <ol className="relative space-y-10">
          {jobs.map((job, i) => (
            <motion.li
              key={`${job.org}-${job.period}`}
              variants={fadeUp}
              className="relative pl-10 sm:pl-12"
            >
              <span
                className="absolute top-2 left-0 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-500/45 bg-white shadow-[0_0_0_6px_rgba(250,250,250,0.85)] sm:left-0.5 dark:border-cyan-400/40 dark:bg-zinc-950 dark:shadow-[0_0_0_6px_rgba(24,24,27,0.65)]"
                aria-hidden
              >
                <span className="h-2 w-2 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 dark:from-cyan-300 dark:to-violet-500" />
              </span>
              <GlassPanel className="p-6 sm:p-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                      {job.role}
                    </h3>
                    <a
                      href={job.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex text-sm font-medium text-cyan-700 underline-offset-4 hover:underline dark:text-cyan-300"
                    >
                      {job.org}
                    </a>
                  </div>
                  <p className="text-sm font-medium text-zinc-500 sm:text-right">
                    {job.period}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {job.description}
                </p>
                {i === jobs.length - 1 ? null : (
                  <p className="sr-only">{t.experience.nextEntry}</p>
                )}
              </GlassPanel>
            </motion.li>
          ))}
        </ol>
      </motion.div>
    </MotionSection>
  );
}
