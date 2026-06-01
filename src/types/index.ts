export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  category: string;
  icon: string;
  gradient: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  logo?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
