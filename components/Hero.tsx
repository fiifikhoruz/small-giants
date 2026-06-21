"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { hero, stats } from "@/lib/content";
import { EASE } from "@/lib/motion";
import AnimatedStat from "@/components/ui/AnimatedStat";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  // Scroll-linked: as the hero leaves, headline rises + fades, settling the
  // narrative into the sections below.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yHead = useTransform(scrollYProgress, [0, 1], ["0%", "-32%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const ghostY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  const lineWords = hero.lines.map((l) => l.split(" "));
  let wordCounter = 0;

  return (
    <section
      id="top"
      ref={ref}
      className="grain relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink pt-24"
    >
      {/* Oversized ghost backdrop word */}
      <motion.span
        aria-hidden
        style={{ y: ghostY }}
        className="text-outline pointer-events-none absolute -right-4 top-[14%] select-none text-[26vw] font-black leading-none md:top-[8%]"
      >
        SG
      </motion.span>

      {/* Radial glow, single accent, very restrained */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full opacity-[0.07] blur-[120px]"
        style={{ background: "#E8FF59" }}
      />

      <motion.div
        style={{ y: yHead, opacity, scale }}
        className="edge relative z-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-mute"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          A media &amp; education company for entrepreneurs
        </motion.p>

        <h1 className="text-hero font-black uppercase">
          {lineWords.map((words, li) => (
            <span key={li} className="block overflow-hidden">
              <span className="flex flex-wrap gap-x-[0.25em]">
                {words.map((w) => {
                  const delay = 0.3 + wordCounter * 0.08;
                  wordCounter += 1;
                  const isLast = li === lineWords.length - 1;
                  return (
                    <motion.span
                      key={w + wordCounter}
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.9, ease: EASE, delay }}
                      className={`inline-block ${isLast ? "text-signal" : ""}`}
                    >
                      {w}
                    </motion.span>
                  );
                })}
              </span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.9 }}
          className="mt-9 max-w-xl"
        >
          <p className="text-xl font-medium text-paper md:text-2xl">
            {hero.sub}
          </p>
          <p className="mt-3 text-base leading-relaxed text-mute md:text-lg">
            {hero.body}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 1.05 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#why"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-signal px-7 py-3.5 text-[15px] font-semibold text-ink transition-transform duration-300 ease-premium hover:scale-[1.03]"
          >
            {hero.primaryCta}
            <span className="transition-transform duration-300 group-hover:translate-y-0.5">
              ↓
            </span>
          </a>
          <a
            href="#join"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-[15px] font-medium text-paper transition-colors hover:border-white/40"
          >
            {hero.secondaryCta}
          </a>
        </motion.div>
      </motion.div>

      {/* Stat strip pinned to lower hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 1.3 }}
        style={{ opacity }}
        className="edge relative z-10 mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 md:mt-20 md:grid-cols-4"
      >
        {stats.map((s) => (
          <AnimatedStat key={s.label} {...s} />
        ))}
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-mute-dim"
        >
          Scroll
        </motion.div>
      </motion.div>
    </section>
  );
}
