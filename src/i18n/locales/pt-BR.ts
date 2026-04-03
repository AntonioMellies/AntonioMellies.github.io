import type { Dictionary } from "@/i18n/types";

export const ptBR: Dictionary = {
  meta: {
    title: "Antonio Mellies — Engenheiro de Software",
    description:
      "Engenheiro de software com foco em backend, plataforma cloud e dados: sistemas em produção, integrações e operação com métricas e deploys controlados.",
  },
  skipLink: "Pular para o conteúdo",
  nav: {
    primary: "Principal",
    mobilePrimary: "Principal (mobile)",
    menu: "Menu",
    links: {
      about: "Sobre",
      impact: "Impacto",
      stack: "Stack",
      projects: "Projetos",
      experience: "Experiência",
      contact: "Contato",
    },
  },
  theme: {
    label: "Tema",
    dark: "Escuro",
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
    badge: "Disponível para oportunidades em engenharia de software",
    greeting: "Olá, eu sou Antonio Mellies.",
    headline:
      "Backend, plataforma cloud e dados com foco em confiabilidade em produção.",
    roles: [
      "Engenheiro backend",
      "Cloud e plataforma",
      "APIs e dados",
      "Entrega com foco em confiabilidade",
    ],
    rolesSr:
      "Áreas de atuação: engenharia backend, cloud e plataforma, APIs e dados, entrega com ênfase em confiabilidade.",
    tagline:
      "Atuação em sistemas backend, pipelines de dados e serviços cloud-native, com prioridade para correção, observabilidade e operação.",
    ctaPrimary: "Entrar em contato",
    ctaSecondary: "Ver projetos selecionados",
    locationLabel: "Localização",
    contactLabel: "Contato",
    portraitAlt: "Retrato de Antonio Mellies",
  },
  about: {
    aria: "Sobre Antonio Mellies",
    eyebrow: "Sobre",
    title: "Perfil profissional",
    description:
      "Experiência em ambientes industriais e em produtos digitais de alto tráfego; trabalho com requisitos explícitos, evolução de sistemas e operação em produção.",
    paragraphs: [
      "A carreira iniciou em contextos industriais e de manufatura, onde o software integra processos operacionais. Essa base orienta a definição de requisitos: escopo delimitado, critérios de aceite mensuráveis e sistemas preparados para variação de carga e cenários excepcionais.",
      "Atualmente concentro a atuação em serviços que tratam dados sensíveis ou de alto volume: APIs, persistência, observabilidade e integração entre equipes, com Kubernetes, serviços de nuvem e automação de deploy. Colaboração com produto e com áreas de operações/SRE para traduzir demandas em arquitetura mantível e documentada.",
      "Atualização contínua por meio de cursos e projetos práticos, incluindo segurança de aplicações e ecossistemas orientados a dados.",
    ],
    educationTitle: "Formação",
    degree: "Bacharel em Ciência da Computação",
    schoolLine: "Universidade do Vale do Itajaí (UNIVALI) · jan 2013 — jun 2018",
    educationHighlight:
      "Trabalho de conclusão focado em segurança: vulnerabilidades na comunicação on-chip em arquiteturas Network-on-Chip (NoC).",
    eduLinks: {
      monograph: "Monografia (pt-BR)",
      article: "Artigo (EN)",
    },
    principlesTitle: "Princípios",
    principles: [
      "Prioridade a contratos e modelos de dados explícitos em APIs e persistência.",
      "Operabilidade como requisito: logging, métricas, procedimentos de deploy e rollback.",
      "Revisão de código e alinhamento com stakeholders como parte do ciclo de entrega.",
    ],
    resumeNote:
      "Currículo em PDF disponível mediante solicitação pelo e-mail indicado acima.",
  },
  impact: {
    aria: "Impacto e conquistas",
    eyebrow: "Impacto",
    title: "Atuação e escopo",
    description:
      "Resumo objetivo de experiência em produção, setores atendidos e abordagem de engenharia (sem métricas de marketing).",
    items: [
      {
        label: "Sistemas em produção",
        value: "10+ anos",
        detail: "Entrega e evolução contínua de software em ambiente corporativo.",
      },
      {
        label: "Setores",
        value: "3+",
        detail:
          "Serviços digitais ao consumidor, logística, manufatura e ERP, saúde.",
      },
      {
        label: "Foco",
        value: "Ponta a ponta",
        detail:
          "Da modelagem de domínio ao deploy e controles operacionais.",
      },
      {
        label: "Abordagem",
        value: "Qualidade",
        detail:
          "Testes automatizados, migrações incrementais e entregas faseadas.",
      },
    ],
  },
  stack: {
    aria: "Stack tecnológica",
    eyebrow: "Stack",
    title: "Principais tecnologias",
    description:
      "Lista representativa; a escolha de stack segue restrições de projeto, equipe e operação, não tendência isolada.",
    techCategories: {
      languages: "Linguagens",
      runtime: "Runtime",
      data: "Dados",
      platform: "Plataforma",
      cloud: "Cloud",
      tooling: "Ferramentas",
      frontend: "Frontend",
    },
  },
  projects: {
    aria: "Projetos e estudos de caso",
    eyebrow: "Projetos",
    title: "Projetos e referências",
    description:
      "Resumo executivo de participação em projetos (sem dados confidenciais): contexto, decisões técnicas relevantes e resultados.",
    companySite: "Site da empresa",
    archShow: "Notas de arquitetura",
    archHide: "Ocultar arquitetura",
    items: [
      {
        name: "Serviços da plataforma de confiança e resolução",
        company: "Reclame AQUI",
        period: "2021 — Atual",
        summary:
          "Entrega backend para fluxos de disputa consumidor–empresa: APIs de alta leitura, integrações e resiliência operacional em produto público.",
        outcomes: [
          "Limites de serviço alinhados a fluxos de domínio (intake, mediação, notificações).",
          "Padrões operacionais para deploys mais seguros e triagem mais rápida de incidentes.",
          "Estratégias de acesso a dados equilibrando consistência e vazão.",
        ],
        architecture: [
          {
            title: "Organização dos serviços",
            body: "Serviços modulares atrás de gateways/balanceadores, com ownership claro por contexto (casos, identidade, integrações).",
          },
          {
            title: "Plano de dados",
            body: "Armazenamento orientado a documentos onde esquemas flexíveis ajudam a evoluir registros; ferramentas relacionais onde transações importam.",
          },
          {
            title: "Plataforma",
            body: "Execução primária em Kubernetes na nuvem com CI/CD e paridade de ambientes como baseline.",
          },
        ],
        stack: ["Node.js", "Java", "Kubernetes", "GCP", "MongoDB"],
        linkHref: "https://www.reclameaqui.com.br/",
      },
      {
        name: "Inteligência logística & automação",
        company: "GH Transporte & Logística",
        period: "2020 — 2021",
        summary:
          "Liderança de TI com forte componente de entrega: automação, BI e ferramentas pragmáticas para operações de transporte.",
        outcomes: [
          "Dashboards e relatórios que reduzem suposições no dia a dia.",
          "Automação que encurta loops manuais de coordenação.",
          "Escolhas tecnológicas guiadas por manutenção em time pequeno.",
        ],
        architecture: [
          {
            title: "Integração",
            body: "Sistemas de registro permanecem autoritativos; camadas analíticas consomem eventos/snapshots sem corromper a verdade operacional.",
          },
          {
            title: "Pontos embarcados",
            body: "Onde hardware encontra software, interfaces pensadas para falhas (conectividade, retries, clareza para o operador).",
          },
          {
            title: "Governança",
            body: "Controle de acesso e backups como parte do produto, não como reflexo.",
          },
        ],
        stack: [
          "Business intelligence",
          "Automação",
          "Integrações embarcadas",
        ],
        linkHref: "http://www.ghtransporte.com.br/",
      },
      {
        name: "Engenharia ERP no setor de saúde",
        company: "Dynamix Comércio de Software",
        period: "2019 — 2020",
        summary:
          "Desenvolvimento Java sênior em soluções de saúde: persistência enterprise, stacks de UI comuns em ERP e evolução disciplinada de schema.",
        outcomes: [
          "Features ancoradas em restrições de domínio regulado.",
          "Migrações de banco com rollout compatível com versões anteriores.",
          "Colaboração com PM/QA com rastreabilidade (Jira) e mudanças versionadas (Liquibase).",
        ],
        architecture: [
          {
            title: "Camadas",
            body: "Camadas clássicas (apresentação, serviço, persistência) com limites de transação explícitos.",
          },
          {
            title: "Persistência",
            body: "Modelos JPA/Hibernate com migrações para alinhar ambientes.",
          },
          {
            title: "Entrega",
            body: "Builds Maven e fluxos Git voltados a releases repetíveis.",
          },
        ],
        stack: ["Java", "JSF", "JPA", "MySQL", "Oracle", "Liquibase", "Maven"],
        linkHref: "http://www.dynamix.com.br/",
      },
    ],
  },
  experience: {
    aria: "Linha do tempo de experiência",
    eyebrow: "Experiência",
    title: "Experiência profissional",
    description:
      "Cronologia de cargos com ênfase em backend, propriedade de sistemas e colaboração com outras áreas, de ERP a ambientes cloud-native.",
    nextEntry: "Próxima entrada abaixo.",
    items: [
      {
        role: "Analista de software — desenvolvedor backend",
        org: "Reclame AQUI",
        period: "out 2021 — Atual",
        description:
          "Construção e evolução de serviços para resolução de conflitos consumidor–empresa: ecossistemas Java e Node.js, Kubernetes, GCP, MongoDB e forte foco operacional.",
        href: "https://www.reclameaqui.com.br/",
      },
      {
        role: "Gerente de TI",
        org: "GH Transporte & Logística",
        period: "mai 2020 — out 2021",
        description:
          "Gestão de TI em transporte/logística com automação, BI e tecnologias embarcadas para apoiar decisões.",
        href: "http://www.ghtransporte.com.br/",
      },
      {
        role: "Desenvolvedor Java sênior",
        org: "Dynamix Comércio de Software Ltda",
        period: "abr 2019 — mai 2020",
        description:
          "Soluções no setor de saúde com Java, Maven, Git, Jira, Liquibase, MySQL, Oracle, JSF e JPA.",
        href: "http://www.dynamix.com.br/",
      },
      {
        role: "Analista / desenvolvedor",
        org: "Itacorda Ind. e Com. de Cordas LTDA",
        period: "abr 2013 — abr 2019",
        description:
          "Desenvolvimento e manutenção de ERP, levantamento de requisitos em infraestrutura e software, e supervisão de sistemas internos.",
        href: "https://itacorda.com.br/",
      },
    ],
  },
  contact: {
    aria: "Contato com Antonio Mellies",
    eyebrow: "Contato",
    title: "Contato",
    description:
      "Para propostas de trabalho em backend ou plataforma, ou para discussão técnica sobre arquitetura e processos de entrega, utilize os canais abaixo.",
    directTitle: "Canais diretos",
    email: "E-mail",
    phone: "Telefone",
    location: "Localização",
    locationValue: "Penha, Santa Catarina, Brasil",
    startEmail: "Enviar um e-mail",
    socialTitle: "Social",
    socialBlurb:
      "Resposta em geral mais rápida por e-mail e LinkedIn.",
    footer:
      "Desenvolvido com Next.js; interface prioriza legibilidade e conformidade com práticas de acessibilidade.",
    mailtoSubject: "Contato — Antonio Mellies",
    socialLabels: {
      linkedin: "LinkedIn",
      github: "GitHub",
      instagram: "Instagram",
      facebook: "Facebook",
      skype: "Skype",
    },
  },
};
