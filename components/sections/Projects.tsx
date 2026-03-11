"use client";

import { projects } from "@/data/portfolio";
import type { Project } from "@/types";
import { AnimatedSection, AnimatedStagger, AnimatedItem } from "@/components/ui/AnimatedSection";

function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="group border-b border-[var(--border)] py-8 transition hover:border-[var(--foreground)]/20">
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
        <div>
          <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-[var(--muted-foreground)]">
            {project.description}
          </p>
          {project.techStack.length > 0 && (
            <p className="mt-1 text-xs text-[var(--muted-foreground)]">
              {project.techStack.join(" · ")}
            </p>
          )}
        </div>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 shrink-0 text-sm font-medium text-[var(--foreground)] underline-offset-4 hover:underline sm:mt-0"
          >
            View Details →
          </a>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-[var(--border)] py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <AnimatedSection>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
            My Projects
          </h2>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            Recent works
          </p>
        </AnimatedSection>
        <AnimatedStagger className="mt-12" staggerDelay={0.08}>
          {projects.map((project) => (
            <AnimatedItem key={project.id}>
              <ProjectRow project={project} />
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
