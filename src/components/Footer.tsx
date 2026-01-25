import { Github, Linkedin, Send, Heart } from "lucide-react";
import { siteConfig } from "@/content/siteConfig";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Left */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="font-mono text-sm">Built with</span>
            <Heart className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
            <span className="font-mono text-sm">by {siteConfig.name}</span>
          </div>

          {/* Center - Social links */}
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
              aria-label="Telegram"
            >
              <Send className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          {/* Right */}
          <div className="font-mono text-sm text-muted-foreground">
            © {new Date().getFullYear()} azizkhan.dev
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
