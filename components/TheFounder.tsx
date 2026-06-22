"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { founderThesis } from "@/lib/content";
import { EASE, fadeUp, stagger, viewportOnce } from "@/lib/motion";
import SectionLabel from "@/components/ui/SectionLabel";

/**
 * Section 5 — The Founder.
 * Not a biography. The thesis behind Small Giants: how a journey through
 * culture, community and experiences led to building a school for founders.
 * Three pillars, then an animated journey timeline whose spine fills on scroll.
 */
export default function TheFounder() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden border-t border-white/10 bg-ink py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-[50vh] w-[50vh] rounded-full opacity-[0.05] blur-[130px]"
        style={{ background: "#E8FF59" }}
      />

      <div className="edge relative">
        <SectionLabel index="05" label={founderThesis.eyebrow} />

        {/* thesis */}
        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="text-display font-bold leading-[0.96] text-balance"
            >
              {founderThesis.title}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-6 font-serif text-2xl italic leading-snug text-paper/85"
            >
              {founderThesis.lead}
            </motion.p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-5"
          >
            {founderThesis.body.map((para) => (
              <motion.p
                key={para.slice(0, 24)}
                variants={fadeUp}
                className="max-w-xl text-lg leading-relaxed text-mute"
              >
                {para}
              </motion.p>
            ))}
          </motion.div>
        </div>

        {/* pillars */}
        <div className="mt-20">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-mute-dim">
            The ideas that built this
          </p>
          <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
            {founderThesis.pillars.map((pillar, i) => (
              <motion.div
                key={pillar.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
                className="group relative bg-ink p-8 transition-colors duration-300 hover:bg-ink-800 md:p-10"
              >
                <span className="font-mono text-xs text-signal">
                  {String(i + 1).padStart(2, "0")} · {pillar.tag}
                </span>
                <h3 className="mt-5 text-title font-bold tracking-tight">
                  {pillar.name}
                </h3>
                <span className="mt-4 block h-px w-10 bg-signal transition-all duration-500 ease-premium group-hover:w-20" />
                <p className="mt-5 text-[15px] leading-relaxed text-mute">
                  {pillar.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* journey timeline */}
        <JourneyTimeline />
      </div>
    </section>
  );
}

function JourneyTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 65%"],
  });
  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const journey = founderThesis.journey;

  return (
    <div className="mt-20">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-mute-dim">
        How the journey compounds
      </p>

      <div ref={ref} className="relative mt-8">
        {/* spine */}
        <div className="absolute left-[7px] top-1 h-full w-px bg-white/10 md:left-1/2" />
        <motion.div
          style={{ height: fill }}
          className="absolute left-[7px] top-1 w-px bg-signal md:left-1/2"
        />

        <div className="flex flex-col gap-10 md:gap-4">
          {journey.map((step, i) => {
            const onLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.node}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: EASE }}
                className={`relative grid grid-cols-1 items-center gap-x-12 pl-9 md:grid-cols-2 md:pl-0 ${
                  onLeft ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                {/* node */}
                <span className="absolute left-0 top-2 z-10 h-3.5 w-3.5 -translate-x-0 rounded-full border-2 border-signal bg-ink md:left-1/2 md:-translate-x-1/2" />

                <div
                  className={`${
                    onLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div
                    className={`inline-flex items-baseline gap-3 ${
                      onLeft ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <span className="font-mono text-xs text-mute-dim">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="text-2xl font-bold tracking-tight md:text-3xl">
                      {step.node}
                    </h4>
                  </div>
                  <p
                    className={`mt-2 max-w-sm text-[15px] leading-relaxed text-mute ${
                      onLeft ? "md:ml-auto" : ""
                    }`}
                  >
                    {step.note}
                  </p>
                </div>

                {/* spacer for the empty side on desktop */}
                <div className="hidden md:block" aria-hidden />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* closing line */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto mt-16 max-w-2xl text-center font-serif text-xl italic leading-relaxed text-paper/80 md:text-2xl"
      >
        Culture became community. Community became belonging. Belonging made
        learning matter. Learning became building. And building, followed all
        the way, is exactly what Small Giants is for.
      </motion.p>
    </div>
  );
}
