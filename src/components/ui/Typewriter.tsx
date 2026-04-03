"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type TypewriterProps = {
  phrases: readonly string[];
  typingMs?: number;
  deletingMs?: number;
  pauseMs?: number;
  className?: string;
};

export function Typewriter({
  phrases,
  typingMs = 42,
  deletingMs = 28,
  pauseMs = 1600,
  className = "",
}: TypewriterProps) {
  const list = useMemo(() => [...phrases], [phrases]);
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;

    const full = list[index] ?? "";
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === full) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % list.length);
      }, 0);
    } else if (deleting) {
      timeout = setTimeout(() => {
        setText((t) => t.slice(0, -1));
      }, deletingMs);
    } else {
      timeout = setTimeout(() => {
        setText(full.slice(0, text.length + 1));
      }, typingMs);
    }

    return () => clearTimeout(timeout);
  }, [
    deleting,
    deletingMs,
    index,
    list,
    pauseMs,
    reduceMotion,
    text,
    typingMs,
  ]);

  if (reduceMotion) {
    return (
      <span className={className}>
        <span className="text-cyan-700 dark:text-cyan-300">{list[0]}</span>
      </span>
    );
  }

  return (
    <span className={className}>
      <span className="text-cyan-700 dark:text-cyan-300">{text}</span>
      <span
        className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[0.12em] bg-cyan-700/90 motion-safe:animate-pulse dark:bg-cyan-300/90"
        aria-hidden
      />
    </span>
  );
}
