"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  library,
  type LibraryCaseStudy,
  type LibraryFramework,
} from "@/lib/content";
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
              aria-pressed={i === active}
              className={`inline-flex min-h-[44px] items-center rounded-full border px-4 text-sm font-medium transition-all duration-300 ease-premium ${
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
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: EASE,
                      delay: idx * 0.08,
                    }}
                    className="flex h-full cursor-default flex-col justify-between rounded-2xl border border-ink/10 bg-white/60 p-6 transition-colors duration-300 ease-premium hover:border-ink/25"
                  >
                    <span className="inline-flex w-fit rounded-full bg-ink/5 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-ink/60">
                      {item.type}
                    </span>
                    <h3 className="mt-5 text-lg font-semibold leading-snug tracking-tight">
                      {item.title}
                    </h3>
                    <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4">
                      <span className="text-xs text-ink/50">{item.meta}</span>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-ink/30">
                        Preview
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {current.featured && (
                <div className="mt-12 border-t border-ink/10 pt-12">
                  <div className="mb-8 flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink/50">
                      Featured in {current.category}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.35fr_1fr]">
                    <CaseStudyCard data={current.featured.caseStudy} />
                    <FrameworkCard data={current.featured.framework} />
                  </div>
                </div>
              )}
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

/* Featured founder case study — inverted card so it carries the section. */
function CaseStudyCard({ data }: { data: LibraryCaseStudy }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="grain relative flex flex-col overflow-hidden rounded-3xl bg-ink p-8 text-paper md:p-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-signal/10 blur-3xl"
      />
      <span className="relative font-mono text-xs uppercase tracking-[0.25em] text-signal">
        {data.label}
      </span>
      <div className="relative mt-5 flex items-end justify-between gap-4">
        <h3 className="text-4xl font-black tracking-tight md:text-5xl">
          {data.title}
        </h3>
        <span className="hidden whitespace-nowrap rounded-full border border-white/15 px-3 py-1 text-[11px] text-mute sm:inline-block">
          {data.readingTime}
        </span>
      </div>
      <p className="relative mt-3 font-serif text-xl italic text-paper/80">
        “{data.frame}”
      </p>
      <p className="relative mt-5 max-w-xl text-[15px] leading-relaxed text-mute">
        {data.hook}
      </p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="relative overflow-hidden"
          >
            <div className="mt-8 flex flex-col gap-6">
              {data.sections.map((s, i) => (
                <div key={s.heading} className="border-t border-white/10 pt-5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-signal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="text-base font-semibold tracking-tight">
                      {s.heading}
                    </h4>
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed text-mute">
                    {s.body}
                  </p>
                </div>
              ))}

              <div className="grid grid-cols-1 gap-6 border-t border-white/10 pt-6 sm:grid-cols-2">
                <ListBlock title="Product-market fit signals" items={data.signals} />
                <ListBlock title="Lessons for founders" items={data.lessons} accent />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="relative mt-8 inline-flex min-h-[44px] w-fit items-center gap-2 rounded-full bg-signal px-5 text-sm font-semibold text-ink transition-transform duration-300 ease-premium hover:scale-[1.03]"
      >
        {open ? "Collapse case study" : "Read the case study"}
        <span
          className={`transition-transform duration-300 ${open ? "rotate-90" : ""}`}
        >
          →
        </span>
      </button>
    </motion.article>
  );
}

/* Featured framework — light card, paired with the case study. */
function FrameworkCard({ data }: { data: LibraryFramework }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
      className="flex flex-col rounded-3xl border border-ink/15 bg-white/70 p-8 md:p-10"
    >
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink/45">
        {data.label}
      </span>
      <h3 className="mt-5 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
        {data.title}
      </h3>
      <p className="mt-4 text-[15px] leading-relaxed text-ink/65">
        {data.intro}
      </p>

      <div className="mt-7 flex flex-col">
        {data.principles.map((p, i) => (
          <div
            key={p.heading}
            className="border-t border-ink/10 py-4 first:border-t-0"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs text-ink/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h4 className="text-[15px] font-semibold tracking-tight">
                {p.heading}
              </h4>
            </div>
            <AnimatePresence initial={false}>
              {open && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="overflow-hidden pl-7 text-[14px] leading-relaxed text-ink/60"
                >
                  <span className="block pt-2">{p.body}</span>
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="mt-5 rounded-2xl bg-ink/[0.04] p-5">
              <p className="text-[10px] uppercase tracking-[0.25em] text-ink/45">
                Takeaways
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {data.takeaways.map((t) => (
                  <li key={t} className="flex gap-3 text-[14px] text-ink/75">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-6 inline-flex min-h-[44px] w-fit items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-ink/60"
      >
        {open ? "Show less" : "Read the framework"}
        <span
          className={`transition-transform duration-300 ${open ? "-rotate-90" : "rotate-90"}`}
        >
          →
        </span>
      </button>
    </motion.article>
  );
}

function ListBlock({
  title,
  items,
  accent,
}: {
  title: string;
  items: string[];
  accent?: boolean;
}) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.25em] text-mute-dim">
        {title}
      </p>
      <ul className="mt-3 flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[14px] leading-snug text-mute">
            <span
              className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${
                accent ? "bg-signal" : "bg-mute-dim"
              }`}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
