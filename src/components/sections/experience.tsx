import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icons";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

const experience: ExperienceItem[] = [
  {
    role: "Senior Software Engineer",
    company: "Platform Engineering",
    period: "2022 — Present",
    location: "Remote (GMT+8)",
    description: [
      "Lead platform engineering initiatives for a team of 15+ engineers, building internal developer tools and infrastructure",
      "Designed and implemented a self-service deployment platform reducing deployment time from 45min to 3min",
      "Built observability stack (metrics, logs, traces) serving 50+ microservices with 99.9% uptime",
      "Mentored 5 engineers through code reviews, architecture discussions, and career development",
      "Established platform RFC process and documentation standards adopted org-wide",
    ],
    technologies: ["Kubernetes", "Go", "TypeScript", "React", "PostgreSQL", "Prometheus", "Grafana", "Terraform"],
    current: true,
  },
  {
    role: "Software Engineer",
    company: "DevTools Startup",
    period: "2020 — 2022",
    location: "Singapore",
    description: [
      "Built core CLI tooling used by 10,000+ developers with plugin architecture supporting 50+ extensions",
      "Implemented real-time collaboration features using CRDTs for simultaneous editing",
      "Designed and migrated legacy monolith to microservices architecture with zero downtime",
      "Created automated testing pipeline reducing regression bugs by 80%",
      "Open-sourced 3 internal libraries with combined 2,000+ GitHub stars",
    ],
    technologies: ["Rust", "TypeScript", "Node.js", "React", "WebAssembly", "CRDTs", "Docker", "CI/CD"],
    current: false,
  },
];

export function Experience() {
  return (
    <section className="stack-v gap-16" aria-labelledby="experience-title">
      <header className="stack-v gap-4">
        <h2 id="experience-title" className="font-serif text-4xl md:text-5xl font-normal tracking-tight">
          Experience
        </h2>
        <p className="text-lg text-muted max-w-2xl">
          Building scalable systems and developer tools across fintech, SaaS, and platform engineering.
        </p>
      </header>

      <div className="stack-v gap-12">
        {experience.map((exp, index) => (
          <article key={exp.company} className="stack-v gap-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="stack-v gap-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-xl font-semibold text-card-foreground">{exp.role}</h3>
                  {exp.current && (
                    <span className="px-2 py-0.5 text-xs font-medium bg-green-500/20 text-green-500 rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-lg text-accent font-medium">{exp.company}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
                  <span className="flex items-center gap-1">
                    <Icon name="calendar" className="h-4 w-4" aria-hidden="true" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="map-pin" className="h-4 w-4" aria-hidden="true" />
                    {exp.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="stack-v gap-4">
              <ul className="stack-v gap-3" role="list">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex gap-3 text-muted leading-relaxed">
                    <Icon name="arrow-right" className="h-5 w-5 flex-shrink-0 mt-0.5 text-line" aria-hidden="true" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="chip chip-light text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}