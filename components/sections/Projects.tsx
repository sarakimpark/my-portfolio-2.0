"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import type { Project, ProjectCategory } from "@/types";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

type ProjectFilter = "all" | ProjectCategory;

const filters: { label: string; value: ProjectFilter }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
];

function ProjectCard({
  project,
  onViewDetails,
}: {
  project: Project;
  onViewDetails: (project: Project) => void;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--background)] transition hover:border-[var(--foreground)]/20 hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--muted)]">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-medium uppercase tracking-wide text-[var(--muted-foreground)]">
          {project.subtitle}
        </span>
        <h3 className="mt-2 font-display text-lg font-semibold text-[var(--foreground)]">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted-foreground)]">
          {project.description}
        </p>
        <button
          type="button"
          onClick={() => onViewDetails(project)}
          className="mt-4 self-start text-sm font-medium text-[var(--foreground)] underline-offset-4 transition hover:underline"
        >
          View Details
        </button>
      </div>
    </article>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <button
        type="button"
        aria-label="Close project details"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-[var(--border)] bg-[var(--background)] shadow-2xl"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.25 }}
      >
        <div className="relative aspect-video w-full overflow-hidden bg-[var(--muted)]">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
            priority
          />
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-xs font-medium uppercase tracking-wide text-[var(--muted-foreground)]">
                {project.subtitle}
              </span>
              <h3
                id="project-modal-title"
                className="mt-2 font-display text-2xl font-semibold text-[var(--foreground)]"
              >
                {project.title}
              </h3>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="rounded-full p-2 text-[var(--muted-foreground)] transition hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <p className="mt-5 text-[var(--foreground)] leading-relaxed">
            {project.longDescription}
          </p>
          {project.techStack.length > 0 && (
            <p className="mt-4 text-sm text-[var(--muted-foreground)]">
              {project.techStack.join(" · ")}
            </p>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex text-sm font-medium text-[var(--foreground)] underline-offset-4 hover:underline"
            >
              View on GitHub →
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function CarouselArrow({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous project" : "Next project"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition hover:border-[var(--foreground)] disabled:cursor-not-allowed disabled:opacity-30"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        {direction === "prev" ? (
          <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        ) : (
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        )}
      </svg>
    </button>
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  const handleFilterChange = (filter: ProjectFilter) => {
    setActiveFilter(filter);
    setActiveIndex(0);
  };

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const slide = track.children[index] as HTMLElement | undefined;
    if (!slide) return;

    track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
    setActiveIndex(index);
  }, []);

  const goToPrevious = () => {
    if (activeIndex <= 0) return;
    scrollToIndex(activeIndex - 1);
  };

  const goToNext = () => {
    if (activeIndex >= filteredProjects.length - 1) return;
    scrollToIndex(activeIndex + 1);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const slides = Array.from(track.children) as HTMLElement[];
      if (slides.length === 0) return;

      const scrollLeft = track.scrollLeft;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      slides.forEach((slide, index) => {
        const distance = Math.abs(slide.offsetLeft - scrollLeft);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, [filteredProjects.length]);

  useEffect(() => {
    scrollToIndex(0);
  }, [activeFilter, scrollToIndex]);

  return (
    <section id="projects" className="scroll-mt-24 border-t border-[var(--border)] py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
            Projects
          </h2>
        </AnimatedSection>

        <AnimatedSection className="mt-8" delay={0.05}>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => handleFilterChange(filter.value)}
                className={`cursor-pointer text-sm transition ${
                  activeFilter === filter.value
                    ? "font-semibold text-[var(--foreground)]"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-10" delay={0.1}>
          {filteredProjects.length === 0 ? (
            <p className="text-center text-sm text-[var(--muted-foreground)]">
              No projects in this category yet.
            </p>
          ) : (
            <div className="relative">
              <div
                ref={trackRef}
                className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="w-full shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  >
                    <ProjectCard
                      project={project}
                      onViewDetails={setSelectedProject}
                    />
                  </div>
                ))}
              </div>

              {filteredProjects.length > 1 && (
                <div className="mt-6 flex items-center justify-center gap-4">
                  <CarouselArrow
                    direction="prev"
                    onClick={goToPrevious}
                    disabled={activeIndex === 0}
                  />
                  <div className="flex items-center gap-2">
                    {filteredProjects.map((project, index) => (
                      <button
                        key={project.id}
                        type="button"
                        aria-label={`Go to ${project.title}`}
                        onClick={() => scrollToIndex(index)}
                        className={`h-2 rounded-full transition ${
                          index === activeIndex
                            ? "w-6 bg-[var(--foreground)]"
                            : "w-2 bg-[var(--border)] hover:bg-[var(--muted-foreground)]"
                        }`}
                      />
                    ))}
                  </div>
                  <CarouselArrow
                    direction="next"
                    onClick={goToNext}
                    disabled={activeIndex === filteredProjects.length - 1}
                  />
                </div>
              )}
            </div>
          )}
        </AnimatedSection>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            key={selectedProject.id}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
