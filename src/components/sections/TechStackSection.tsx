"use client";

import { motion, useReducedMotion } from "framer-motion";
import { techStack } from "@/data/site-content";
import { useLocale } from "@/contexts/LocaleContext";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechIcon } from "@/components/ui/TechIcon";

export function TechStackSection() {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  return (
    <MotionSection
      id="stack"
      ariaLabel={t.stack.aria}
      className="px-4 py-20 sm:px-6 sm:py-28"
    >
      <SectionHeading
        eyebrow={t.stack.eyebrow}
        title={t.stack.title}
        description={t.stack.description}
      />

      <motion.div
        className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3"
        initial={reduce ? false : "hidden"}
        whileInView={reduce ? undefined : "show"}
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={staggerContainer}
      >
        {techStack.map((item) => (
          <motion.div key={item.name} variants={fadeUp}>
            <GlassPanel className="flex items-start gap-4 p-5 transition hover:border-zinc-300/90 dark:hover:border-white/20">
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-zinc-200/90 bg-gradient-to-br from-white to-zinc-100 text-2xl text-cyan-700 dark:border-white/10 dark:from-white/10 dark:to-white/[0.02] dark:text-cyan-200">
                <TechIcon name={item.icon} className="h-7 w-7" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  {t.stack.techCategories[item.category]}
                </p>
                <p className="mt-1 text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  {item.name}
                </p>
              </div>
            </GlassPanel>
          </motion.div>
        ))}
      </motion.div>
    </MotionSection>
  );
}
