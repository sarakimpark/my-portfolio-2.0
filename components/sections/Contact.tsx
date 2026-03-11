"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { contactInfo } from "@/data/portfolio";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-[var(--border)] py-24 px-6">
      <AnimatedSection className="mx-auto max-w-xl">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
          Get In Touch
        </h2>
        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
          What&apos;s next? Say hello.
        </p>
        <form onSubmit={handleSubmit} className="mt-14 space-y-5">
          <p className="text-xs uppercase tracking-widest text-[var(--muted-foreground)]">
            Send a message
          </p>
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Name"
              className="w-full border-b border-[var(--border)] bg-transparent py-3 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--foreground)] focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email"
              className="w-full border-b border-[var(--border)] bg-transparent py-3 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--foreground)] focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={3}
              placeholder="Message"
              className="w-full resize-y border-b border-[var(--border)] bg-transparent py-3 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--foreground)] focus:outline-none"
            />
          </div>
          {status === "sent" && (
            <p className="text-sm text-[var(--muted-foreground)]">
              Thanks — I&apos;ll get back to you soon.
            </p>
          )}
          <Button type="submit" variant="primary" size="lg" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send"}
          </Button>
        </form>
      </AnimatedSection>
    </section>
  );
}
