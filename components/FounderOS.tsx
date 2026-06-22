"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { founderOS } from "@/lib/content";
import { EASE, fadeUp, viewportOnce } from "@/lib/motion";
import SectionLabel from "@/components/ui/SectionLabel";

/**
 * Section 2 — The Founder Operating System.
 * A sticky vertical card stack: each card pins beneath the previous one and
 * scales down slightly as the next arrives, so the topics literally stack up
 * into a "system".
 */
export default function FounderOS() {
  return (
    <section
      id="founder-os"
      className="relative border-t border-white/10 bg-ink py-24 md:py-32"
    >
      <div className="edge">
        <SectionLabel index="02" label="The Founder Operating System" />
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-6 max-w-[18ch] text-display font-bold leading-[0.96] text-balance"
        >
          The skills no degree teaches, in one stack.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-6 max-w-xl text-lg leading-relaxed text-mute"
        >
          Eight disciplines every founder ends up learning the hard way. We
          teach them on purpose, in the order they tend to bite.
        </motion.p>
      </div>

      {/* Desktop: sticky stacking cards */}
      <div className="edge mt-16">
        <div className="relative hidden flex-col gap-6 md:flex">
          {founderOS.map((card, i) => (
            <Card key={card.n} card={card} i={i} total={founderOS.length} />
          ))}
        </div>
      </div>

      {/* Mobile: horizontal, swipeable snap carousel */}
      <div className="mt-12 md:hidden">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scroll-padding-left:1.5rem]">
          {founderOS.map((card) => (
            <article
              key={card.n}
              className="flex w-[80vw] max-w-[20rem] shrink-0 snap-start flex-col rounded-2xl border border-white/10 bg-ink-800 p-6"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm text-signal">{card.n}</span>
                <span className="font-mono text-xs text-mute-dim">
                  / {String(founderOS.length).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-bold tracking-tight">
                {card.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-mute">
                {card.blurb}
              </p>
              <div className="mt-5 border-l border-white/10 pl-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-mute-dim">
                  Founder insight
                </p>
                <p className="mt-2 font-serif text-base italic leading-snug text-paper">
                  “{card.insight}”
                </p>
              </div>
            </article>
          ))}
          {/* trailing spacer so the last card can center */}
          <span aria-hidden className="w-2 shrink-0" />
        </div>
        <p className="edge mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-mute-dim">
          Swipe →
        </p>
      </div>
    </section>
  );
}

function Card({
  card,
  i,
  total,
}: {
  card: (typeof founderOS)[number];
  i: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });
  // As the card scrolls past the pin point, it recedes (scale + dim).
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0.35]);

  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: `${96 + i * 18}px` }}
    >
      <motion.article
        style={{ scale, opacity }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="group grid grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-ink-800 p-8 md:grid-cols-[auto_1fr_1.2fr] md:items-center md:gap-10 md:p-10"
      >
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-signal">{card.n}</span>
          <span className="font-mono text-xs text-mute-dim">
            / {String(total).padStart(2, "0")}
          </span>
        </div>

        <div>
          <h3 className="text-title font-bold tracking-tight">{card.title}</h3>
          <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-mute">
            {card.blurb}
          </p>
        </div>

        <div className="relative border-l border-white/10 pl-6">
          <span className="absolute -left-px top-0 h-8 w-px bg-signal transition-all duration-500 ease-premium group-hover:h-full" />
          <p className="text-[10px] uppercase tracking-[0.25em] text-mute-dim">
            Founder insight
          </p>
          <p className="mt-2 font-serif text-lg italic leading-snug text-paper">
            “{card.insight}”
          </p>
        </div>
      </motion.article>
    </div>
  );
}
