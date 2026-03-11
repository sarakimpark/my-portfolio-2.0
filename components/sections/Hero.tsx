import { siteConfig } from "@/data/portfolio";
import { HeroBackground } from "@/components/sections/HeroBackground";
import { HeroProfileImage } from "@/components/sections/HeroProfileImage";
import { Typewriter } from "@/components/sections/Typewriter";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-6 dark:bg-[var(--background)]"
    >
      <HeroBackground />
      <div className="relative z-10 max-w-3xl text-center">
        <HeroProfileImage />
        <h1 className="font-display hero-fade-in hero-fade-in-delay-1 mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-[var(--foreground)]">
          {siteConfig.name}
        </h1>
        <Typewriter />
        <p className="hero-fade-in hero-fade-in-delay-3 mt-2 text-[var(--muted-foreground)] sm:text-lg">
          {siteConfig.shortDescription}
        </p>
        <div className="hero-fade-in hero-fade-in-delay-4 mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-6 text-sm font-medium text-[var(--background)] transition hover:opacity-90"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--border)] px-6 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--foreground)]"
          >
            Contact
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="hero-fade-in hero-fade-in-delay-5 absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-widest text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]"
        aria-label="Scroll to about"
      >
        Scroll
      </a>
    </section>
  );
}
