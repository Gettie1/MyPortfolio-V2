export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  desc: string;
}

export interface Project {
  title: string;
  tag: string;
  desc: string;
  stack: string[];
  color: string;
  link: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  about: string;
  email: string;
  github: string;
  linkedin: string;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
}
