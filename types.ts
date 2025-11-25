import { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  icon?: LucideIcon;
  category: 'Marketing' | 'Tech' | 'Tool';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period?: string;
  type: 'Freelance' | 'Internship' | 'Full-time';
  description: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  details: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
  text: string;
}

export interface Project {
  title: string;
  category: string;
  image: string;
  stats: {
    likes: string;
    comments: string;
    reach: string;
  };
  tags: string[];
}