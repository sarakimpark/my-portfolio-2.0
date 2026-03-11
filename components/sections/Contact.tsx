"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { AnimatedStagger, AnimatedItem } from "@/components/ui/AnimatedSection";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          botcheck: formData.get("botcheck") || "",
        }),
      });
      const data = (await res.json()) as { success?: boolean; message?: string };
      if (data.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-[var(--border)] py-24 px-6">
      <AnimatedStagger className="mx-auto max-w-xl" staggerDelay={0.12}>
        <AnimatedItem>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
            Get In Touch
          </h2>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            What&apos;s next? Say hello.
          </p>
        </AnimatedItem>
        <AnimatedItem>
          <form id="contact-form" onSubmit={handleSubmit} className="mt-14 space-y-5">
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
            />
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
          </form>
        </AnimatedItem>
        <AnimatedItem>
          <div className="mt-6 space-y-3">
            <Button
              type="submit"
              form="contact-form"
              variant="primary"
              size="lg"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send"}
            </Button>
            {status === "sent" && (
              <p className="text-sm text-[var(--muted-foreground)]">
                Thanks — I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600 dark:text-red-400">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </div>
        </AnimatedItem>
      </AnimatedStagger>
    </section>
  );
}
