import type { IconType } from "react-icons";
import {
  SiArgo,
  SiDocker,
  SiElasticsearch,
  SiGit,
  SiGo,
  SiGooglecloud,
  SiHelm,
  SiJavascript,
  SiKubernetes,
  SiKong,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiTypescript,
} from "react-icons/si";
import { TbDatabaseSearch } from "react-icons/tb";

const map: Record<string, IconType> = {
  SiTypescript,
  SiJavascript,
  SiOpenjdk,
  SiPython,
  SiGo,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiElasticsearch,
  TbDatabaseSearch,
  SiKubernetes,
  SiHelm,
  SiArgo,
  SiKong,
  SiGooglecloud,
  SiDocker,
  SiGit,
};

type TechIconProps = {
  name: string;
  className?: string;
};

export function TechIcon({ name, className }: TechIconProps) {
  const Icon = map[name];
  if (!Icon) return null;
  return <Icon className={className} aria-hidden />;
}
