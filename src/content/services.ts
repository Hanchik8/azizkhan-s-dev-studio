import { Server, Shield, Database, Zap, type LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export const services: Service[] = [
  {
    id: "backend-development",
    title: "Backend Development",
    description:
      "Building robust, scalable backend systems with Java and Spring Boot. RESTful APIs, authentication, and business logic implementation.",
    icon: Server,
    features: [
      "RESTful API Design",
      "Spring Boot Applications",
      "Authentication & Authorization",
      "Business Logic Implementation",
    ],
  },
  {
    id: "microservices",
    title: "Microservices Architecture",
    description:
      "Designing and implementing distributed systems with microservices patterns, event-driven architecture, and inter-service communication.",
    icon: Zap,
    features: [
      "Service Decomposition",
      "Event-Driven Architecture",
      "API Gateway Patterns",
      "Service Discovery",
    ],
  },
  {
    id: "database-design",
    title: "Database Design",
    description:
      "Designing efficient database schemas, optimizing queries, and implementing caching strategies for high-performance applications.",
    icon: Database,
    features: ["Schema Design", "Query Optimization", "Redis Caching", "Data Migration"],
  },
  {
    id: "security",
    title: "Security Implementation",
    description:
      "Implementing secure authentication and authorization using JWT, OAuth2, and Spring Security best practices.",
    icon: Shield,
    features: [
      "JWT Authentication",
      "OAuth2 Integration",
      "Spring Security Config",
      "Security Auditing",
    ],
  },
];
