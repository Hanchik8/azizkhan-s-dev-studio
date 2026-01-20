import { Github, Linkedin, Send, MapPin } from "lucide-react";
import { siteConfig } from "@/content/siteConfig";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in">
            <span className="relative flex h-2.5 w-2.5">
              <span className="status-pulse absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="font-mono text-sm text-primary">Status: {siteConfig.status}</span>
          </div>

          {/* Name */}
          <h1 className="font-mono text-5xl md:text-7xl font-bold mb-4 animate-fade-in delay-100 opacity-0">
            <span className="text-foreground">{siteConfig.name.split(" ")[0]}</span>
            <span className="text-primary"> {siteConfig.name.split(" ")[1]}</span>
          </h1>

          {/* Title */}
          <h2 className="font-mono text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in delay-200 opacity-0">
            <span className="text-primary">&gt;</span> {siteConfig.title}{" "}
            <span className="text-primary">|</span> {siteConfig.tagline}
          </h2>

          {/* Brief */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in delay-300 opacity-0 leading-relaxed">
            {siteConfig.description}
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 text-muted-foreground mb-8 animate-fade-in delay-400 opacity-0">
            <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="font-mono text-sm">{siteConfig.location}</span>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap gap-4 animate-fade-in delay-500 opacity-0">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
              aria-label="Visit GitHub profile"
            >
              <Github
                className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                aria-hidden="true"
              />
              <span className="font-mono text-sm">GitHub</span>
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin
                className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                aria-hidden="true"
              />
              <span className="font-mono text-sm">LinkedIn</span>
            </a>
            <a
              href={siteConfig.social.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-primary bg-primary/10 hover:bg-primary/20 transition-all duration-300 group"
              aria-label="Contact via Telegram"
            >
              <Send className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="font-mono text-sm text-primary">Telegram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default Hero;
