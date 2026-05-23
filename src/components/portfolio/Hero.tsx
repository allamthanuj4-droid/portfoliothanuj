import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-hero pt-24"
    >
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-secondary/40 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.3fr_1fr] md:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for collaborations
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient">Allam Thanuj</span>
          </h1>

          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            CSE Student · AIML Enthusiast · Full Stack Developer
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            I build modern web applications and AI-powered solutions that blend
            clean user experiences with real-world impact.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition hover:translate-y-[-1px] hover:opacity-95"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:bg-card"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-muted-foreground">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full p-2 transition hover:bg-card hover:text-foreground">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full p-2 transition hover:bg-card hover:text-foreground">
              <Linkedin size={20} />
            </a>
            <a href="#contact" aria-label="Email" className="rounded-full p-2 transition hover:bg-card hover:text-foreground">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Avatar card */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary/40 to-secondary/40 blur-2xl" />
          <div className="rounded-3xl border border-border bg-card/70 p-6 shadow-card backdrop-blur-xl">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/30 via-secondary/40 to-background">
              <div className="flex h-full w-full items-center justify-center font-display text-7xl font-bold text-gradient">
                AT
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              <Stat value="10+" label="Projects" />
              <Stat value="AI/ML" label="Focus" />
              <Stat value="Full‑Stack" label="Dev" />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
        aria-label="Scroll down"
      >
        <ArrowDown className="animate-bounce" size={22} />
      </a>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-background/40 px-2 py-3">
      <div className="text-sm font-semibold text-foreground">{value}</div>
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}
