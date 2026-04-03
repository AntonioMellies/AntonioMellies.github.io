export type TechCategory =
  | "languages"
  | "runtime"
  | "data"
  | "platform"
  | "cloud"
  | "tooling"
  | "frontend";

export type Dictionary = {
  meta: { title: string; description: string };
  skipLink: string;
  nav: {
    primary: string;
    mobilePrimary: string;
    menu: string;
    links: {
      about: string;
      impact: string;
      stack: string;
      projects: string;
      experience: string;
      contact: string;
    };
  };
  theme: { label: string; dark: string; light: string; system: string };
  language: { label: string; ptBR: string; en: string; es: string };
  hero: {
    badge: string;
    greeting: string;
    headline: string;
    roles: string[];
    rolesSr: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    locationLabel: string;
    contactLabel: string;
    portraitAlt: string;
  };
  about: {
    aria: string;
    eyebrow: string;
    title: string;
    description: string;
    paragraphs: string[];
    educationTitle: string;
    degree: string;
    schoolLine: string;
    educationHighlight: string;
    eduLinks: { monograph: string; article: string };
    principlesTitle: string;
    principles: string[];
    resumeNote: string;
  };
  impact: {
    aria: string;
    eyebrow: string;
    title: string;
    description: string;
    items: { label: string; value: string; detail: string }[];
  };
  stack: {
    aria: string;
    eyebrow: string;
    title: string;
    description: string;
    techCategories: Record<TechCategory, string>;
  };
  projects: {
    aria: string;
    eyebrow: string;
    title: string;
    description: string;
    companySite: string;
    archShow: string;
    archHide: string;
    items: {
      name: string;
      company: string;
      period: string;
      summary: string;
      outcomes: string[];
      architecture: { title: string; body: string }[];
      stack: string[];
      linkHref: string;
    }[];
  };
  experience: {
    aria: string;
    eyebrow: string;
    title: string;
    description: string;
    nextEntry: string;
    items: {
      role: string;
      org: string;
      period: string;
      description: string;
      href: string;
    }[];
  };
  contact: {
    aria: string;
    eyebrow: string;
    title: string;
    description: string;
    directTitle: string;
    email: string;
    phone: string;
    location: string;
    locationValue: string;
    startEmail: string;
    socialTitle: string;
    socialBlurb: string;
    footer: string;
    mailtoSubject: string;
    socialLabels: Record<
      "linkedin" | "github" | "instagram" | "facebook" | "skype",
      string
    >;
  };
};
