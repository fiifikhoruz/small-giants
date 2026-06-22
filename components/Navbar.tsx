"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "@/lib/content";
import { EASE } from "@/lib/motion";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll, close on Escape, and move focus into the drawer.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    closeBtnRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Return focus to the trigger when the drawer closes.
  const close = () => {
    setOpen(false);
    menuBtnRef.current?.focus();
  };

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
        <nav
          aria-label="Primary"
          className="edge flex h-16 items-center justify-between md:h-20"
        >
          <a
            href="#top"
            className="group flex items-center gap-2.5"
            aria-label="Small Giants — home"
          >
            <Logo className="h-8 w-8 text-paper" />
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
              className="hidden min-h-[44px] items-center rounded-full bg-paper px-5 text-[13px] font-semibold text-ink transition-transform duration-300 ease-premium hover:scale-[1.03] sm:inline-flex"
            >
              Join the Journey
            </a>
            <button
              ref={menuBtnRef}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 lg:hidden"
            >
              <span className="flex flex-col gap-[5px]">
                <span className="h-px w-4 bg-paper" />
                <span className="h-px w-4 bg-paper" />
                <span className="h-px w-4 bg-paper" />
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer + backdrop */}
      <AnimatePresence>
        {open && (
          <div className="lg:hidden">
            <motion.button
              key="backdrop"
              aria-label="Close menu"
              tabIndex={-1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              onClick={close}
              className="fixed inset-0 z-40 bg-ink/70 backdrop-blur-sm"
            />
            <motion.div
              key="drawer"
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: EASE }}
              className="fixed right-0 top-0 z-50 flex h-[100svh] w-[82%] max-w-sm flex-col border-l border-white/10 bg-ink-800 px-6 pb-8 pt-5"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2.5">
                  <Logo className="h-8 w-8 text-paper" />
                  <span className="text-[15px] font-semibold tracking-tight">
                    Small Giants
                  </span>
                </span>
                <button
                  ref={closeBtnRef}
                  aria-label="Close menu"
                  onClick={close}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-paper"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3 3l10 10M13 3L3 13"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <nav
                aria-label="Mobile"
                className="mt-8 flex flex-col"
              >
                {nav.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: EASE,
                      delay: 0.08 + i * 0.05,
                    }}
                    className="flex min-h-[52px] items-center justify-between border-b border-white/8 text-lg font-medium text-paper/90"
                  >
                    {item.label}
                    <span className="text-mute-dim">→</span>
                  </motion.a>
                ))}
              </nav>

              <a
                href="#join"
                onClick={close}
                className="mt-auto inline-flex min-h-[52px] items-center justify-center rounded-full bg-signal px-6 text-[15px] font-semibold text-ink"
              >
                Join the Journey
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
