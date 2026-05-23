import { SectionHeading } from "./About";
import {
  Code2, Palette, Database, GitBranch, Brain, Smartphone,
  Sparkles, Layers, Wind, Flame,
} from "lucide-react";

const skills = [
  { name: "HTML", icon: Code2 },
  { name: "CSS", icon: Palette },
  { name: "JavaScript", icon: Sparkles },
  { name: "React.js", icon: Layers },
  { name: "Vite", icon: Wind },
  { name: "Firebase", icon: Flame },
  { name: "Git & GitHub", icon: GitBranch },
  { name: "AI / ML Basics", icon: Brain },
  { name: "UI / UX Design", icon: Palette },
  { name: "Responsive Web", icon: Smartphone },
  { name: "Databases", icon: Database },
  { name: "Full Stack", icon: Code2 },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="Skills" title="Tools I work & build with" />
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-5 shadow-card backdrop-blur transition hover:-translate-y-1 hover:border-primary/60"
          >
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/20 blur-2xl transition group-hover:bg-primary/40" />
            <div className="relative flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Icon size={20} />
              </span>
              <span className="font-medium text-foreground">{name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
