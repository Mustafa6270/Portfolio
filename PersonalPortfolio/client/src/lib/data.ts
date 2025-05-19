// Portfolio Items
export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Aircraft Engine Maintenance",
    description: "Experience in the Module Dismantling Department at Turkish Engine Center (Pratt & Whitney THY Technic).",
    imageUrl: "https://images.unsplash.com/photo-1547446865-2a47a3fdcf2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Engine Maintenance", "Module Dismantling", "Technical Documentation"],
    projectUrl: "#",
  },
  {
    id: 2,
    title: "CAD Design Projects",
    description: "Technical design work using AutoCAD with advanced proficiency in creating technical drawings and aircraft component models.",
    imageUrl: "https://images.unsplash.com/photo-1545986421-5b6cd6b682b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["AutoCAD", "Technical Drawing", "3D Design"],
    projectUrl: "#",
  },
  {
    id: 3,
    title: "Aviation Collaboration",
    description: "Teamwork experience in aviation maintenance environments, working alongside engineers and technicians.",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Team Leadership", "Technical Coordination", "Maintenance Planning"],
    projectUrl: "#",
  },
];

// Testimonials
export interface Testimonial {
  id: number;
  content: string;
  name: string;
  position: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Mustafa demonstrated exceptional technical aptitude during his internship with us. His attention to detail in the Module Dismantling Department was impressive.",
    name: "Technical Supervisor",
    position: "Turkish Engine Center",
  },
  {
    id: 2,
    content: "Mustafa's quick adaptability and team-oriented approach made him a valuable addition to our maintenance team. His technical knowledge is well-balanced with practical skills.",
    name: "Department Lead",
    position: "Pratt & Whitney THY Technic",
  },
  {
    id: 3,
    content: "During his training, Mustafa showed remarkable potential in aircraft maintenance procedures and technical documentation. His computer skills particularly stood out.",
    name: "Training Coordinator",
    position: "Sabiha Gökçen Technical School",
  },
];

// Skills
export interface SkillCategory {
  id: number;
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
}

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: "Technical Skills",
    icon: "fas fa-tools",
    skills: [
      { name: "Aircraft Maintenance", level: 85 },
      { name: "Engine Module Dismantling", level: 80 },
      { name: "Technical Documentation", level: 85 },
      { name: "AutoCAD", level: 90 },
    ],
  },
  {
    id: 2,
    title: "Computer Skills",
    icon: "fas fa-laptop-code",
    skills: [
      { name: "Office Programs", level: 90 },
      { name: "Python", level: 75 },
      { name: "C++", level: 70 },
      { name: "Server Management", level: 95 },
    ],
  },
  {
    id: 3,
    title: "Design & Media",
    icon: "fas fa-drafting-compass",
    skills: [
      { name: "3D Design", level: 75 },
      { name: "Adobe Creative Suite", level: 70 },
      { name: "Final Cut Pro", level: 90 },
      { name: "Logic Pro", level: 90 },
    ],
  },
];

// Contact Info
export const contactInfo = {
  name: "Mustafa Yıldırım",
  phone: "+90 (539) 481 62 70",
  email: "6270mst@gmail.com",
  location: "İmam Efendi Blvd. No:48B Apartment:8 Merkez / Elazığ",
  socialLinks: [
    { name: "LinkedIn", url: "#", icon: "fab fa-linkedin" },
    { name: "GitHub", url: "#", icon: "fab fa-github" },
    { name: "Twitter", url: "#", icon: "fab fa-twitter" },
    { name: "Instagram", url: "#", icon: "fab fa-instagram" },
  ],
};
