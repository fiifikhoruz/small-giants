"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { agents } from "@/lib/content";
import { EASE, fadeUp, viewportOnce } from "@/lib/motion";
import { useIsCompact } from "@/lib/useMediaQuery";
import SectionLabel from "@/components/ui/SectionLabel";

/**
 * Section 6 — The AI Layer.
 * A constellation of agents arranged around a central "Founder" hub. Edges
 * carry animated particles to show information flowing between them. Selecting
 * an agent surfaces what it does. AI-native thinking, made visible.
 */

// node positions in a 100x100 viewBox; hub at centre.
const HUB = { x: 50, y: 50 };
const positions = [
  { x: 50, y: 12 }, // research (top)
  { x: 86, y: 38 }, // content (upper right)
  { x: 72, y: 84 }, // repurposing (lower right)
  { x: 28, y: 84 }, // knowledge (lower left)
  { x: 14, y: 38 }, // analytics (upper left)
];

export default function AILayer() {
  const [active, setActive] = useState<number | null>(null);
  // Below lg we swap the constellation for a vertical flow and switch off the
  // looping particle animations entirely.
  const compact = useIsCompact();

  return (
    <section
      id="ai-layer"
      className="grain relative overflow-hidden border-t border-white/10 bg-ink py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[40vh] w-[40vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] blur-[70px] lg:h-[55vh] lg:w-[55vh] lg:blur-[120px]"
        style={{ background: "#E8FF59" }}
      />

      <div className="edge relative">
        <SectionLabel index="07" label="The AI Layer" />
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="max-w-[15ch] text-display font-bold leading-[0.96] text-balance"
          >
            Five agents. One learning loop.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="max-w-md text-lg leading-relaxed text-mute"
          >
            AI doesn’t make the editorial calls. It removes everything that used
            to sit between a founder’s question and a useful answer, so the
            humans spend their time on judgement and taste.
          </motion.p>
        </div>
      </div>

      <div className="edge relative mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* diagram — desktop / large screens only */}
        <div className="relative mx-auto hidden aspect-square w-full max-w-[540px] lg:block">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
            {positions.map((p, i) => {
              const isOn = active === null || active === i;
              return (
                <g key={i}>
                  <line
                    x1={HUB.x}
                    y1={HUB.y}
                    x2={p.x}
                    y2={p.y}
                    stroke={active === i ? "#E8FF59" : "rgba(255,255,255,0.12)"}
                    strokeWidth={active === i ? 0.6 : 0.35}
                    style={{ transition: "stroke 0.3s ease" }}
                  />
                  {/* flowing particles — desktop only */}
                  {isOn && !compact && (
                    <>
                      <FlowDot from={HUB} to={p} delay={i * 0.5} />
                      <FlowDot from={p} to={HUB} delay={i * 0.5 + 1.4} reverse />
                    </>
                  )}
                </g>
              );
            })}
          </svg>

          {/* hub */}
          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="grid h-24 w-24 place-items-center rounded-full border border-signal/40 bg-ink-800 text-center md:h-28 md:w-28"
            >
              <span>
                <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-signal">
                  Founder
                </span>
                <span className="mt-0.5 block text-xs font-semibold text-paper">
                  learns faster
                </span>
              </span>
            </motion.div>
          </div>

          {/* agent nodes */}
          {agents.map((agent, i) => {
            const p = positions[i];
            const isActive = active === i;
            return (
              <button
                key={agent.id}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(isActive ? null : i)}
                className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className={`flex flex-col items-center gap-1 rounded-xl border px-3 py-2 backdrop-blur transition-colors duration-300 ${
                    isActive
                      ? "border-signal bg-signal text-ink"
                      : "border-white/15 bg-ink-800/80 text-paper hover:border-white/40"
                  }`}
                >
                  <span className="text-[11px] font-semibold leading-none">
                    {agent.name.replace(" Agent", "")}
                  </span>
                  <span
                    className={`text-[9px] uppercase tracking-wide ${
                      isActive ? "text-ink/70" : "text-mute"
                    }`}
                  >
                    Agent
                  </span>
                </motion.span>
              </button>
            );
          })}
        </div>

        {/* detail / list — desktop (paired with the constellation) */}
        <div className="hidden flex-col gap-3 lg:flex">
          {agents.map((agent, i) => {
            const isActive = active === i;
            return (
              <motion.button
                key={agent.id}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(isActive ? null : i)}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
                className={`overflow-hidden rounded-xl border p-5 text-left transition-colors duration-300 ${
                  isActive
                    ? "border-signal/50 bg-ink-800"
                    : "border-white/10 bg-ink-800/40 hover:border-white/25"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        isActive ? "bg-signal" : "bg-mute-dim"
                      }`}
                    />
                    <span className="font-semibold">{agent.name}</span>
                  </div>
                  <span className="text-xs text-mute">{agent.role}</span>
                </div>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="mt-3 text-[15px] leading-relaxed text-mute"
                    >
                      {agent.detail}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
          <p className="mt-2 px-1 text-xs text-mute-dim">
            Hover or tap an agent to trace its role in the loop.
          </p>
        </div>

        {/* Dedicated mobile / tablet vertical flow */}
        <ol className="flex flex-col lg:hidden">
          {agents.map((agent, i) => (
            <li key={agent.id} className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="rounded-xl border border-white/10 bg-ink-800 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-signal/40 font-mono text-[11px] text-signal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-semibold">{agent.name}</span>
                  </div>
                  <span className="shrink-0 text-right text-[11px] text-mute">
                    {agent.role}
                  </span>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-mute">
                  {agent.detail}
                </p>
              </motion.div>
              {i < agents.length - 1 && (
                <span
                  aria-hidden
                  className="my-2 self-center text-mute-dim"
                >
                  ↓
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FlowDot({
  from,
  to,
  delay,
  reverse,
}: {
  from: { x: number; y: number };
  to: { x: number; y: number };
  delay: number;
  reverse?: boolean;
}) {
  return (
    <motion.circle
      r={0.9}
      fill={reverse ? "rgba(255,255,255,0.5)" : "#E8FF59"}
      initial={{ cx: from.x, cy: from.y, opacity: 0 }}
      animate={{
        cx: [from.x, to.x],
        cy: [from.y, to.y],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 2.2,
        delay,
        repeat: Infinity,
        repeatDelay: 1.4,
        ease: "easeInOut",
      }}
    />
  );
}
