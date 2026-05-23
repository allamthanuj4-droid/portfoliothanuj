import { SectionHeading } from "./About";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="Contact" title="Let's build something together" />

      <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Have a project, opportunity, or just want to say hi? My inbox is
            always open.
          </p>
          <div className="space-y-3">
            <ContactLink icon={Mail} label="allam.thanuj@email.com" href="mailto:allam.thanuj@email.com" />
            <ContactLink icon={Github} label="github.com/allamthanuj" href="https://github.com" />
            <ContactLink icon={Linkedin} label="linkedin.com/in/allamthanuj" href="https://linkedin.com" />
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-3xl border border-border bg-card/70 p-6 shadow-card backdrop-blur"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@email.com" />
          </div>
          <div className="mt-4">
            <label className="text-xs uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <textarea
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="mt-2 w-full resize-none rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-95 sm:w-auto"
          >
            <Send size={16} />
            {sent ? "Message sent — thank you!" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}

function ContactLink({
  icon: Icon, label, href,
}: { icon: typeof Mail; label: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex items-center gap-3 rounded-xl border border-border bg-card/60 px-4 py-3 text-sm text-muted-foreground backdrop-blur transition hover:border-primary/60 hover:text-foreground"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
        <Icon size={16} />
      </span>
      {label}
    </a>
  );
}

function Field({
  label, name, type = "text", placeholder,
}: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-primary"
      />
    </div>
  );
}
