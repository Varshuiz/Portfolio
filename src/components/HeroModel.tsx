import type { ModelViewerElement } from "@google/model-viewer";
import "@google/model-viewer";
import { useEffect, useRef, useState } from "react";
import { heroModel } from "../content";
import { HeroIllustration } from "./HeroIllustration";

const DRAG_HINT_STORAGE_KEY = "smriti-portfolio-hero-drag-hint-dismissed";

function DragHintGraphic() {
  return (
    <svg
      className="hero-drag-hint-graphic"
      viewBox="0 0 140 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M28 18h84M18 18l10-6v12l-10-6zm104 0l-10-6v12l10-6z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="70" cy="18" r="4" fill="currentColor" opacity="0.9" />
      <path
        d="M58 38c4-6 12-8 20-8s16 2 20 8v12c-2 4-6 6-10 6h-4l-2 18h-8l-2-14h-4c-4 0-8-2-10-6V38z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="rgba(255,255,255,0.08)"
      />
      <path
        d="M52 52c-6 2-10 8-10 14v6h56v-6c0-6-4-12-10-14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Skeletal animations (idle/breathing) run via `autoplay` + `play()` and continue while the user orbits with `camera-controls`.
 */
export function HeroModel() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const [showDragHint, setShowDragHint] = useState(() => {
    if (typeof window === "undefined") return true;
    try {
      return !localStorage.getItem(DRAG_HINT_STORAGE_KEY);
    } catch {
      return true;
    }
  });

  useEffect(() => {
    const root = wrapRef.current;
    const mv = root?.querySelector("model-viewer") as ModelViewerElement | null;
    if (!mv) return;

    const onErr = () => setFailed(true);

    const frameScene = async () => {
      try {
        await mv.updateFraming();
        mv.jumpCameraToGoal();
      } catch {
        /* ignore */
      }
    };

    const onLoad = () => {
      mv.autoplay = true;
      try {
        mv.play();
      } catch {
        /* no clips */
      }
      void frameScene();
    };

    mv.addEventListener("error", onErr);
    mv.addEventListener("load", onLoad);
    if (mv.loaded) {
      onLoad();
    }

    const ro = new ResizeObserver(() => {
      void frameScene();
    });
    ro.observe(mv);

    return () => {
      ro.disconnect();
      mv.removeEventListener("error", onErr);
      mv.removeEventListener("load", onLoad);
    };
  }, []);

  useEffect(() => {
    if (!showDragHint || failed) return;
    const mv = wrapRef.current?.querySelector("model-viewer");
    if (!mv) return;

    let dragging = false;
    let startX = 0;
    let startY = 0;

    const dismiss = () => {
      try {
        localStorage.setItem(DRAG_HINT_STORAGE_KEY, "1");
      } catch {
        /* private mode */
      }
      setShowDragHint(false);
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      dragging = true;
      startX = e.clientX;
      startY = e.clientY;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (dx * dx + dy * dy > 36) {
        dismiss();
        dragging = false;
      }
    };

    const endDrag = () => {
      dragging = false;
    };

    mv.addEventListener("pointerdown", onPointerDown);
    mv.addEventListener("pointermove", onPointerMove);
    mv.addEventListener("pointerup", endDrag);
    mv.addEventListener("pointercancel", endDrag);

    return () => {
      mv.removeEventListener("pointerdown", onPointerDown);
      mv.removeEventListener("pointermove", onPointerMove);
      mv.removeEventListener("pointerup", endDrag);
      mv.removeEventListener("pointercancel", endDrag);
    };
  }, [showDragHint, failed]);

  if (failed) {
    return (
      <div className="hero-model-fallback">
        <HeroIllustration />
        <p className="hero-model-hint">
          Add your character <code className="inline-code">.glb</code> to{" "}
          <code className="inline-code">public/models/avatar.glb</code>
        </p>
      </div>
    );
  }

  const anim = heroModel.animationName?.trim();
  const nameProps =
    anim && anim.length > 0
      ? ({ "animation-name": anim } as const)
      : ({} as Record<string, never>);

  return (
    <div className="hero-model-wrap" ref={wrapRef} data-lenis-prevent>
      <model-viewer
        className="hero-model-viewer"
        src={heroModel.src}
        alt="Interactive 3D portrait"
        {...{
          "camera-controls": true,
          "touch-action": "none",
          "shadow-intensity": "0.85",
          exposure: "1",
          "interaction-prompt": "none",
          autoplay: true,
          "animation-crossfade-duration": "0.35",
          /* Let model-viewer choose orbit/FOV; updateFraming() fits full body to the canvas without clipping. */
          ...nameProps,
        }}
        style={{ backgroundColor: "var(--hero-model-bg)", width: "100%", height: "100%", display: "block" }}
      />
      {showDragHint ? (
        <div className="hero-drag-hint" aria-hidden>
          <DragHintGraphic />
          <p className="hero-drag-hint-label">Drag to rotate model</p>
        </div>
      ) : null}
    </div>
  );
}
