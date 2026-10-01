export type ProjectCategory = 
  | 'All' 
  | 'Full Stack' 
  | 'Web Development' 
  | 'AI' 
  | 'E-Commerce' 
  | 'Real Estate' 
  | '3D / Creative';

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectChallengeSolution {
  challenge: string;
  solution: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  overview: string;
  category: ProjectCategory;
  featured?: boolean;
  gridSize?: 'large' | 'medium' | 'compact';
  image: string;
  liveUrl: string;
  githubUrl?: string;
  technologies: string[];
  features: ProjectFeature[];
  screenshots: string[];
  highlights: string[];
  challenges: ProjectChallengeSolution[];
}

export interface SkillItem {
  name: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: SkillItem[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  duration: string;
  highlights: string[];
  technologies: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  icon: string;
}
