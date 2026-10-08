import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icons";

export function Hero() {
  return (
    <section className="stack-v gap-16" aria-labelledby="hero-title">
      <div className="stack-v gap-8">
        <div className="stack-v gap-4">
          <h1 id="hero-title" className="font-serif text-5xl md:text-7xl font-normal tracking-tight text-balance">
            I help teams <span className="font-semibold">scale</span>.
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            Software engineer building scalable web applications, distributed systems, and developer tooling.
            Currently focused on platform engineering and developer experience.
          </p>
        </div>

        <div className="flex flex-wrap gap-4" role="list" aria-label="Focus areas">
          <span className="chip chip-dark">US Law Firms</span>
          <span className="chip chip-dark">High-ticket clients</span>
          <span className="chip chip-dark">Platform Engineering</span>
          <span className="chip chip-dark">Developer Experience</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list" aria-label="Metrics">
        <MetricCard
          label="Webinars Delivered"
          value="47+"
          href="/webinars"
          icon="video"
          external
        />
        <MetricCard
          label="Courses Published"
          value="3"
          href="/courses"
          icon="graduation-cap"
          external
        />
        <MetricCard
          label="Active Clients"
          value="12+"
          href="/services"
          icon="briefcase"
          external
        />
      </div>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/contact"
          className={cn(
            "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors",
            "bg-accent text-accent-foreground hover:opacity-90"
          )}
        >
          <Icon name="mail" className="h-4 w-4" aria-hidden="true" />
          Get in touch
        </Link>
        <Link
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors",
            "border border-border bg-card text-card-foreground hover:bg-accent/50"
          )}
        >
          <Icon name="file-text" className="h-4 w-4" aria-hidden="true" />
          View Resume
          <Icon name="external" className="h-3 w-3" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

interface MetricCardProps {
  label: string;
  value: string;
  href: string;
  icon: string;
  external?: boolean;
}

function MetricCard({ label, value, href, icon, external }: MetricCardProps) {
  return (
    <article className="card p-6 stack-v gap-2">
      <div className="flex items-center justify-between">
        <Icon name={icon} className="h-6 w-6 text-muted" aria-hidden="true" />
        {external && (
          <Icon name="external" className="h-4 w-4 text-muted" aria-hidden="true" />
        )}
      </div>
      <div className="stack-v gap-1">
        <p className="text-3xl md:text-4xl font-bold text-card-foreground">{value}</p>
        <p className="text-sm text-muted">{label}</p>
      </div>
      <a
        href={href}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        View details
        <Icon name="arrow-right" className="h-4 w-4" aria-hidden="true" />
      </a>
    </article>
  );
}