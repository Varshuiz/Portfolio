import { createElement, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export type AnimatedLettersProps = {
  as?: keyof JSX.IntrinsicElements;
  text: string;
  variant: "hero" | "section";
  className?: string;
  letterClassName?: string;
};

/**
 * Letter “explosion” + scroll reveals — GSAP patterns from
 * [Bettina’s letter tutorial](https://medium.com/@bettinasosarohl/letter-explosion-killer-text-animation-with-gsap-react-tutorial-53a4247bcbf3).
 */
export function AnimatedLetters({
  as: Tag = "span",
  text,
  variant,
  className = "",
  letterClassName = "",
}: AnimatedLettersProps) {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const letters = root.querySelectorAll<HTMLElement>(".js-letter");

    if (prefersReducedMotion()) {
      gsap.set(letters, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotateZ: 0,
        rotateX: 0,
        filter: "none",
        clearProps: "all",
      });
      return;
    }

    const ctx = gsap.context(() => {
      if (variant === "hero") {
        gsap.fromTo(
          letters,
          {
            opacity: 0,
            scale: 0,
            filter: "blur(14px)",
            x: () => gsap.utils.random(-110, 110),
            y: () => gsap.utils.random(-95, 95),
            rotateZ: () => gsap.utils.random(-55, 55),
          },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            x: 0,
            y: 0,
            rotateZ: 0,
            duration: 1.2,
            stagger: {
              each: 0.02,
              from: "random",
            },
            ease: "expo.out",
            delay: 0.08,
          }
        );
      } else {
        gsap.fromTo(
          letters,
          {
            opacity: 0,
            y: 64,
            rotateX: -92,
            transformOrigin: "50% 100%",
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.78,
            stagger: {
              each: 0.028,
              from: "random",
            },
            ease: "back.out(1.55)",
            scrollTrigger: {
              trigger: root,
              start: "top 86%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, root);

    return () => ctx.revert();
  }, [text, variant]);

  const chars = [...text].map((ch, i) => (
    <span className={`js-letter ${letterClassName}`.trim()} key={`${i}-${ch}`}>
      {ch === " " ? "\u00a0" : ch}
    </span>
  ));

  return createElement(
    Tag,
    {
      ref: rootRef,
      className,
    },
    chars
  );
}
