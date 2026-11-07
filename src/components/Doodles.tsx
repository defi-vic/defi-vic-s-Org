/**
 * Hand-drawn SVG doodles and sketch accents
 * Authentic wobbly lines, sketch arrows, bacteria cells, and notes.
 */

export function DoodleArrow({ className = "w-12 h-8 text-[#0E2A5C]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M5 25 C25 22, 45 32, 70 20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M52 14 C58 17, 68 19, 72 20 C68 25, 59 31, 55 35"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleCurvedArrow({ className = "w-16 h-12 text-[#D12828]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M10 50 C20 15, 60 10, 85 30"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M72 20 C78 24, 84 28, 86 32 C82 38, 74 44, 70 47"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleMicrobe({ className = "w-8 h-8 text-[#0000FF]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Rod bacteria / bacillus with flagella */}
      <rect
        x="18"
        y="12"
        width="24"
        height="36"
        rx="12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeDasharray="1 0"
      />
      {/* Inside detail */}
      <circle cx="30" cy="22" r="2.5" fill="currentColor" />
      <circle cx="28" cy="34" r="3" fill="currentColor" />
      {/* Flagella */}
      <path d="M30 48 C32 54, 28 58, 32 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 47 C22 53, 18 55, 20 58" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M36 47 C38 52, 42 56, 40 59" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 20 C12 18, 8 22, 5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M42 28 C48 30, 52 26, 56 29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleFlask({ className = "w-8 h-8 text-[#D12828]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Flask rim */}
      <path d="M24 10 L36 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Neck */}
      <path d="M26 10 L26 22 L14 46 C12 50, 16 54, 20 54 L40 54 C44 54, 48 50, 46 46 L34 22 L34 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Liquid line */}
      <path d="M19 39 Q30 36 41 39" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Bubbles */}
      <circle cx="27" cy="46" r="2" fill="currentColor" />
      <circle cx="34" cy="44" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function DoodleUnderline({ className = "w-full h-3 text-[#D12828]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="none">
      <path
        d="M2 10 C50 4, 120 14, 198 8"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleStar({ className = "w-6 h-6 text-[#333333]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M20 4 L23 15 L34 15 L25 22 L28 33 L20 26 L12 33 L15 22 L6 15 L17 15 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleSparkle({ className = "w-6 h-6 text-[#D12828]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M20 5 L20 35 M5 20 L35 20 M10 10 L30 30 M10 30 L30 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleCoffeeStain({ className = "w-28 h-28 text-[#b88d57]/20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="5" strokeDasharray="30 8 15 10 40 6" />
      <circle cx="51" cy="49" r="37" stroke="currentColor" strokeWidth="1.5" strokeDasharray="20 12" />
    </svg>
  );
}
