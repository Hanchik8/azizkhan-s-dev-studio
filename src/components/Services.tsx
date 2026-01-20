import { services } from "@/content/services";

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container relative">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-primary text-sm">01.</span>
            <h2 className="font-mono text-3xl md:text-4xl font-bold">What I Do</h2>
          </div>
          <div className="h-px bg-gradient-to-r from-primary/50 via-border to-transparent max-w-md" />
        </div>

        {/* Services grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-lg border border-border bg-card p-6 card-hover opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="font-mono text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary">▹</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
