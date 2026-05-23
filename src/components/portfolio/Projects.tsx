import { SectionHeading } from "./About";
import { ArrowUpRight, Siren, Brain } from "lucide-react";

const projects = [
  {
    title: "ResQ",
    tag: "Emergency Response",
    description:
      "An emergency response and assistance platform designed to improve accessibility and quick communication during critical situations.",
    tech: ["React", "Firebase", "Realtime"],
    icon: Siren,
  },
  {
    title: "QuizApp",
    tag: "Interactive Learning",
    description:
      "Interactive quiz application with a modern UI, smooth interactions, and an engaging user experience built for learners.",
    tech: ["React", "Vite", "Tailwind"],
    icon: Brain,
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="Projects" title="Selected work & experiments" />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map(({ title, tag, description, tech, icon: Icon }) => (
          <article
            key={title}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card/70 p-7 shadow-card backdrop-blur transition hover:-translate-y-1 hover:border-primary/60"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl transition group-hover:bg-primary/40" />
            <div className="relative">
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Icon size={22} />
                </span>
                <ArrowUpRight
                  size={22}
                  className="text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                />
              </div>

              <div className="mt-6">
                <span className="text-xs uppercase tracking-widest text-primary">{tag}</span>
                <h3 className="mt-2 font-display text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
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
