import Link from "next/link";
import { siteConfig } from "@/data/portfolio";
import { HeroBackground } from "./HeroBackground";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[var(--background)] px-6"
    >
      <HeroBackground />
      <div className="relative z-10 max-w-3xl text-center">
        <p className="hero-fade-in text-sm uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
          Hi, my name is
        </p>
        <h1 className="font-display hero-fade-in hero-fade-in-delay-1 mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-[var(--foreground)]">
          {siteConfig.name}
        </h1>
        <p className="hero-fade-in hero-fade-in-delay-2 mt-4 text-lg text-[var(--muted-foreground)] sm:text-xl">
          {siteConfig.title}
        </p>
        <p className="hero-fade-in hero-fade-in-delay-2 mt-2 text-[var(--muted-foreground)]">
          {siteConfig.shortDescription}
        </p>
        <div className="hero-fade-in hero-fade-in-delay-3 mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-6 text-sm font-medium text-[var(--background)] transition hover:opacity-90"
          >
            Download Resume
          </a>
          <Link
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--border)] px-6 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--foreground)]"
          >
            Contact
          </Link>
        </div>
      </div>
      <Link
        href="#about"
        className="hero-fade-in hero-fade-in-delay-4 absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-widest text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]"
        aria-label="Scroll to about"
      >
        Scroll
      </Link>
    </section>
  );
}
