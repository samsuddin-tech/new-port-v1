import { 
  Instagram, 
  PenTool, 
  BarChart3, 
  Users, 
  Code2, 
  Cpu, 
  Layers, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Megaphone,
  Video,
  Palette
} from 'lucide-react';
import { Education, Experience, Project, Skill, SocialLink } from './types';

export const RESUME_DATA = {
  name: "Samsuddin Khan",
  role: "Social Media Marketing Executive",
  tagline: "I combine technical precision with creative strategy to help brands grow.",
  about: "Highly driven Social Media Marketing Professional skilled in creating engaging content, analysing performance metrics, and running multi-platform campaigns. I combine my technical background (Web Development + Data Analytics) with creative marketing strategies to help brands grow. Strong ability in trend research, audience engagement, and campaign optimisation.",
  contact: {
    phone: "7978333899",
    email: "samsuddin79786@gmail.com",
    location: "Bhubaneswar, Odisha",
    linkedin: "linkedin.com/samsuddin-khan"
  }
};

export const SKILLS: Skill[] = [
  { name: "Social Media Strategy", category: "Marketing", icon: Megaphone },
  { name: "Copywriting & Editing", category: "Marketing", icon: PenTool },
  { name: "SEO & Algorithms", category: "Tech", icon: Code2 },
  { name: "Audience Engagement", category: "Marketing", icon: Users },
  { name: "Content Calendars", category: "Marketing", icon: Layers },
  { name: "Data Analytics", category: "Tech", icon: BarChart3 },
];

export const TOOLS: string[] = [
  "Canva",
  "CapCut",
  "Meta Business Suite",
  "Creator Studio",
  "Google Analytics",
  "Hootsuite",
  "Buffer",
  "Adobe Express"
];

export const EXPERIENCE: Experience[] = [
  {
    id: "freelance-smm",
    role: "Social Media Marketing",
    company: "Freelance",
    type: "Freelance",
    description: [
      "Handled small business accounts for branding & lead generation.",
      "Designed creatives using Canva & Adobe Express.",
      "Developed content calendars and monthly growth plans.",
      "Increased engagement by applying algorithm-based posting strategies."
    ]
  },
  {
    id: "intern-smm",
    role: "Social Media Intern",
    company: "Gandhi Engineering College",
    type: "Internship",
    description: [
      "Assisted in managing college club pages on Instagram & Facebook.",
      "Created posters, event promos, and student engagement posts."
    ]
  }
];

export const EDUCATION: Education = {
  degree: "Bachelor of Technology, Computer Science Engineering",
  school: "Gandhi Engineering College",
  year: "2022 - 2026",
  details: "SGPA: 7.5"
};

export const SOCIALS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://linkedin.com/in/samsuddin-khan", icon: Linkedin, text: "Connect on LinkedIn" },
  { platform: "Email", url: "mailto:samsuddin79786@gmail.com", icon: Mail, text: "samsuddin79786@gmail.com" },
  { platform: "Phone", url: "tel:7978333899", icon: Phone, text: "+91 7978333899" },
];

export const PROJECTS: Project[] = [
  {
    title: "Campus Tech Fest",
    category: "Event Promotion",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    stats: { likes: "850+", comments: "45", reach: "12k" },
    tags: ["Canva", "Instagram", "Event Strategy"]
  },
  {
    title: "Urban Cafe Launch",
    category: "Brand Management",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
    stats: { likes: "1.2k", comments: "120", reach: "25k" },
    tags: ["Photography", "Copywriting", "Growth"]
  },
  {
    title: "Student Club Leadership",
    category: "Community Engagement",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800",
    stats: { likes: "500+", comments: "80", reach: "5k" },
    tags: ["Facebook", "Content Calendar", "Design"]
  }
];