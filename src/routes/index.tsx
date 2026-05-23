import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Allam Thanuj — CSE Student & Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Allam Thanuj — CSE student, AI/ML enthusiast, and full stack developer building modern web apps and AI-powered solutions.",
      },
      { property: "og:title", content: "Allam Thanuj — Portfolio" },
      {
        property: "og:description",
        content: "AI/ML enthusiast and full stack developer crafting modern web experiences.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
