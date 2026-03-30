import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type Props = {
  credential: string;
  tagline: string;
  location: string;
};

/** Credential + bio + location — fade after the name animation. */
export function HeroSubtext({ credential, tagline, location }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const root = rootRef.current;
    if (!root) return;
    const lines = root.querySelectorAll<HTMLElement>(".hero-line");
    gsap.fromTo(
      lines,
      { opacity: 0, y: 28, filter: "blur(8px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.85,
        stagger: 0.12,
        delay: 1.05,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div ref={rootRef} className="hero-subtext">
      <p className="hero-credential hero-line">
        <span className="eyebrow-dot" aria-hidden />
        {credential}
      </p>
      <p className="hero-tagline hero-line">{tagline}</p>
      <p className="hero-meta hero-line">{location}</p>
    </div>
  );
}
