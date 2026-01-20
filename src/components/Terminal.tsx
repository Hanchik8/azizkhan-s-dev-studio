import { useEffect, useState } from "react";
import { Terminal as TerminalIcon, X, Minus, Square } from "lucide-react";

const springBootAscii = `
  .   ____          _            __ _ _
 /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\
( ( )\\___ | '_ | '_| | '_ \\/ _\` | \\ \\ \\ \\
 \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\\__, | / / / /
 =========|_|==============|___/=/_/_/_/
`;

const terminalLines = [
  { prefix: "spring", text: ":: Spring Boot ::        (v3.3.0)", delay: 300, isAscii: false },
  { prefix: "", text: "", delay: 600, isAscii: false },
  { prefix: "INFO", text: "[main] A.Nurlanov: Starting PortfolioApplication...", delay: 900 },
  { prefix: "INFO", text: "[main] A.Nurlanov: Loading skills: Java 21, Kafka, Docker...", delay: 1500 },
  { prefix: "INFO", text: "[main] A.Nurlanov: Connecting to PostgreSQL database...", delay: 2100 },
  { prefix: "INFO", text: "[main] A.Nurlanov: Initializing Spring Security...", delay: 2700 },
  { prefix: "INFO", text: "[main] A.Nurlanov: Profile Active. Welcome!", delay: 3300 },
];

const Terminal = () => {
  const [showAscii, setShowAscii] = useState(false);
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    // Show ASCII art first
    const asciiTimer = setTimeout(() => {
      setShowAscii(true);
    }, 200);

    const showNextLine = (index: number) => {
      if (index < terminalLines.length) {
        setTimeout(() => {
          setVisibleLines(index + 1);
          showNextLine(index + 1);
        }, terminalLines[index].delay);
      } else {
        setIsTyping(false);
      }
    };

    setTimeout(() => showNextLine(0), 500);

    return () => clearTimeout(asciiTimer);
  }, []);

  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Terminal window */}
          <div className="rounded-lg border border-border overflow-hidden bg-card shadow-2xl animate-fade-in">
            {/* Terminal header */}
            <div className="flex items-center justify-between px-4 py-3 bg-secondary border-b border-border">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 flex items-center justify-center group cursor-pointer hover:bg-red-500">
                    <X className="w-2 h-2 text-red-900 opacity-0 group-hover:opacity-100" />
                  </div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 flex items-center justify-center group cursor-pointer hover:bg-yellow-500">
                    <Minus className="w-2 h-2 text-yellow-900 opacity-0 group-hover:opacity-100" />
                  </div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80 flex items-center justify-center group cursor-pointer hover:bg-green-500">
                    <Square className="w-1.5 h-1.5 text-green-900 opacity-0 group-hover:opacity-100" />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <TerminalIcon className="w-4 h-4" />
                  <span className="font-mono text-sm">portfolio-app.log</span>
                </div>
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                java -jar portfolio.jar
              </span>
            </div>

            {/* Terminal content */}
            <div className="p-4 font-mono text-xs sm:text-sm min-h-[280px] scanlines relative overflow-x-auto">
              {/* Spring Boot ASCII Art */}
              {showAscii && (
                <pre className="text-primary whitespace-pre text-[10px] sm:text-xs leading-tight mb-4 animate-fade-in">
                  {springBootAscii}
                </pre>
              )}

              {/* Log lines */}
              {terminalLines.slice(0, visibleLines).map((line, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 mb-1 opacity-0 animate-fade-in"
                  style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
                >
                  {line.prefix === "spring" ? (
                    <span className="text-primary font-bold">{line.text}</span>
                  ) : line.prefix === "INFO" ? (
                    <>
                      <span className="text-muted-foreground">2025-01-20</span>
                      <span className="text-primary">{line.prefix}</span>
                      <span className="text-foreground">{line.text}</span>
                    </>
                  ) : (
                    <span className="text-foreground">{line.text}</span>
                  )}
                </div>
              ))}

              {/* Cursor */}
              {isTyping && visibleLines === terminalLines.length && (
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-muted-foreground">2025-01-20</span>
                  <span className="text-primary">INFO</span>
                  <span className="w-2 h-4 bg-primary cursor-blink" />
                </div>
              )}

              {!isTyping && (
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/50">
                  <span className="text-primary">$</span>
                  <span className="text-muted-foreground">
                    Ready to connect. Let's build something amazing_
                  </span>
                  <span className="w-2 h-4 bg-primary cursor-blink" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;
