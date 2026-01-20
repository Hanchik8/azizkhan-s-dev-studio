import { Code2, Layers, Database, Lightbulb } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  size: "large" | "medium" | "small";
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      "Java 17/21",
      "Core Java",
      "Stream API",
      "Multithreading",
      "JavaScript",
    ],
    size: "large",
  },
  {
    title: "Frameworks",
    icon: <Layers className="w-5 h-5" />,
    skills: [
      "Spring Boot 3.3",
      "Spring Security",
      "Spring Data JPA",
      "Spring Cloud",
      "Spring MVC",
    ],
    size: "large",
  },
  {
    title: "Infrastructure",
    icon: <Database className="w-5 h-5" />,
    skills: ["Docker", "PostgreSQL", "Apache Kafka", "Redis", "Maven"],
    size: "medium",
  },
  {
    title: "Concepts",
    icon: <Lightbulb className="w-5 h-5" />,
    skills: ["REST API", "SOLID", "JWT", "Microservices", "CQRS", "Event-Driven"],
    size: "medium",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container relative">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-primary text-sm">03.</span>
            <h2 className="font-mono text-3xl md:text-4xl font-bold">
              Skills & Technologies
            </h2>
          </div>
          <div className="h-px bg-gradient-to-r from-primary/50 via-border to-transparent max-w-md" />
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Additional technologies */}
        <div className="mt-8 p-6 rounded-lg border border-border bg-card/50">
          <h4 className="font-mono text-sm text-primary mb-4">
            // Also experienced with
          </h4>
          <div className="flex flex-wrap gap-3">
            {[
              "Netflix Eureka",
              "Spring Cloud Gateway",
              "Feign Client",
              "Saga Pattern",
              "Pessimistic Locking",
              "JWT Authentication",
              "Event-Driven Architecture",
              "Docker Compose",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm font-mono text-muted-foreground border border-border rounded-lg hover:border-primary/30 hover:text-foreground transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) => {
  const sizeClasses = {
    large: "lg:col-span-2 lg:row-span-2",
    medium: "lg:col-span-2",
    small: "",
  };

  return (
    <div
      className={`rounded-lg border border-border bg-card p-6 card-hover opacity-0 animate-fade-in ${sizeClasses[category.size]}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          {category.icon}
        </div>
        <h3 className="font-mono text-lg font-semibold">{category.title}</h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <div
            key={skill}
            className="group relative px-3 py-2 rounded-lg bg-secondary border border-border hover:border-primary/50 transition-all cursor-default"
          >
            <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
