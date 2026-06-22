"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { timeline } from "@/lib/content";
import { EASE, fadeUp, viewportOnce } from "@/lib/motion";
import SectionLabel from "@/components/ui/SectionLabel";

/**
 * Section 5 — Build in Public.
 * A vertical timeline whose spine fills as the reader scrolls. Each milestone
 * reveals the experiment, the win, the failure and the lesson — transparency
 * as a feature, not an afterthought.
 */
export default function BuildInPublic() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 60%"],
  });
  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative border-t border-white/10 bg-ink py-24 md:py-32">
      <div className="edge">
        <SectionLabel index="06" label="Build in Public" />
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-6 max-w-[18ch] text-display font-bold leading-[0.96] text-balance"
        >
          The first 365 days, with nothing hidden.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-6 max-w-xl text-lg leading-relaxed text-mute"
        >
          We teach founder transparency by practising it. Here’s the honest
          version of building a media company: the bets, the misses, and what
          each one taught us.
        </motion.p>
      </div>

      <div ref={ref} className="edge relative mt-16">
        {/* spine */}
        <div className="absolute left-[7px] top-2 h-full w-px bg-white/10 md:left-[calc(120px+7px)]" />
        <motion.div
          style={{ height: fill }}
          className="absolute left-[7px] top-2 w-px bg-signal md:left-[calc(120px+7px)]"
        />

        <div className="flex flex-col gap-14">
          {timeline.map((m) => (
            <motion.div
              key={m.day}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="relative grid grid-cols-1 gap-5 pl-9 md:grid-cols-[120px_1fr] md:gap-10 md:pl-0"
            >
              {/* node + day */}
              <div className="flex items-center gap-4 md:flex-col md:items-end md:gap-2 md:pr-9 md:text-right">
                <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-signal bg-ink md:left-[120px]" />
                <span className="text-xl font-bold tracking-tight text-signal md:text-2xl">
                  {m.day}
                </span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-ink-800 p-7 md:p-8">
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                  {m.title}
                </h3>
                <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                  <Field label="Experiment" value={m.experiment} />
                  <Field label="Win" value={m.win} accent="text-signal" />
                  <Field label="Failure" value={m.failure} accent="text-mute" />
                  <Field label="Lesson" value={m.lesson} bold />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  accent,
  bold,
}: {
  label: string;
  value: string;
  accent?: string;
  bold?: boolean;
}) {
  return (
    <div>
      <p
        className={`text-[10px] uppercase tracking-[0.25em] ${
          accent ?? "text-mute-dim"
        }`}
      >
        {label}
      </p>
      <p
        className={`mt-1.5 text-[15px] leading-relaxed ${
          bold ? "font-medium text-paper" : "text-mute"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
