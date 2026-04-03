"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ImpactSection() {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  return (
    <MotionSection
      id="impact"
      ariaLabel={t.impact.aria}
      className="px-4 py-20 sm:px-6 sm:py-24"
    >
      <SectionHeading
        eyebrow={t.impact.eyebrow}
        title={t.impact.title}
        description={t.impact.description}
      />

      <motion.div
        className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4"
        initial={reduce ? false : "hidden"}
        whileInView={reduce ? undefined : "show"}
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={staggerContainer}
      >
        {t.impact.items.map((item) => (
          <motion.div key={item.label} variants={fadeUp}>
            <GlassPanel className="group relative h-full overflow-hidden p-5 transition hover:border-cyan-500/35 dark:hover:border-cyan-400/30">
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-600/10" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                {item.label}
              </p>
              <p className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                {item.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.detail}
              </p>
            </GlassPanel>
          </motion.div>
        ))}
      </motion.div>
    </MotionSection>
  );
}
