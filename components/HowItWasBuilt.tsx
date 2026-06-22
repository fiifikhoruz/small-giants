"use client";

import { motion } from "framer-motion";
import { buildProcess, aiCollab } from "@/lib/content";
import { EASE, fadeUp, stagger, viewportOnce } from "@/lib/motion";
import SectionLabel from "@/components/ui/SectionLabel";

/**
 * Section 7 — How This Website Was Built.
 * The differentiator: the site presents itself as a case study in AI-native
 * production. A horizontal process rail, then four cards on where AI added
 * leverage — and where human judgement stayed in charge.
 */
export default function HowItWasBuilt() {
  return (
    <section
      id="built"
      className="relative border-t border-white/10 bg-ink py-24 md:py-32"
    >
      <div className="edge">
        <SectionLabel index="08" label="How This Website Was Built" />
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="max-w-[18ch] text-display font-bold leading-[0.96] text-balance"
          >
            This page is the case study.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="max-w-md text-lg leading-relaxed text-mute"
          >
            A Content &amp; Growth Associate should be able to research, write,
            design and ship with AI in the loop. So instead of describing that,
            I built it. Here’s the system behind what you’re reading.
          </motion.p>
        </div>

        {/* process rail */}
        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3 lg:grid-cols-6"
        >
          {buildProcess.map((step, i) => (
            <motion.li
              key={step.phase}
              variants={fadeUp}
              className="group bg-ink p-6 transition-colors duration-300 hover:bg-ink-800"
            >
              <span className="font-mono text-xs text-signal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-semibold tracking-tight">
                {step.phase}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-mute">
                {step.note}
              </p>
            </motion.li>
          ))}
        </motion.ol>

        {/* AI collaboration cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {aiCollab.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: EASE, delay: (i % 2) * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800 p-8"
            >
              <div
                aria-hidden
                className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-signal/5 blur-2xl transition-opacity duration-500 group-hover:bg-signal/10"
              />
              <h3 className="relative text-xl font-semibold tracking-tight">
                {card.title}
              </h3>
              <p className="relative mt-4 text-[15px] leading-relaxed text-mute">
                {card.body}
              </p>
              <p className="relative mt-6 inline-flex items-center gap-2 border-t border-white/10 pt-4 font-mono text-xs uppercase tracking-wide text-signal">
                <span className="h-1 w-1 rounded-full bg-signal" />
                {card.metric}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-12 max-w-2xl text-center font-serif text-xl italic leading-relaxed text-paper/80 md:text-2xl"
        >
          The point isn’t that AI did the work. It’s that AI handled the
          busywork, so the judgement, taste and editorial calls stayed human —
          and got more attention, not less.
        </motion.p>
      </div>
    </section>
  );
}
