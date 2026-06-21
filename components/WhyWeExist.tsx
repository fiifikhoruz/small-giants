"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { originPanels } from "@/lib/content";
import { EASE } from "@/lib/motion";

/**
 * Section 1 — Why Small Giants Exists.
 * A pinned, scroll-linked storytelling sequence. The outer wrapper is tall
 * (one screen per panel); an inner sticky stage cross-fades the panels as the
 * user scrolls, giving a snap-like cadence without hijacking native scroll.
 */
export default function WhyWeExist() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const count = originPanels.length;

  return (
    <section id="why" ref={ref} className="relative bg-ink" style={{ height: `${count * 100}vh` }}>
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        {/* progress rail */}
        <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3 md:flex">
          {originPanels.map((_, i) => (
            <Tick key={i} i={i} count={count} progress={scrollYProgress} />
          ))}
        </div>

        <div className="absolute left-6 top-24 z-20 font-mono text-xs uppercase tracking-[0.25em] text-mute md:left-10 lg:left-16">
          Why we exist
        </div>

        {originPanels.map((panel, i) => (
          <Panel
            key={panel.index}
            i={i}
            count={count}
            progress={scrollYProgress}
            panel={panel}
          />
        ))}
      </div>
    </section>
  );
}

function Panel({
  i,
  count,
  progress,
  panel,
}: {
  i: number;
  count: number;
  progress: MotionValue<number>;
  panel: (typeof originPanels)[number];
}) {
  const seg = 1 / count;
  const start = i * seg;
  const mid = start + seg / 2;
  const end = start + seg;

  // Each panel fades and lifts through its window. The last panel holds.
  const isLast = i === count - 1;
  const opacity = useTransform(
    progress,
    isLast ? [start - seg * 0.4, mid, 1] : [start - seg * 0.4, mid, end],
    isLast ? [0, 1, 1] : [0, 1, 0]
  );
  const y = useTransform(
    progress,
    [start - seg * 0.4, mid, end],
    [60, 0, isLast ? 0 : -60]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="edge absolute inset-0 z-10 flex flex-col justify-center"
    >
      <span className="mb-6 font-mono text-sm text-signal">{panel.index}</span>
      <span className="mb-4 text-sm uppercase tracking-[0.25em] text-mute">
        {panel.kicker}
      </span>
      <h2 className="max-w-[14ch] text-display font-bold leading-[0.95] text-balance">
        {panel.headline}
      </h2>
      <p className="mt-7 max-w-xl text-lg leading-relaxed text-mute md:text-xl">
        {panel.body}
      </p>
    </motion.div>
  );
}

function Tick({
  i,
  count,
  progress,
}: {
  i: number;
  count: number;
  progress: MotionValue<number>;
}) {
  const seg = 1 / count;
  const active = useTransform(
    progress,
    [i * seg, i * seg + seg / 2, (i + 1) * seg],
    [0.2, 1, 0.2]
  );
  const scaleY = useTransform(
    progress,
    [i * seg, i * seg + seg / 2, (i + 1) * seg],
    [0.4, 1, 0.4]
  );
  return (
    <motion.span
      style={{ opacity: active, scaleY }}
      transition={{ ease: EASE }}
      className="h-7 w-px origin-center bg-signal"
    />
  );
}
