"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "@/lib/content";
import { EASE } from "@/lib/motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-ink/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="edge flex h-16 items-center justify-between md:h-20">
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-[7px] bg-signal text-ink">
              <span className="text-[15px] font-black leading-none">S</span>
            </span>
            <span className="text-[15px] font-semibold tracking-tight">
              Small Giants
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-[13.5px] text-mute transition-colors hover:text-paper"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-signal transition-all duration-300 ease-premium group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#join"
              className="hidden rounded-full bg-paper px-4 py-2 text-[13px] font-semibold text-ink transition-transform duration-300 ease-premium hover:scale-[1.03] sm:inline-block"
            >
              Join the Journey
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 lg:hidden"
            >
              <span className="flex flex-col gap-[5px]">
                <span
                  className={`h-px w-4 bg-paper transition-transform ${
                    open ? "translate-y-[3px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-px w-4 bg-paper transition-transform ${
                    open ? "-translate-y-[3px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden border-b border-white/10 bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <div className="edge flex flex-col gap-1 py-5">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-lg font-medium text-paper/90"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
