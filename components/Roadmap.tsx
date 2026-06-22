"use client";

import { motion } from "framer-motion";
import { sprint } from "@/lib/content";
import { EASE, fadeUp, stagger, viewportOnce } from "@/lib/motion";
import SectionLabel from "@/components/ui/SectionLabel";

/**
 * Final section — If I Joined The Sprint Tomorrow.
 * The role is an 8-week sprint to ship 200+ pieces, so this section trades the
 * old 30/60/90 plan for four execution pillars and a closing thesis. Same
 * visual system as the rest of the site.
 */
export default function Roadmap() {
  return (
    <section className="relative border-t border-white/10 bg-paper py-24 text-ink md:py-32">
      <div className="edge">
        <SectionLabel index="09" label={sprint.eyebrow} light />
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-6 max-w-[18ch] text-display font-bold leading-[0.96] text-balance"
        >
          {sprint.title}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/60"
        >
          {sprint.intro}
        </motion.p>

        {/* four execution pillars */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-2"
        >
          {sprint.pillars.map((p) => (
            <motion.article
              key={p.n}
              variants={fadeUp}
              className="group flex flex-col bg-paper p-8 transition-colors duration-300 hover:bg-bone md:p-10"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-ink/40">{p.n}</span>
                <h3 className="text-title font-bold tracking-tight">
                  {p.title}
                </h3>
              </div>
              <p className="mt-4 inline-flex w-fit rounded-full bg-ink/[0.05] px-3 py-1.5 font-mono text-[11px] tracking-wide text-ink/55">
                {p.flow}
              </p>
              <p className="mt-5 text-[15px] leading-relaxed text-ink/70">
                {p.body}
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* closing thesis */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-8 rounded-2xl border border-ink/10 bg-ink p-8 text-paper md:p-12"
        >
          <p className="max-w-3xl font-serif text-2xl italic leading-snug md:text-3xl">
            {sprint.closer}
          </p>
          <div className="mt-7 flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-signal text-ink">
              <span className="text-sm font-black">→</span>
            </span>
            <a
              href="mailto:odoifiifi@gmail.com?subject=Small%20Giants%20%E2%80%94%20Content%20%26%20Growth%20Associate"
              className="text-sm font-semibold text-paper transition-colors hover:text-signal"
            >
              Let&rsquo;s build the engine
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
