import { GraduationCap, Globe, MapPin, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-primary text-sm">04.</span>
            <h2 className="font-mono text-3xl md:text-4xl font-bold">
              Education & Info
            </h2>
          </div>
          <div className="h-px bg-gradient-to-r from-primary/50 via-border to-transparent max-w-md" />
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Education card */}
          <div className="lg:col-span-2 rounded-lg border border-border bg-card p-6 card-hover opacity-0 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-mono text-xl font-semibold mb-2">
                  International Ataturk-Alatoo University
                </h3>
                <p className="text-primary font-mono text-sm mb-2">
                  Computer Engineering
                </p>
                <div className="flex items-center gap-4 text-muted-foreground text-sm">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>2024 - 2028 (2nd year)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>Bishkek, Kyrgyzstan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Languages card */}
          <div className="rounded-lg border border-border bg-card p-6 card-hover opacity-0 animate-fade-in delay-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-mono text-lg font-semibold">Languages</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-foreground">Russian</span>
                <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                  Native
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-foreground">English</span>
                <span className="font-mono text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                  B1 - Technical Docs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
