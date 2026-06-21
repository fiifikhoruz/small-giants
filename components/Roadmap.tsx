"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { roadmap } from "@/lib/content";
import { EASE, fadeUp, viewportOnce } from "@/lib/motion";
import SectionLabel from "@/components/ui/SectionLabel";

/**
 * Final section — If I Joined Small Giants Tomorrow.
 * A 30/60/90 day plan presented as a premium roadmap. Tab between windows;
 * each reveals concrete execution across content, growth, AI and audience.
 */
export default function Roadmap() {
  const [active, setActive] = useState(0);
  const current = roadmap[active];

  return (
    <section className="relative border-t border-white/10 bg-paper py-24 text-ink md:py-32">
      <div className="edge">
        <SectionLabel index="08" label="If I Joined Small Giants Tomorrow" light />
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-6 max-w-[18ch] text-display font-bold leading-[0.96] text-balance"
        >
          A 90-day plan, not a wish list.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-6 max-w-xl text-lg leading-relaxed text-ink/60"
        >
          What I’d actually do in the first three months: learn the engine, build
          the systems, then make them compound. Concrete enough that a founder
          could hold me to it.
        </motion.p>

        {/* window tabs */}
        <div className="mt-12 flex gap-2.5">
          {roadmap.map((r, i) => (
            <button
              key={r.window}
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ease-premium ${
                i === active
                  ? "bg-ink text-paper"
                  : "bg-ink/5 text-ink/60 hover:bg-ink/10 hover:text-ink"
              }`}
            >
              {r.window}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* left: window summary */}
          <motion.div
            key={current.window + "-head"}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <span className="font-mono text-7xl font-black tracking-tight text-ink/10 md:text-8xl">
              {current.window.split(" ")[0]}
            </span>
            <p className="mt-2 text-2xl font-bold tracking-tight">
              {current.theme}
            </p>
          </motion.div>

          {/* right: checklist */}
          <div className="flex flex-col">
            {current.items.map((item, idx) => (
              <motion.div
                key={current.window + idx}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: idx * 0.08 }}
                className="group flex items-start gap-5 border-t border-ink/10 py-5 last:border-b"
              >
                <span className="mt-1 font-mono text-xs text-ink/40">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="flex-1 text-lg leading-snug text-ink/85">
                  {item}
                </p>
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-ink/15 transition-colors duration-300 group-hover:bg-ink" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 rounded-2xl border border-ink/10 bg-ink p-8 text-paper md:p-10"
        >
          <p className="font-serif text-xl italic leading-relaxed md:text-2xl">
            “If you’re building the school founders wish existed, you need
            someone who already thinks like a founder, writes like an editor and
            ships like an engineer. That’s the bet I’m making with this page.”
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-signal text-ink">
              <span className="text-sm font-black">→</span>
            </span>
            <a
              href="mailto:odoifiifi@gmail.com?subject=Small%20Giants%20—%20Content%20%26%20Growth%20Associate"
              className="text-sm font-semibold text-paper transition-colors hover:text-signal"
            >
              Let’s build it for real
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
