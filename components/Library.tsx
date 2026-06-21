"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { library } from "@/lib/content";
import { EASE, fadeUp, viewportOnce } from "@/lib/motion";
import SectionLabel from "@/components/ui/SectionLabel";

/**
 * Section 4 — The Entrepreneur Library.
 * A content-discovery surface. Selecting a category reveals its resources with
 * a staggered entrance, evoking a future knowledge platform.
 */
export default function Library() {
  const [active, setActive] = useState(0);
  const current = library[active];

  return (
    <section
      id="library"
      className="relative border-t border-white/10 bg-paper py-24 text-ink md:py-32"
    >
      <div className="edge">
        <SectionLabel index="04" label="The Entrepreneur Library" light />
        <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="max-w-[16ch] text-display font-bold leading-[0.96] text-balance"
          >
            Every lesson, in one place.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="max-w-sm text-lg leading-relaxed text-ink/60"
          >
            Articles, playbooks, frameworks and teardowns, organised the way
            founders actually search: by the problem in front of them.
          </motion.p>
        </div>

        {/* category tabs */}
        <div className="mt-12 flex flex-wrap gap-2.5">
          {library.map((cat, i) => (
            <button
              key={cat.category}
              onClick={() => setActive(i)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ease-premium ${
                i === active
                  ? "border-ink bg-ink text-paper"
                  : "border-ink/15 text-ink/70 hover:border-ink/40 hover:text-ink"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* reveal grid */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.category}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="mb-6 font-serif text-xl italic text-ink/70"
              >
                {current.tagline}
              </motion.p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {current.items.map((item, idx) => (
                  <motion.a
                    key={item.title}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: EASE,
                      delay: idx * 0.08,
                    }}
                    className="group flex h-full flex-col justify-between rounded-2xl border border-ink/10 bg-white/60 p-6 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-ink/30 hover:shadow-[0_20px_50px_-25px_rgba(10,10,11,0.45)]"
                  >
                    <span className="inline-flex w-fit rounded-full bg-ink/5 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-ink/60">
                      {item.type}
                    </span>
                    <h3 className="mt-5 text-lg font-semibold leading-snug tracking-tight">
                      {item.title}
                    </h3>
                    <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4">
                      <span className="text-xs text-ink/50">{item.meta}</span>
                      <span className="text-ink/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-ink">
                        →
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="mt-10 text-sm text-ink/40">
          {library.length} categories · 300+ resources and counting
        </p>
      </div>
    </section>
  );
}
