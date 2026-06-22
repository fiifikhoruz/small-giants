import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core brand palette — high-contrast editorial, near-black canvas
        ink: {
          DEFAULT: "#0A0A0B",
          800: "#121214",
          700: "#1A1A1D",
          600: "#26262B",
        },
        paper: "#F7F5F1", // warm off-white for inverted sections
        bone: "#E9E6DF",
        // Single accent — restrained, premium
        signal: {
          DEFAULT: "#E8FF59", // electric lime, used sparingly
          soft: "#C7DC4E",
        },
        mute: {
          DEFAULT: "#9A9AA3", // ~5.6:1 on ink — passes AA for body text
          dim: "#7E7E88", // ~4.6:1 on ink — passes AA for small labels
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "hero": ["clamp(2.35rem, 8.5vw, 9rem)", { lineHeight: "0.94", letterSpacing: "-0.03em" }],
        "display": ["clamp(1.85rem, 6vw, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.025em" }],
        "title": ["clamp(1.4rem, 3.5vw, 3rem)", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        edge: "1440px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-node": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        "pulse-node": "pulse-node 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
