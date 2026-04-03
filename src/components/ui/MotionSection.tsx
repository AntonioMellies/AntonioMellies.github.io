"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "@/lib/motion";

type MotionSectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function MotionSection({
  id,
  children,
  className = "",
  ariaLabel,
}: MotionSectionProps) {
  const reduce = useReducedMotion();

  return (
    <motion.section
      id={id}
      aria-label={ariaLabel}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={fadeUp}
      className={`scroll-mt-28 ${className}`}
    >
      {children}
    </motion.section>
  );
}
