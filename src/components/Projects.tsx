import { ExternalLink, Github } from "lucide-react";
import { projects, type Project } from "@/content/projects";

const Projects = () => {
  return (
    <section id="projects" className="relative py-24">
      <div className="container">
        {/* Section header */}
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-sm text-primary">02.</span>
            <h2 className="font-mono text-3xl font-bold md:text-4xl">Featured Projects</h2>
          </div>
          <div className="h-px max-w-md bg-gradient-to-r from-primary/50 via-border to-transparent" />
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
      className="card-hover group relative animate-fade-in rounded-lg border border-border bg-card p-6 opacity-0"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div className="rounded-lg bg-primary/10 p-3 text-primary">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="h-5 w-5" aria-hidden="true" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
              aria-label={`View ${project.title} demo`}
            >
              <ExternalLink className="h-5 w-5" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="mb-2 font-mono text-xl font-semibold transition-colors group-hover:text-primary">
        {project.title}
      </h3>

      {/* Subtitle */}
      <p className="mb-3 font-mono text-sm text-primary">{project.subtitle}</p>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      {/* Highlights - shown on hover */}
      <div className="mb-4 max-h-0 space-y-1.5 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-48 group-hover:opacity-100">
        {project.highlights.slice(0, 4).map((highlight) => (
          <div key={highlight} className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="text-primary" aria-hidden="true">
              ▹
            </span>
            {highlight}
          </div>
        ))}
      </div>

      {/* Tech stack */}
      <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-primary/20 bg-primary/5 px-2 py-1 font-mono text-xs text-primary/80"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Projects;
