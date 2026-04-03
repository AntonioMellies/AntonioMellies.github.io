"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSkype,
} from "react-icons/fa6";
import { site } from "@/data/site-content";
import { useLocale } from "@/contexts/LocaleContext";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconFor = (key: (typeof site.social)[number]["key"]) => {
  switch (key) {
    case "linkedin":
      return FaLinkedin;
    case "github":
      return FaGithub;
    case "instagram":
      return FaInstagram;
    case "facebook":
      return FaFacebook;
    case "skype":
      return FaSkype;
    default:
      return null;
  }
};

export function ContactSection() {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(t.contact.mailtoSubject)}`;

  return (
    <MotionSection
      id="contact"
      ariaLabel={t.contact.aria}
      className="px-4 pb-28 pt-20 sm:px-6 sm:pb-32 sm:pt-24"
    >
      <SectionHeading
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        description={t.contact.description}
      />

      <motion.div
        className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]"
        initial={reduce ? false : "hidden"}
        whileInView={reduce ? undefined : "show"}
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp}>
          <GlassPanel className="relative overflow-hidden p-8">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/15 blur-3xl dark:bg-cyan-500/25" />
            <div className="pointer-events-none absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-violet-500/12 blur-3xl dark:bg-violet-600/20" />
            <h3 className="relative text-lg font-semibold text-zinc-900 dark:text-white">
              {t.contact.directTitle}
            </h3>
            <dl className="relative mt-6 space-y-4 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  {t.contact.email}
                </dt>
                <dd className="mt-1">
                  <a
                    className="text-base font-medium text-cyan-700 underline-offset-4 hover:underline dark:text-cyan-300"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  {t.contact.phone}
                </dt>
                <dd className="mt-1">
                  <a
                    className="text-base font-medium text-zinc-800 underline-offset-4 hover:underline dark:text-zinc-200"
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  {t.contact.location}
                </dt>
                <dd className="mt-1 text-base text-zinc-700 dark:text-zinc-300">
                  {t.contact.locationValue}
                </dd>
              </div>
            </dl>

            <motion.a
              href={mailto}
              className="relative mt-8 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-600/20 outline-none ring-offset-2 ring-offset-zinc-50 focus-visible:ring-2 focus-visible:ring-cyan-500 dark:from-cyan-500 dark:to-violet-600 dark:shadow-cyan-500/25 dark:ring-offset-zinc-950 dark:focus-visible:ring-cyan-400 sm:w-auto"
              whileHover={reduce ? undefined : { scale: 1.02 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
            >
              {t.contact.startEmail}
            </motion.a>
          </GlassPanel>
        </motion.div>

        <motion.div variants={fadeUp}>
          <GlassPanel className="p-8">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
              {t.contact.socialTitle}
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {t.contact.socialBlurb}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {site.social.map((s) => {
                const Icon = iconFor(s.key);
                return (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-xl border border-zinc-200/90 bg-white/60 px-4 py-3 text-sm font-medium text-zinc-800 outline-none ring-cyan-500/40 transition hover:border-zinc-300 hover:bg-zinc-50 focus-visible:ring-2 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-200 dark:hover:border-white/20 dark:hover:bg-white/5"
                    >
                      {Icon ? (
                        <Icon
                          className="h-5 w-5 text-cyan-700 transition group-hover:scale-105 dark:text-cyan-300"
                          aria-hidden
                        />
                      ) : null}
                      <span>{t.contact.socialLabels[s.key]}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </GlassPanel>
        </motion.div>
      </motion.div>

      <p className="mx-auto mt-12 max-w-2xl text-center text-xs text-zinc-500 dark:text-zinc-600">
        © {new Date().getFullYear()} {site.name}. {t.contact.footer}
      </p>
    </MotionSection>
  );
}
