"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experiences" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="#hero"
          className="font-display text-lg font-semibold text-[var(--foreground)]"
        >
          Sara Park
        </Link>
        <div className="flex items-center gap-2">
          <nav className="hidden sm:block sm:mr-6">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded sm:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span className="text-[var(--foreground)]">
              {open ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-[var(--border)] bg-[var(--background)] px-6 py-4 sm:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
