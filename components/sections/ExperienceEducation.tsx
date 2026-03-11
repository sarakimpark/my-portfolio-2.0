"use client";

import { experience, education } from "@/data/portfolio";
import type { Experience as ExperienceType, Education as EducationType } from "@/types";
import { AnimatedSection, AnimatedStagger, AnimatedItem } from "@/components/ui/AnimatedSection";

const cardClass =
  "rounded-xl border border-[var(--border)] bg-[var(--background)]/60 backdrop-blur-sm p-5 shadow-sm";

function ExperienceCard({ item, align }: { item: ExperienceType; align: "left" | "right" }) {
  const textAlign = align === "right" ? "text-right" : "text-left";
  return (
    <div className={`${cardClass} ${textAlign}`}>
      <h3 className="font-display font-semibold text-[var(--foreground)]">{item.role}</h3>
      <p className="mt-1 text-xs text-[var(--muted-foreground)]">{item.period}</p>
      <p className="mt-2 text-sm text-[var(--muted-foreground)]">
        {item.company}
        {item.location && ` · ${item.location}`}
      </p>
      {item.description && item.description.length > 0 && (
        <ul className={`mt-3 space-y-1 text-sm text-[var(--muted-foreground)] ${align === "right" ? "list-inside list-disc text-right" : "list-inside list-disc"}`}>
          {item.description.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function EducationCard({ item, align }: { item: EducationType; align: "left" | "right" }) {
  const textAlign = align === "right" ? "text-right" : "text-left";
  return (
    <div className={`${cardClass} ${textAlign}`}>
      <h3 className="font-display font-semibold text-[var(--foreground)]">{item.degree}</h3>
      <p className="mt-1 text-xs text-[var(--muted-foreground)]">{item.period}</p>
      <p className="mt-2 text-sm text-[var(--muted-foreground)]">{item.institution}</p>
      {item.note && (
        <p className="mt-3 text-xs italic text-[var(--muted-foreground)]">{item.note}</p>
      )}
    </div>
  );
}

/** Parse period string to get end date for sorting (e.g. "Apr 2023 - May 2025" → May 2025) */
function getSortDate(period: string): number {
  const endPart = period.includes(" - ") ? period.split(" - ")[1]?.trim() ?? period : period;
  const date = new Date(endPart);
  return isNaN(date.getTime()) ? 0 : date.getTime();
}

type TimelineItem =
  | { type: "experience"; data: ExperienceType; sortDate: number }
  | { type: "education"; data: EducationType; sortDate: number };

function buildTimelineSteps(): TimelineItem[] {
  const items: TimelineItem[] = [
    ...experience.map((e) => ({ type: "experience" as const, data: e, sortDate: getSortDate(e.period) })),
    ...education.map((e) => ({ type: "education" as const, data: e, sortDate: getSortDate(e.period) })),
  ];
  items.sort((a, b) => b.sortDate - a.sortDate);
  return items;
}

export function ExperienceEducation() {
  const steps = buildTimelineSteps();

  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-[var(--border)] py-24 px-6"
      aria-labelledby="timeline-heading"
    >
      <div className="mx-auto max-w-3xl">
        <AnimatedSection>
          <h2
            id="timeline-heading"
            className="font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl"
          >
            Experiences
          </h2>
        </AnimatedSection>

        <div className="relative mt-14">
          {/* Center timeline line (left on mobile) */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-px bg-[var(--border)] max-md:left-4 max-md:translate-x-0"
            aria-hidden
          />

          <AnimatedStagger staggerDelay={0.1}>
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              const isFirstEducation = step.type === "education" && steps.findIndex((s) => s.type === "education") === i;
              return (
                <AnimatedItem
                  key={`${step.type}-${step.data.id}`}
                  className="relative flex items-start gap-x-6 pb-14 last:pb-0 max-md:pl-12"
                >
                  {/* Timeline dot */}
                  <span
                    className="absolute left-1/2 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[var(--border)] bg-[var(--background)] max-md:left-4 max-md:translate-x-0"
                    aria-hidden
                  />

                  {isLeft ? (
                    <>
                      <div className="flex w-[calc(50%-24px)] flex-col items-end pr-6 max-md:w-full max-md:items-stretch max-md:pr-0">
                        <div className="w-full max-w-md max-md:max-w-none max-md:[&_.text-right]:text-left max-md:[&_.flex-row-reverse]:flex-row">
                          {step.type === "experience" ? (
                            <ExperienceCard item={step.data} align="right" />
                          ) : (
                            <div id={isFirstEducation ? "education" : undefined}>
                              <EducationCard item={step.data} align="right" />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="w-[calc(50%-24px)] max-md:hidden" aria-hidden />
                    </>
                  ) : (
                    <>
                      <div className="w-[calc(50%-24px)] max-md:hidden" aria-hidden />
                      <div
                        id={isFirstEducation ? "education" : undefined}
                        className="flex w-[calc(50%-24px)] flex-col items-start pl-6 max-md:w-full max-md:pl-0"
                      >
                        <div className="w-full max-w-md max-md:max-w-none">
                          {step.type === "experience" ? (
                            <ExperienceCard item={step.data} align="left" />
                          ) : (
                            <EducationCard item={step.data} align="left" />
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </AnimatedItem>
              );
            })}
          </AnimatedStagger>
        </div>
      </div>
    </section>
  );
}
