"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

type Props = {
  index: string;
  label: string;
  light?: boolean;
};

/** Consistent "01 / Section Name" eyebrow used to open every section. */
export default function SectionLabel({ index, label, light }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="flex items-center gap-3"
    >
      <span
        className={`font-mono text-xs ${light ? "text-ink/50" : "text-signal"}`}
      >
        {index}
      </span>
      <span
        className={`h-px w-8 ${light ? "bg-ink/20" : "bg-white/20"}`}
        aria-hidden
      />
      <span
        className={`font-mono text-xs uppercase tracking-[0.25em] ${
          light ? "text-ink/60" : "text-mute"
        }`}
      >
        {label}
      </span>
    </motion.div>
  );
}
