import { Github, Linkedin, Send, Heart } from "lucide-react";
import { siteConfig } from "@/content/siteConfig";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="font-mono text-sm">Built with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" aria-hidden="true" />
            <span className="font-mono text-sm">by {siteConfig.name}</span>
          </div>

          {/* Center - Social links */}
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="Telegram"
            >
              <Send className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>

          {/* Right */}
          <div className="font-mono text-sm text-muted-foreground">© {new Date().getFullYear()} azizkhan.dev</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
