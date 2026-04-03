import type { TechCategory } from "@/i18n/types";

/** Non-translatable core identity & endpoints */
export const site = {
  name: "Antonio Mellies",
  email: "antoniomellies@gmail.com",
  phone: "+55 (47) 9 8828-9310",
  social: [
    {
      key: "linkedin" as const,
      href: "https://www.linkedin.com/in/antonio-mellies",
    },
    { key: "github" as const, href: "https://github.com/AntonioMellies" },
    {
      key: "instagram" as const,
      href: "https://www.instagram.com/antoniomellies/?hl=pt-br",
    },
    {
      key: "facebook" as const,
      href: "https://www.facebook.com/antonio.fredericomelliesneto",
    },
    { key: "skype" as const, href: "https://join.skype.com/invite/RXTq5qc9T2Cq" },
  ],
} as const;

export const techStack: {
  name: string;
  category: TechCategory;
  icon: string;
}[] = [
  { name: "TypeScript", category: "languages", icon: "SiTypescript" },
  { name: "JavaScript", category: "languages", icon: "SiJavascript" },
  { name: "Java", category: "languages", icon: "SiOpenjdk" },
  { name: "Python", category: "languages", icon: "SiPython" },
  { name: "Go", category: "languages", icon: "SiGo" },
  { name: "Node.js", category: "runtime", icon: "SiNodedotjs" },
  { name: "MongoDB", category: "data", icon: "SiMongodb" },
  { name: "MySQL", category: "data", icon: "SiMysql" },
  { name: "PostgreSQL", category: "data", icon: "SiPostgresql" },
  { name: "Qdrant", category: "data", icon: "TbDatabaseSearch" },
  { name: "Elasticsearch", category: "data", icon: "SiElasticsearch" },
  { name: "Kubernetes", category: "platform", icon: "SiKubernetes" },
  { name: "Helm", category: "platform", icon: "SiHelm" },
  { name: "Argo CD", category: "platform", icon: "SiArgo" },
  { name: "Argo CI", category: "platform", icon: "SiArgo" },
  { name: "Kong Gateway", category: "platform", icon: "SiKong" },
  { name: "Google Cloud", category: "cloud", icon: "SiGooglecloud" },
  { name: "Docker", category: "platform", icon: "SiDocker" },
  { name: "Git", category: "tooling", icon: "SiGit" },
];
