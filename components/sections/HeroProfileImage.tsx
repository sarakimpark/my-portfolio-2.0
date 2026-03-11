"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/portfolio";

export function HeroProfileImage() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="hero-fade-in flex justify-center">
      <div className="hero-profile-ring relative h-28 w-28 overflow-hidden rounded-full sm:h-36 sm:w-36">
        {!imgError ? (
          <Image
            src={siteConfig.profileImage}
            alt="Sara Park"
            width={144}
            height={144}
            className="h-full w-full object-cover"
            priority
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-[var(--muted)] font-display text-2xl font-semibold text-[var(--muted-foreground)] sm:text-3xl"
            aria-hidden
          >
            SP
          </div>
        )}
      </div>
    </div>
  );
}
