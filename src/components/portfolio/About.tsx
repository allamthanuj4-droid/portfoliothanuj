export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="About" title="A glimpse into who I am" />
      <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1.4fr]">
        <div className="rounded-2xl border border-border bg-card/60 p-6 shadow-card backdrop-blur">
          <h3 className="font-display text-xl font-semibold">Quick facts</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li><span className="text-foreground">Role:</span> CSE Student & Developer</li>
            <li><span className="text-foreground">Focus:</span> AI / ML & Web</li>
            <li><span className="text-foreground">Stack:</span> React, Vite, Firebase</li>
            <li><span className="text-foreground">Currently:</span> Building side projects</li>
          </ul>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            I'm a passionate Computer Science student specializing in Artificial
            Intelligence and Machine Learning. I focus on building modern web
            applications and solving real-world problems through technology.
          </p>
          <p>
            My interests sit at the intersection of full-stack development,
            AI-powered solutions, and clean user experiences. I'm continuously
            learning and creating innovative projects that combine creativity
            with functionality.
          </p>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
