import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icons";

interface Project {
  title: string;
  description: string;
  thumbnail?: string;
  tags: string[];
  href: string;
  external?: boolean;
  featured?: boolean;
  status?: "live" | "soon" | "archived";
}

const clientProjects: Project[] = [
  {
    title: "Legal Document Automation",
    description: "End-to-end document generation platform for US law firms, reducing drafting time by 90%",
    tags: ["React", "Node.js", "PostgreSQL", "AWS", "TypeScript"],
    href: "/projects/legal-docs",
    status: "live",
    featured: true,
  },
  {
    title: "Compliance Monitoring Dashboard",
    description: "Real-time regulatory compliance tracking for financial services with automated alerts",
    tags: ["Go", "React", "TimescaleDB", "Kubernetes", "Prometheus"],
    href: "/projects/compliance-dashboard",
    status: "live",
    featured: true,
  },
  {
    title: "Client Portal Redesign",
    description: "Modern client portal with secure messaging, document sharing, and billing integration",
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind", "NextAuth"],
    href: "/projects/client-portal",
    status: "live",
    featured: true,
  },
  {
    title: "Contract Analytics Engine",
    description: "ML-powered contract analysis extracting key terms, obligations, and risk factors",
    tags: ["Python", "FastAPI", "TensorFlow", "PostgreSQL", "Docker"],
    href: "/projects/contract-analytics",
    status: "live",
    featured: true,
  },
];

const personalProjects: Project[] = [
  {
    title: "Developer CLI Toolkit",
    description: "Batteries-included CLI for scaffolding, testing, and deploying modern web applications",
    tags: ["Go", "Cobra", "Bubble Tea", "SQLite"],
    href: "https://github.com/marwieang/devkit",
    external: true,
    status: "live",
  },
  {
    title: "Distributed Task Queue",
    description: "Redis-backed task queue with priority scheduling, retries, and distributed locking",
    tags: ["Rust", "Redis", "Tokio", "Serde"],
    href: "https://github.com/marwieang/taskq",
    external: true,
    status: "live",
  },
  {
    title: "OpenAPI Generator",
    description: "Type-safe API client generator from OpenAPI specs with React Query integration",
    tags: ["TypeScript", "Node.js", "React Query", "Zod"],
    href: "/projects/openapi-gen",
    status: "soon",
  },
  {
    title: "Observability Starter Kit",
    description: "Production-ready observability stack with dashboards, alerts, and runbooks",
    tags: ["Grafana", "Prometheus", "Loki", "Tempo", "Terraform"],
    href: "/projects/observability-kit",
    status: "soon",
  },
  {
    title: "Local-First Sync Engine",
    description: "CRDT-based synchronization for offline-first web applications with conflict resolution",
    tags: ["TypeScript", "Yjs", "IndexedDB", "WebRTC"],
    href: "/projects/sync-engine",
    status: "soon",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const statusStyles = {
    live: "bg-green-500/20 text-green-500",
    soon: "bg-amber-500/20 text-amber-500",
    archived: "bg-muted/50 text-muted",
  };

  return (
    <article className="card p-6 stack-v gap-4">
      <div className="flex items-start justify-between gap-4">
        <div className="stack-v gap-2 flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-card-foreground truncate">{project.title}</h3>
          <p className="text-sm text-muted line-clamp-2">{project.description}</p>
        </div>
        {project.status && (
          <span className={cn("px-2 py-0.5 text-xs font-medium rounded-full flex-shrink-0", statusStyles[project.status])}>
            {project.status}
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies">
        {project.tags.map((tag) => (
          <span key={tag} className="chip chip-light text-xs">
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={project.href}
        target={project.external ? "_blank" : undefined}
        rel={project.external ? "noopener noreferrer" : undefined}
        className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline mt-2"
      >
        View project
        {project.external && <Icon name="external" className="h-3 w-3" aria-hidden="true" />}
        <Icon name="arrow-right" className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}

export function Projects() {
  return (
    <section className="stack-v gap-16" aria-labelledby="projects-title">
      <header className="stack-v gap-4">
        <h2 id="projects-title" className="font-serif text-4xl md:text-5xl font-normal tracking-tight">
          Projects
        </h2>
        <p className="text-lg text-muted max-w-2xl">
          Selected work across client engagements and personal experiments.
        </p>
      </header>

      <div className="stack-v gap-12">
        <div>
          <h3 className="text-xl font-semibold text-card-foreground mb-6 flex items-center gap-2">
            <Icon name="folder-code" className="h-6 w-6" aria-hidden="true" />
            Client Work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
            {clientProjects.map((project) => (
              <ProjectCard key={project.href} project={project} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-card-foreground mb-6 flex items-center gap-2">
            <Icon name="code" className="h-6 w-6" aria-hidden="true" />
            Personal Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
            {personalProjects.map((project) => (
              <ProjectCard key={project.href} project={project} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-4 pt-4 border-t border-border">
        <Link
          href="/projects"
          className={cn(
            "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors",
            "bg-accent text-accent-foreground hover:opacity-90"
          )}
        >
          <Icon name="arrow-right" className="h-4 w-4" aria-hidden="true" />
          View all projects
        </Link>
        <Link
          href="/github"
          className={cn(
            "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors",
            "border border-border bg-card text-card-foreground hover:bg-accent/50"
          )}
        >
          <Icon name="github" className="h-4 w-4" aria-hidden="true" />
          GitHub
          <Icon name="external" className="h-3 w-3" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}