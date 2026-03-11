"use client";

import { useState } from "react";
import Image from "next/image";
import { about, siteConfig } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="scroll-mt-24 border-t border-[var(--border)] py-24 px-6">
      <AnimatedSection className="mx-auto max-w-3xl">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
          About Me
        </h2>
        <div className="mt-12 flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-16">
          <div className="flex shrink-0 flex-col items-center text-center sm:items-center">
            <div className="relative h-52 w-52 overflow-hidden rounded-full sm:h-56 sm:w-56">
              {!imgError ? (
                <Image
                  src={siteConfig.profileImage}
                  alt="Sara Park"
                  width={224}
                  height={224}
                  className="h-full w-full object-cover"
                  priority
                  onError={() => setImgError(true)}
                />
              ) : (
                <div
                  className="flex h-full w-full items-center justify-center bg-[var(--muted)] font-display text-3xl font-semibold text-[var(--muted-foreground)]"
                  aria-hidden
                >
                  SP
                </div>
              )}
            </div>
            <div className="mt-8 space-y-2 text-sm text-[var(--muted-foreground)]">
              <p><span className="inline-block grayscale" aria-hidden>📍</span> {about.location}</p>
              <p>
                <span className="inline-block grayscale" aria-hidden>✉️</span>{" "}
                <a
                  href={`mailto:${about.email}`}
                  className="text-[var(--muted-foreground)] underline-offset-2 hover:underline hover:text-[var(--foreground)]"
                >
                  {about.email}
                </a>
              </p>
            </div>
          </div>
          <div className="min-w-0 flex-1 space-y-6">
            <p className="text-[var(--foreground)] leading-relaxed">
              {about.bioParagraph1}
            </p>
            <p className="text-[var(--foreground)] leading-relaxed">
              {about.bioParagraph2}
            </p>
          </div>
        </div>
        <p className="mt-12 text-xs uppercase tracking-widest text-[var(--muted-foreground)]">
          Technologies I work with
        </p>
        <p className="mt-4 text-sm text-[var(--muted-foreground)]">
          {about.skills.join(" / ")}
        </p>
      </AnimatedSection>
    </section>
  );
}
