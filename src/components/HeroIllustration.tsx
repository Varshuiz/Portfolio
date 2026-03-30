/** Decorative hero art — palette via CSS variables in index.css */
export function HeroIllustration() {
  return (
    <div className="hero-illustration">
      <svg
        className="hero-illustration-svg"
        viewBox="0 0 440 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect
          x="36"
          y="44"
          width="368"
          height="272"
          rx="28"
          fill="var(--hero-ill-panel)"
          stroke="var(--hero-ill-line)"
          strokeWidth="1.5"
        />
        <ellipse cx="292" cy="128" rx="118" ry="92" fill="var(--hero-ill-blob)" />
        <path
          d="M72 248c48-52 120-68 188-52 52 12 96 44 128 84"
          stroke="var(--hero-ill-line)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
        <circle cx="72" cy="248" r="9" fill="var(--hero-ill-accent)" />
        <circle cx="188" cy="220" r="7" fill="var(--hero-ill-bar)" />
        <circle cx="260" cy="196" r="7" fill="var(--hero-ill-accent)" />
        <circle cx="388" cy="280" r="9" fill="var(--hero-ill-bar)" />
        <g opacity="0.95">
          <rect x="96" y="176" width="34" height="112" rx="9" fill="var(--hero-ill-bar)" />
          <rect x="148" y="148" width="34" height="140" rx="9" fill="var(--hero-ill-bar)" opacity="0.85" />
          <rect x="200" y="164" width="34" height="124" rx="9" fill="var(--hero-ill-bar)" opacity="0.7" />
          <rect x="252" y="124" width="34" height="164" rx="9" fill="var(--hero-ill-bar)" />
        </g>
        <rect
          x="300"
          y="200"
          width="88"
          height="64"
          rx="12"
          stroke="var(--hero-ill-line)"
          strokeWidth="1.5"
          fill="var(--hero-ill-panel-2)"
        />
        <path
          d="M316 234h56M316 246h40M316 218h48"
          stroke="var(--hero-ill-accent)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.75"
        />
      </svg>
    </div>
  );
}
