"use client";

import { useEffect, useState } from "react";

/**
 * SSR-safe media query hook. Returns false on the server and first paint,
 * then corrects after mount — so desktop (the default) never flashes the
 * mobile layout, and we avoid hydration mismatches.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

/** True below Tailwind's md breakpoint (phones). */
export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 767px)");
}

/** True below lg (phones + small tablets) — used for the AI constellation. */
export function useIsCompact(): boolean {
  return useMediaQuery("(max-width: 1023px)");
}
