"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { flywheel } from "@/lib/content";
import { EASE, fadeUp, viewportOnce } from "@/lib/motion";
import SectionLabel from "@/components/ui/SectionLabel";

/**
 * Section 3 — The Content Engine flywheel.
 * An interactive circular loop. Nodes sit on a ring; selecting one expands its
 * detail in the hub. A slowly rotating dashed ring conveys perpetual motion —
 * the whole point being that the system compounds.
 */
export default function ContentEngine() {
  const [active, setActive] = useState(0);
  const n = flywheel.length;
  const R = 42; // % radius within the square stage

  return (
    <section
      id="engine"
      className="relative overflow-hidden border-t border-white/10 bg-ink py-24 md:py-32"
    >
      <div className="edge">
        <SectionLabel index="03" label="The Content Engine" />
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="max-w-[16ch] text-display font-bold leading-[0.96] text-balance"
          >
            A media company that compounds.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="max-w-md text-lg leading-relaxed text-mute"
          >
            Most content gets made once and forgotten. Ours feeds a loop, where
            every step makes the next one cheaper, sharper and more valuable.
            Tap a stage to see how the wheel turns.
          </motion.p>
        </div>
      </div>

      <div className="edge mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Stage */}
        <div className="relative mx-auto aspect-square w-full max-w-[520px]">
          {/* rotating dashed ring */}
          <motion.div
            aria-hidden
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[8%] rounded-full border border-dashed border-white/10"
          />
          <motion.div
            aria-hidden
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[20%] rounded-full border border-white/[0.06]"
          />

          {/* connecting SVG loop */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            <circle
              cx="50"
              cy="50"
              r={R}
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="0.4"
            />
            <motion.circle
              cx="50"
              cy="50"
              r={R}
              fill="none"
              stroke="#E8FF59"
              strokeWidth="0.6"
              strokeDasharray="4 6"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.7 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: EASE }}
            />
          </svg>

          {/* hub */}
          <div className="absolute left-1/2 top-1/2 z-20 w-[44%] -translate-x-1/2 -translate-y-1/2 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-signal">
                  Stage {String(active + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 text-xl font-bold tracking-tight">
                  {flywheel[active].label}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* nodes */}
          {flywheel.map((node, i) => {
            const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + R * Math.cos(angle);
            const y = 50 + R * Math.sin(angle);
            const isActive = i === active;
            return (
              <button
                key={node.id}
                onClick={() => setActive(i)}
                aria-label={node.label}
                className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <motion.span
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur transition-colors duration-300 ${
                    isActive
                      ? "border-signal bg-signal text-ink"
                      : "border-white/15 bg-ink-800/80 text-mute hover:border-white/40 hover:text-paper"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isActive ? "bg-ink" : "bg-signal"
                    }`}
                  />
                  {node.label}
                </motion.span>
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        <div className="lg:pl-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-signal">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
                  {flywheel[active].label}
                </h3>
              </div>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-mute">
                {flywheel[active].detail}
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm text-mute-dim">
                <span>Next</span>
                <span className="h-px w-6 bg-white/20" />
                <button
                  onClick={() => setActive((active + 1) % n)}
                  className="font-medium text-paper transition-colors hover:text-signal"
                >
                  {flywheel[(active + 1) % n].label} →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* loop legend */}
          <div className="mt-10 flex flex-wrap gap-x-2 gap-y-1 border-t border-white/10 pt-6 text-xs text-mute-dim">
            {flywheel.map((s, i) => (
              <span key={s.id} className="flex items-center gap-2">
                <button
                  onClick={() => setActive(i)}
                  className={`transition-colors ${
                    i === active ? "text-signal" : "hover:text-paper"
                  }`}
                >
                  {s.label}
                </button>
                {i < n - 1 && <span className="text-mute-dim">→</span>}
              </span>
            ))}
            <span className="text-mute-dim">↺</span>
          </div>
        </div>
      </div>
    </section>
  );
}
