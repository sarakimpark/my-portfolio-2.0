export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  description?: string;
  current?: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  note?: string;
}

export interface LifeMilestone {
  id: string;
  milestone: string;
  period: string;
  location?: string;
  description?: string;
  /** Optional date used only for timeline ordering (display uses `period`) */
  sortPeriod?: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: "github" | "linkedin";
}
