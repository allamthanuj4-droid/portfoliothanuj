export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Allam Thanuj. Crafted with care.</p>
        <p>Built using React, Tailwind & a lot of ☕</p>
      </div>
    </footer>
  );
}
