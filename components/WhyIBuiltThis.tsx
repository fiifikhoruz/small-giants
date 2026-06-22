"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

/**
 * Why I Built This — the honest application note.
 * Deliberately understated: one column, quiet type, no decoration.
 */
export default function WhyIBuiltThis() {
  return (
    <section
      id="why-i-built-this"
      className="border-t border-white/10 bg-ink py-24 md:py-32"
    >
      <div className="edge">
        <div className="mx-auto max-w-2xl">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="font-mono text-xs uppercase tracking-[0.25em] text-mute-dim"
          >
            Why I built this
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-6 space-y-5 text-lg leading-relaxed text-mute md:text-xl"
          >
            <p className="text-paper">
              Instead of telling you what I can do, I decided to show you.
            </p>
            <p>
              This website was researched, written, designed and developed as an
              application for Small Giants.
            </p>
            <p>
              Built using AI-assisted workflows, product thinking and
              founder-first content strategy, because that&apos;s exactly what
              this role requires.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
