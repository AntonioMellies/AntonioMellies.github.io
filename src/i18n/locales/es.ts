import type { Dictionary } from "@/i18n/types";

export const es: Dictionary = {
  meta: {
    title: "Antonio Mellies — Ingeniero de Software",
    description:
      "Ingeniero de software enfocado en backend, plataforma cloud y datos: sistemas en producción, integraciones y operación con métricas y despliegues controlados.",
  },
  skipLink: "Saltar al contenido",
  nav: {
    primary: "Principal",
    mobilePrimary: "Principal (móvil)",
    menu: "Menú",
    links: {
      about: "Sobre mí",
      impact: "Impacto",
      stack: "Stack",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
    },
  },
  theme: {
    label: "Tema",
    dark: "Oscuro",
    light: "Claro",
    system: "Sistema",
  },
  language: {
    label: "Idioma",
    ptBR: "Português",
    en: "English",
    es: "Español",
  },
  hero: {
    badge: "Disponible para oportunidades en ingeniería de software",
    greeting: "Hola, soy Antonio Mellies.",
    headline:
      "Backend, plataforma cloud y datos con foco en fiabilidad en producción.",
    roles: [
      "Ingeniero backend",
      "Cloud y plataforma",
      "APIs y datos",
      "Entrega enfocada en fiabilidad",
    ],
    rolesSr:
      "Áreas de actuación: ingeniería backend, cloud y plataforma, APIs y datos, entrega con énfasis en fiabilidad.",
    tagline:
      "Actuación en sistemas backend, pipelines de datos y servicios cloud-native, con prioridad en corrección, observabilidad y operación.",
    ctaPrimary: "Contacto",
    ctaSecondary: "Ver proyectos seleccionados",
    locationLabel: "Ubicación",
    contactLabel: "Contacto",
    portraitAlt: "Retrato de Antonio Mellies",
  },
  about: {
    aria: "Sobre Antonio Mellies",
    eyebrow: "Sobre mí",
    title: "Perfil profesional",
    description:
      "Experiencia en entornos industriales y en productos digitales de alto tráfico; trabajo con requisitos explícitos, evolución de sistemas y operación en producción.",
    paragraphs: [
      "La trayectoria comenzó en contextos industriales y de manufactura, donde el software forma parte de los procesos operativos. Esa base orienta la definición de requisitos: alcance acotado, criterios de aceptación medibles y sistemas preparados para variación de carga y escenarios excepcionales.",
      "Actualmente concentro la actuación en servicios que tratan datos sensibles o de alto volumen: APIs, persistencia, observabilidad e integración entre equipos, con Kubernetes, servicios en la nube y automatización de despliegue. Colaboración con producto y con áreas de operaciones/SRE para traducir demandas en arquitectura mantenible y documentada.",
      "Actualización continua mediante cursos y proyectos prácticos, incluida seguridad de aplicaciones y ecosistemas orientados a datos.",
    ],
    educationTitle: "Formación",
    degree: "Grado en Ciencias de la Computación",
    schoolLine:
      "Universidade do Vale do Itajaí (UNIVALI) · ene 2013 — jun 2018",
    educationHighlight:
      "Trabajo de fin de carrera centrado en seguridad: vulnerabilidades en la comunicación on-chip en arquitecturas Network-on-Chip (NoC).",
    eduLinks: {
      monograph: "Monografía (pt-BR)",
      article: "Artículo (EN)",
    },
    principlesTitle: "Principios",
    principles: [
      "Prioridad a contratos y modelos de datos explícitos en APIs y persistencia.",
      "Operabilidad como requisito: logging, métricas, procedimientos de despliegue y rollback.",
      "Revisión de código y alineación con stakeholders como parte del ciclo de entrega.",
    ],
    resumeNote:
      "CV en PDF disponible bajo solicitud al correo indicado arriba.",
  },
  impact: {
    aria: "Impacto y logros",
    eyebrow: "Impacto",
    title: "Actuación y alcance",
    description:
      "Resumen objetivo de experiencia en producción, sectores atendidos y enfoque de ingeniería (sin métricas de marketing).",
    items: [
      {
        label: "Sistemas en producción",
        value: "10+ años",
        detail: "Entrega y evolución continua de software en entorno corporativo.",
      },
      {
        label: "Sectores",
        value: "3+",
        detail:
          "Servicios digitales al consumidor, logística, manufactura y ERP, salud.",
      },
      {
        label: "Alcance",
        value: "De extremo a extremo",
        detail:
          "Del modelado de dominio al despliegue y controles operativos.",
      },
      {
        label: "Abordaje",
        value: "Calidad",
        detail:
          "Pruebas automatizadas, migraciones incrementales y entregas por fases.",
      },
    ],
  },
  stack: {
    aria: "Stack tecnológico",
    eyebrow: "Stack",
    title: "Principales tecnologías",
    description:
      "Lista representativa; la elección de stack sigue restricciones de proyecto, equipo y operación, no tendencia aislada.",
    techCategories: {
      languages: "Lenguajes",
      runtime: "Runtime",
      data: "Datos",
      platform: "Plataforma",
      cloud: "Cloud",
      tooling: "Herramientas",
      frontend: "Frontend",
    },
  },
  projects: {
    aria: "Proyectos y casos de estudio",
    eyebrow: "Proyectos",
    title: "Proyectos y referencias",
    description:
      "Resumen ejecutivo de participación en proyectos (sin datos confidenciales): contexto, decisiones técnicas relevantes y resultados.",
    companySite: "Sitio de la empresa",
    archShow: "Notas de arquitectura",
    archHide: "Ocultar arquitectura",
    items: [
      {
        name: "Servicios de plataforma de confianza y resolución",
        company: "Reclame AQUI",
        period: "2021 — Actualidad",
        summary:
          "Entrega backend para flujos de disputa consumidor–empresa: APIs de alta lectura, integraciones y resiliencia operativa en un producto público.",
        outcomes: [
          "Límites de servicio alineados con flujos de dominio (intake, mediación, notificaciones).",
          "Patrones operativos para despliegues más seguros y triage más rápido de incidentes.",
          "Estrategias de acceso a datos equilibrando consistencia y rendimiento.",
        ],
        architecture: [
          {
            title: "Diseño de servicios",
            body: "Servicios modulares detrás de gateways/balanceadores, con ownership claro por contexto (casos, identidad, integraciones).",
          },
          {
            title: "Plano de datos",
            body: "Almacenamiento documental donde esquemas flexibles ayudan a evolver registros; herramientas relacionales donde mandan las transacciones.",
          },
          {
            title: "Plataforma",
            body: "Ejecución Kubernetes-first en la nube con CI/CD y paridad de entornos como base.",
          },
        ],
        stack: ["Node.js", "Java", "Kubernetes", "GCP", "MongoDB"],
        linkHref: "https://www.reclameaqui.com.br/",
      },
      {
        name: "Inteligencia logística y automatización",
        company: "GH Transporte & Logística",
        period: "2020 — 2021",
        summary:
          "Liderazgo de TI con fuerte componente de entrega: automatización, BI y herramientas pragmáticas para operaciones de transporte.",
        outcomes: [
          "Dashboards e informes que reducen suposiciones en el día a día.",
          "Automatización que acorta bucles manuales de coordinación.",
          "Decisiones tecnológicas guiadas por mantenibilidad en equipos pequeños.",
        ],
        architecture: [
          {
            title: "Integración",
            body: "Los sistemas de registro siguen siendo autoritativos; las capas analíticas consumen eventos/snapshots sin corromper la verdad operativa.",
          },
          {
            title: "Puntos embebidos",
            body: "Donde el hardware encuentra el software, interfaces pensadas para fallos (conectividad, reintentos, claridad para el operador).",
          },
          {
            title: "Gobernanza",
            body: "Control de acceso y copias de seguridad como parte del producto, no como un extra.",
          },
        ],
        stack: [
          "Business intelligence",
          "Automatización",
          "Integraciones embebidas",
        ],
        linkHref: "http://www.ghtransporte.com.br/",
      },
      {
        name: "Ingeniería ERP en salud",
        company: "Dynamix Comércio de Software",
        period: "2019 — 2020",
        summary:
          "Desarrollo senior en Java en soluciones de salud: persistencia enterprise, stacks de UI comunes en ERP y evolución disciplinada del esquema.",
        outcomes: [
          "Features ancladas en restricciones de dominio regulado.",
          "Migraciones de base de datos con rollout compatible hacia atrás.",
          "Colaboración con PM/QA con trazabilidad (Jira) y cambios versionados (Liquibase).",
        ],
        architecture: [
          {
            title: "Capas",
            body: "Capas enterprise clásicas (presentación, servicio, persistencia) con límites de transacción explícitos.",
          },
          {
            title: "Persistencia",
            body: "Modelos JPA/Hibernate con migraciones para alinear entornos.",
          },
          {
            title: "Entrega",
            body: "Builds Maven y flujos Git orientados a releases repetibles.",
          },
        ],
        stack: ["Java", "JSF", "JPA", "MySQL", "Oracle", "Liquibase", "Maven"],
        linkHref: "http://www.dynamix.com.br/",
      },
    ],
  },
  experience: {
    aria: "Línea de tiempo de experiencia",
    eyebrow: "Experiencia",
    title: "Experiencia profesional",
    description:
      "Cronología de roles con énfasis en backend, propiedad de sistemas y colaboración con otras áreas, de ERP a entornos cloud-native.",
    nextEntry: "Siguiente entrada a continuación.",
    items: [
      {
        role: "Analista de software — desarrollador backend",
        org: "Reclame AQUI",
        period: "oct 2021 — Actualidad",
        description:
          "Construcción y mejora de servicios para resolución de conflictos consumidor–empresa: ecosistemas Java y Node.js, Kubernetes, GCP, MongoDB y fuerte foco operativo.",
        href: "https://www.reclameaqui.com.br/",
      },
      {
        role: "Gerente de TI",
        org: "GH Transporte & Logística",
        period: "may 2020 — oct 2021",
        description:
          "Gestión de TI en transporte/logística con automatización, BI y tecnologías embebidas para apoyar la toma de decisiones.",
        href: "http://www.ghtransporte.com.br/",
      },
      {
        role: "Desarrollador Java senior",
        org: "Dynamix Comércio de Software Ltda",
        period: "abr 2019 — may 2020",
        description:
          "Soluciones en salud con Java, Maven, Git, Jira, Liquibase, MySQL, Oracle, JSF y JPA.",
        href: "http://www.dynamix.com.br/",
      },
      {
        role: "Analista / desarrollador",
        org: "Itacorda Ind. e Com. de Cordas LTDA",
        period: "abr 2013 — abr 2019",
        description:
          "Desarrollo y mantenimiento de ERP, requisitos en infraestructura y software, y supervisión de sistemas internos.",
        href: "https://itacorda.com.br/",
      },
    ],
  },
  contact: {
    aria: "Contacto con Antonio Mellies",
    eyebrow: "Contacto",
    title: "Contacto",
    description:
      "Para propuestas de trabajo en backend o plataforma, o para discusión técnica sobre arquitectura y procesos de entrega, utilice los canales siguientes.",
    directTitle: "Canales directos",
    email: "Correo",
    phone: "Teléfono",
    location: "Ubicación",
    locationValue: "Penha, Santa Catarina, Brasil",
    startEmail: "Enviar un correo",
    socialTitle: "Social",
    socialBlurb:
      "Respuesta en general más rápida por correo y LinkedIn.",
    footer:
      "Desarrollado con Next.js; la interfaz prioriza legibilidad y prácticas de accesibilidad.",
    mailtoSubject: "Contacto — Antonio Mellies",
    socialLabels: {
      linkedin: "LinkedIn",
      github: "GitHub",
      instagram: "Instagram",
      facebook: "Facebook",
      skype: "Skype",
    },
  },
};
