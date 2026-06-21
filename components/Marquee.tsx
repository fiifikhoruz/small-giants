"use client";

import { marqueeTerms } from "@/lib/content";

/** Infinite, CSS-driven marquee. Duplicated track for a seamless loop. */
export default function Marquee() {
  const row = [...marqueeTerms, ...marqueeTerms];
  return (
    <section
      aria-hidden
      className="overflow-hidden border-y border-white/10 bg-ink py-5"
    >
      <div className="flex w-max animate-marquee items-center gap-6 will-change-transform">
        {row.map((term, i) => (
          <span key={i} className="flex items-center gap-6">
            <span className="whitespace-nowrap text-sm font-medium uppercase tracking-[0.18em] text-mute">
              {term}
            </span>
            <span className="h-1 w-1 rounded-full bg-signal" />
          </span>
        ))}
      </div>
    </section>
  );
}
