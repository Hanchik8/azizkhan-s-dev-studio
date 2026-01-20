import { Server, Crown, Folder, type LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  highlights: string[];
  icon: LucideIcon;
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "megasegashop",
    title: "MegaSegaShop",
    subtitle: "Microservices E-Commerce Platform",
    description:
      "Full-featured e-commerce platform built on microservices architecture with Spring Boot 3 and Spring Cloud. Demonstrates modern approaches to distributed systems development.",
    techStack: [
      "Java 21",
      "Spring Boot 3.3",
      "Spring Cloud",
      "PostgreSQL",
      "Redis",
      "Apache Kafka",
      "Docker",
    ],
    highlights: [
      "9 Microservices Architecture",
      "Saga Pattern with Compensating Transactions",
      "Event-Driven Architecture via Kafka",
      "CQRS Pattern Implementation",
      "Pessimistic Locking for Race Conditions",
      "JWT Authentication via API Gateway",
    ],
    icon: Server,
    github: "https://github.com/Hanchik8/MegaSegaShop_MicroServices",
    featured: true,
  },
  {
    id: "web-chess",
    title: "Web Chess",
    subtitle: "Full-Stack Chess Application",
    description:
      "Full-featured web application for playing chess with registration, authorization, and user statistics. Backend on Java Spring Boot with Spring Security, frontend on HTML/CSS/Vanilla JS.",
    techStack: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "JavaScript", "HTML/CSS"],
    highlights: [
      "Custom Remember Me Implementation",
      "HttpOnly Cookie Security",
      "JWT Token Authentication",
      "Full Chess Game Logic",
      "Move Validation & Check/Checkmate",
      "Interactive Board with Highlights",
    ],
    icon: Crown,
    github: "https://github.com/Hanchik8/FSD_Project",
    featured: true,
  },
  {
    id: "file-explorer",
    title: "Desktop File Explorer",
    subtitle: "MVC-Based System Tool",
    description:
      "Desktop application for file management built with Java Swing/AWT following MVC architecture pattern.",
    techStack: ["Java", "Swing", "AWT", "MVC Pattern"],
    highlights: [
      "Recursive File Search",
      "File Manipulation Logic",
      "MVC Architecture",
      "Cross-Platform Desktop App",
    ],
    icon: Folder,
    github: "https://github.com/Hanchik8/File_Explorer_Java",
    featured: false,
  },
];

export const getFeaturedProjects = (): Project[] => projects.filter((p) => p.featured);
export const getAllProjects = (): Project[] => projects;
