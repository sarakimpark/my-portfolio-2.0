"use client";

import { about } from "@/data/portfolio";
import { AnimatedStagger, AnimatedItem } from "@/components/ui/AnimatedSection";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-[var(--border)] py-24 px-6">
      <AnimatedStagger className="mx-auto max-w-3xl" staggerDelay={0.12}>
        <AnimatedItem>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
            About Me
          </h2>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            <span className="inline-block grayscale" aria-hidden>📍</span> {about.location}
          </p>
        </AnimatedItem>
        <AnimatedItem>
          <div className="mt-12 space-y-6">
            <p className="text-[var(--foreground)] leading-relaxed">
              {about.bioParagraph1}
            </p>
            <p className="text-[var(--foreground)] leading-relaxed">
              {about.bioParagraph2}
            </p>
          </div>
        </AnimatedItem>
        <AnimatedItem>
          <p className="mt-12 text-xs uppercase tracking-widest text-[var(--muted-foreground)]">
            Technologies I work with
          </p>
          <p className="mt-4 text-sm text-[var(--muted-foreground)]">
            {about.skills.join(" / ")}
          </p>
        </AnimatedItem>
      </AnimatedStagger>
    </section>
  );
}
