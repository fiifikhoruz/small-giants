"use client";

import { motion } from "framer-motion";
import { nav } from "@/lib/content";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function Footer() {
  return (
    <footer
      id="join"
      className="relative overflow-hidden border-t border-white/10 bg-ink"
    >
      <div className="edge py-20 md:py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-3xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
            Join the journey
          </p>
          <h2 className="mt-5 text-display font-bold leading-[0.95] text-balance">
            Never stop learning.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">
            Small Giants is a concept built to show what founder-first education
            could feel like. If you’re building it for real, let’s talk.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:odoifiifi@gmail.com?subject=Small%20Giants%20—%20Content%20%26%20Growth%20Associate"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-signal px-7 py-3.5 text-[15px] font-semibold text-ink transition-transform duration-300 ease-premium hover:scale-[1.03]"
            >
              Start the conversation
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#top"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-[15px] font-medium text-paper transition-colors hover:border-white/40"
            >
              Back to the top
            </a>
          </div>
        </motion.div>

        <div className="mt-20 flex flex-col gap-8 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-[7px] bg-signal text-ink">
              <span className="text-[15px] font-black leading-none">S</span>
            </span>
            <span className="text-sm font-semibold">Small Giants</span>
          </div>
          <nav className="flex flex-wrap gap-x-7 gap-y-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-mute transition-colors hover:text-paper"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <p className="text-xs text-mute-dim">
            A concept by a Content &amp; Growth Associate candidate · 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
