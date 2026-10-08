import { Icon } from "@/components/ui/icons";

interface StackCategory {
  category: string;
  icon: string;
  items: string[];
}

const stack: StackCategory[] = [
  {
    category: "Languages",
    icon: "code",
    items: ["TypeScript", "Go", "Rust", "Python", "SQL", "Bash"],
  },
  {
    category: "Frontend",
    icon: "layout",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TanStack Query", "Zustand", "Radix UI"],
  },
  {
    category: "Backend",
    icon: "server",
    items: ["Node.js", "Go", "PostgreSQL", "Redis", "gRPC", "GraphQL", "REST"],
  },
  {
    category: "Infrastructure",
    icon: "cloud",
    items: ["Kubernetes", "Docker", "Terraform", "AWS", "GCP", "Vercel", "Cloudflare"],
  },
  {
    category: "Observability",
    icon: "bar-chart",
    items: ["Prometheus", "Grafana", "Loki", "Tempo", "OpenTelemetry", "Sentry"],
  },
  {
    category: "Databases",
    icon: "database",
    items: ["PostgreSQL", "Redis", "SQLite", "TimescaleDB", "MongoDB", "ClickHouse"],
  },
  {
    category: "Tools & Workflow",
    icon: "terminal",
    items: ["Git", "GitHub Actions", "pnpm", "Turbo", "Nx", "VS Code", "Neovim"],
  },
];

export function Stack() {
  return (
    <section className="stack-v gap-16" aria-labelledby="stack-title">
      <header className="stack-v gap-4">
        <h2 id="stack-title" className="font-serif text-4xl md:text-5xl font-normal tracking-tight">
          Stack
        </h2>
        <p className="text-lg text-muted max-w-2xl">
          Technologies I work with daily. Pragmatic choices over hype.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
        {stack.map((category) => (
          <article key={category.category} className="card p-6 stack-v gap-4">
            <div className="flex items-center gap-3">
              <Icon name={category.icon} className="h-6 w-6 text-accent" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-card-foreground">{category.category}</h3>
            </div>
            <ul className="stack-v gap-3" role="list">
              {category.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted">
                  <Icon name="check" className="h-4 w-4 flex-shrink-0 text-line" aria-hidden="true" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}