"use client";

import { useState, useEffect } from "react";

const PHRASES = ["Software Engineer", "Content Creator", "Creative Problem Solver"];
const TYPE_MS = 80;
const DELETE_MS = 50;
const PAUSE_AFTER_TYPE_MS = 1800;
const PAUSE_AFTER_DELETE_MS = 400;

export function Typewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = PHRASES[phraseIndex];

    if (!isDeleting) {
      if (displayText.length < phrase.length) {
        const timeout = setTimeout(() => {
          setDisplayText(phrase.slice(0, displayText.length + 1));
        }, TYPE_MS);
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, PAUSE_AFTER_TYPE_MS);
      return () => clearTimeout(timeout);
    }

    if (displayText.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, DELETE_MS);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % PHRASES.length);
    }, PAUSE_AFTER_DELETE_MS);
    return () => clearTimeout(timeout);
  }, [phraseIndex, displayText, isDeleting]);

  return (
    <p className="hero-fade-in hero-fade-in-delay-3 mt-4 min-h-[1.75rem] text-lg text-[var(--muted-foreground)] sm:text-xl">
      {displayText}
      <span className="animate-cursor-blink inline-block h-5 w-0.5 shrink-0 align-middle bg-[var(--muted-foreground)]" aria-hidden />
    </p>
  );
}
