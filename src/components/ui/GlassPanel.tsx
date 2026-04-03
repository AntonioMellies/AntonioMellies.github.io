import type { HTMLAttributes } from "react";

type GlassPanelProps = HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "article" | "section";
};

export function GlassPanel({
  className = "",
  as: Component = "div",
  ...rest
}: GlassPanelProps) {
  return (
    <Component
      className={`rounded-2xl border border-zinc-200/80 bg-white/70 shadow-sm shadow-zinc-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] dark:shadow-none ${className}`}
      {...rest}
    />
  );
}
