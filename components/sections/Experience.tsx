"use client";

import { experience } from "@/data/portfolio";
import { AnimatedSection, AnimatedStagger, AnimatedItem } from "@/components/ui/AnimatedSection";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-[var(--border)] py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <AnimatedSection>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
            Work Experience
          </h2>
        </AnimatedSection>
        <div className="mt-12 space-y-0 border-l border-[var(--border)] pl-6">
          <AnimatedStagger staggerDelay={0.12}>
            {experience.map((item) => (
              <AnimatedItem key={item.id} className="relative pb-12 last:pb-0">
                <span
                  className="absolute left-0 top-0.5 -translate-x-[5px] h-2 w-2 rounded-full bg-[var(--foreground)]"
                  aria-hidden
                />
                <div className="pl-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display font-semibold text-[var(--foreground)]">
                      {item.role}
                    </h3>
                    <span className="text-xs text-[var(--muted-foreground)]">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm text-[var(--muted-foreground)]">
                    {item.company}
                    {item.location && ` · ${item.location}`}
                  </p>
                  {item.description && item.description.length > 0 && (
                    <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-[var(--muted-foreground)]">
                      {item.description.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </div>
    </section>
  );
}
