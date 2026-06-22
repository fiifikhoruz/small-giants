/**
 * The SG monogram — an S nested inside a G, with the jaw in the lime accent.
 * Strokes use currentColor so the parent text color drives the mark.
 */
export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M76.04 28.15 A34 34 0 1 0 82.33 60.51"
        stroke="currentColor"
        strokeWidth="11"
        strokeLinecap="round"
      />
      <path
        d="M79 52 L61 52"
        stroke="#DDF247"
        strokeWidth="11"
        strokeLinecap="round"
      />
      <path
        d="M59.05 32.13 A13 13 0 1 0 47 50 A13 13 0 1 1 34.44 66.36"
        stroke="currentColor"
        strokeWidth="11"
        strokeLinecap="round"
      />
    </svg>
  );
}
