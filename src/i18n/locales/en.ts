import type { Dictionary } from "@/i18n/types";

export const en: Dictionary = {
  meta: {
    title: "Antonio Mellies — Software Engineer",
    description:
      "Software engineer focused on backend, cloud platform, and data: production systems, integrations, and operations with observability and controlled releases.",
  },
  skipLink: "Skip to content",
  nav: {
    primary: "Primary",
    mobilePrimary: "Mobile primary",
    menu: "Menu",
    links: {
      about: "About",
      impact: "Impact",
      stack: "Stack",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
  },
  theme: {
    label: "Theme",
    dark: "Dark",
    light: "Light",
    system: "System",
  },
  language: {
    label: "Language",
    ptBR: "Português",
    en: "English",
    es: "Español",
  },
  hero: {
    greeting: "Hi, I'm Antonio Mellies.",
    headline:
      "Backend, cloud platform, and data systems with a focus on production reliability.",
    roles: [
      "Backend engineer",
      "Cloud and platform",
      "APIs and data systems",
      "Reliability-focused delivery",
    ],
    rolesSr:
      "Focus areas: backend engineering, cloud and platform, APIs and data systems, delivery with emphasis on reliability.",
    tagline:
      "Work on backend systems, data pipelines, and cloud-native services, prioritizing correctness, observability, and operations.",
    ctaPrimary: "Get in touch",
    ctaSecondary: "View selected projects",
    locationLabel: "Location",
    contactLabel: "Contact",
    portraitAlt: "Portrait of Antonio Mellies",
  },
  about: {
    aria: "About Antonio Mellies",
    eyebrow: "About",
    title: "Professional profile",
    description:
      "Background in industrial environments and high-traffic digital products; emphasis on explicit requirements, sustainable systems, and production operations.",
    paragraphs: [
      "My career began in manufacturing and industrial settings, where software supports operational processes. That foundation informs requirements work: bounded scope, measurable acceptance criteria, and systems designed for load variation and exceptional scenarios.",
      "I currently focus on services handling sensitive or high-volume data: APIs, persistence, observability, and cross-team integration, using Kubernetes, cloud services, and deployment automation. I work with product and operations/SRE functions to translate needs into maintainable, documented architectures.",
      "Ongoing learning through courses and hands-on work, including application security and data-oriented platforms.",
    ],
    educationTitle: "Education",
    degree: "Bachelor of Science — Computer Science",
    schoolLine:
      "Universidade do Vale do Itajaí (UNIVALI) · Jan 2013 — Jun 2018",
    educationHighlight:
      "Graduation work focused on security: vulnerabilities in on-chip communication for Network-on-Chip (NoC) architectures.",
    eduLinks: {
      monograph: "Monograph (pt-BR)",
      article: "Article (EN)",
    },
    principlesTitle: "Principles",
    principles: [
      "Explicit contracts and data models for APIs and persistence.",
      "Operability as a requirement: logging, metrics, deployment and rollback procedures.",
      "Code review and stakeholder alignment as part of the delivery cycle.",
    ],
    resumeNote: "PDF resume available on request via the email above.",
  },
  impact: {
    aria: "Impact and achievements",
    eyebrow: "Impact",
    title: "Scope and practice",
    description:
      "Objective summary of production experience, industries served, and engineering approach (not marketing metrics).",
    items: [
      {
        label: "Production systems",
        value: "10+ yrs",
        detail: "Continuous delivery and evolution of software in enterprise settings.",
      },
      {
        label: "Sectors",
        value: "3+",
        detail:
          "Consumer digital services, logistics, manufacturing and ERP, healthcare technology.",
      },
      {
        label: "Focus",
        value: "End-to-end",
        detail:
          "From domain modeling through deployment and operational controls.",
      },
      {
        label: "Approach",
        value: "Quality",
        detail:
          "Automated tests, incremental migrations, and phased releases.",
      },
    ],
  },
  stack: {
    aria: "Technology stack",
    eyebrow: "Tech stack",
    title: "Core technologies",
    description:
      "Representative list; technology choices follow project, team, and operational constraints rather than trends alone.",
    techCategories: {
      languages: "Languages",
      runtime: "Runtime",
      data: "Data",
      platform: "Platform",
      cloud: "Cloud",
      tooling: "Tooling",
      frontend: "Frontend",
    },
  },
  projects: {
    aria: "Projects and case studies",
    eyebrow: "Projects",
    title: "Projects and references",
    description:
      "Executive summary of project involvement (no confidential data): context, relevant technical decisions, and outcomes.",
    companySite: "Company site",
    archShow: "Architecture notes",
    archHide: "Hide architecture",
    items: [
      {
        name: "Trust & resolution platform services",
        company: "Reclame AQUI",
        period: "2021 — Present",
        summary:
          "Backend-oriented delivery for consumer–company dispute flows: high-read APIs, integrations, and operational resilience on a public-facing product.",
        outcomes: [
          "Service boundaries aligned to domain workflows (intake, mediation, notifications).",
          "Operational patterns for safer deploys and faster incident triage.",
          "Data access strategies balancing consistency needs with throughput.",
        ],
        architecture: [
          {
            title: "Service layout",
            body: "Modular services behind gateways/load balancers, with clear ownership per bounded context (cases, identity touchpoints, integrations).",
          },
          {
            title: "Data plane",
            body: "Document-oriented storage where flexible schemas help evolve dispute records; relational tooling where transactional guarantees dominate.",
          },
          {
            title: "Platform",
            body: "Kubernetes-first execution on cloud infrastructure with CI/CD discipline and environment parity as a baseline goal.",
          },
        ],
        stack: ["Node.js", "Java", "Kubernetes", "GCP", "MongoDB"],
        linkHref: "https://www.reclameaqui.com.br/",
      },
      {
        name: "Logistics intelligence & automation",
        company: "GH Transporte & Logística",
        period: "2020 — 2021",
        summary:
          "IT leadership with a strong delivery component: automation, BI-oriented insights, and pragmatic tooling for transport operations.",
        outcomes: [
          "Dashboards and reporting paths that reduce guesswork in daily operations.",
          "Automation that shortens manual coordination loops.",
          "Technology choices driven by maintainability in a small-team setting.",
        ],
        architecture: [
          {
            title: "Integration mindset",
            body: "Systems-of-record stay authoritative; analytics layers consume events/snapshots without corrupting operational truth.",
          },
          {
            title: "Embedded touchpoints",
            body: "Where hardware meets software, interfaces are designed for failure modes (connectivity, retries, operator clarity).",
          },
          {
            title: "Governance",
            body: "Access control and backups treated as part of the feature set, not an afterthought.",
          },
        ],
        stack: [
          "Business intelligence",
          "Automation",
          "Embedded integrations",
        ],
        linkHref: "http://www.ghtransporte.com.br/",
      },
      {
        name: "Healthcare ERP engineering",
        company: "Dynamix Comércio de Software",
        period: "2019 — 2020",
        summary:
          "Senior Java development in health-sector solutions: enterprise persistence, UI stacks common in ERP contexts, and disciplined schema evolution.",
        outcomes: [
          "Feature work grounded in regulated-domain constraints.",
          "Database migrations with backward-compatible rollout strategies.",
          "Collaboration across PM/QA with traceability (Jira) and versioned schema changes (Liquibase).",
        ],
        architecture: [
          {
            title: "Layering",
            body: "Classic enterprise layering (presentation, service, persistence) with explicit transaction boundaries.",
          },
          {
            title: "Persistence",
            body: "JPA/Hibernate models with migration tooling to keep environments aligned.",
          },
          {
            title: "Delivery",
            body: "Maven-based builds and Git workflows aimed at repeatable releases.",
          },
        ],
        stack: ["Java", "JSF", "JPA", "MySQL", "Oracle", "Liquibase", "Maven"],
        linkHref: "http://www.dynamix.com.br/",
      },
    ],
  },
  experience: {
    aria: "Work experience timeline",
    eyebrow: "Experience",
    title: "Work experience",
    description:
      "Role history with emphasis on backend delivery, system ownership, and cross-functional collaboration, from ERP to cloud-native environments.",
    nextEntry: "Next entry follows.",
    items: [
      {
        role: "Software Analyst — Backend Developer",
        org: "Reclame AQUI",
        period: "Oct 2021 — Present",
        description:
          "Building and improving services for consumer–company conflict resolution: Java & Node.js ecosystems, Kubernetes, GCP, MongoDB, and strong operational focus.",
        href: "https://www.reclameaqui.com.br/",
      },
      {
        role: "IT Manager",
        org: "GH Transporte & Logística",
        period: "May 2020 — Oct 2021",
        description:
          "IT management in transport/logistics with automation, BI, and embedded technologies to support decision-making.",
        href: "http://www.ghtransporte.com.br/",
      },
      {
        role: "Senior Java Developer",
        org: "Dynamix Comércio de Software Ltda",
        period: "Apr 2019 — May 2020",
        description:
          "Health-sector solutions with Java, Maven, Git, Jira, Liquibase, MySQL, Oracle, JSF, and JPA.",
        href: "http://www.dynamix.com.br/",
      },
      {
        role: "Analyst / Developer",
        org: "Itacorda Ind. e Com. de Cordas LTDA",
        period: "Apr 2013 — Apr 2019",
        description:
          "ERP development and maintenance, requirements across infrastructure and software, and supervision of internal systems.",
        href: "https://itacorda.com.br/",
      },
    ],
  },
  contact: {
    aria: "Contact Antonio Mellies",
    eyebrow: "Contact",
    title: "Contact",
    description:
      "For backend or platform opportunities, or technical discussion of architecture and delivery practices, use the channels below.",
    directTitle: "Direct lines",
    email: "Email",
    phone: "Phone",
    location: "Location",
    locationValue: "Penha, Santa Catarina, Brazil",
    startEmail: "Start an email",
    socialTitle: "Social",
    socialBlurb:
      "Fastest response typically via email and LinkedIn.",
    footer:
      "Built with Next.js; the interface prioritizes readability and accessibility best practices.",
    mailtoSubject: "Contact — Antonio Mellies",
    socialLabels: {
      linkedin: "LinkedIn",
      github: "GitHub",
      instagram: "Instagram",
      facebook: "Facebook",
      skype: "Skype",
    },
  },
};
