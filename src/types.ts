export interface SkillItem {
  name: string;
  level?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  accent?: string;
  borderAccent?: string;
  items: SkillItem[];
}

export interface ExperimentItem {
  name: string;
  status: string;
  desc: string;
  tools: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  status: string;
  statusVariant?: 'blue' | 'pink' | 'cyan' | 'slate';
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  highlights?: string[];
  isExpandable?: boolean;
  emptyStateMessage?: string;
  experimentsList?: ExperimentItem[];
}

export interface ExperienceItem {
  id: string;
  program: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  summary: string;
  keyExperience: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  icon: string;
}
