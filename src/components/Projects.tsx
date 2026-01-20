import { ExternalLink, Github } from "lucide-react";
import { projects, type Project } from "@/content/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-primary text-sm">02.</span>
            <h2 className="font-mono text-3xl md:text-4xl font-bold">Featured Projects</h2>
          </div>
          <div className="h-px bg-gradient-to-r from-primary/50 via-border to-transparent max-w-md" />
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const Icon = project.icon;

  return (
    <div
      className="group relative rounded-lg border border-border bg-card p-6 card-hover opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-lg bg-primary/10 text-primary">
          <Icon className="w-6 h-6" aria-hidden="true" />
        </div>
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-5 h-5" aria-hidden="true" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              aria-label={`View ${project.title} demo`}
            >
              <ExternalLink className="w-5 h-5" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-mono text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>

      {/* Subtitle */}
      <p className="text-primary text-sm font-mono mb-3">{project.subtitle}</p>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

      {/* Highlights - shown on hover */}
      <div className="mb-4 space-y-1.5 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-48 transition-all duration-300 overflow-hidden">
        {project.highlights.slice(0, 4).map((highlight) => (
          <div key={highlight} className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="text-primary" aria-hidden="true">▹</span>
            {highlight}
          </div>
        ))}
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs font-mono text-primary/80 bg-primary/5 rounded border border-primary/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Projects;
