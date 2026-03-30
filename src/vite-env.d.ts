/// <reference types="vite/client" />

import type { HTMLAttributes } from "react";

type ModelViewerProps = HTMLAttributes<HTMLElement> & {
  src?: string;
  alt?: string;
  autoplay?: boolean;
  "camera-controls"?: boolean;
  "touch-action"?: string;
  "shadow-intensity"?: string | number;
  exposure?: string | number;
  "environment-image"?: string;
  "interaction-prompt"?: string;
  "animation-name"?: string;
  "animation-crossfade-duration"?: string;
  "camera-orbit"?: string;
  "field-of-view"?: string;
  "min-camera-orbit"?: string;
  "max-camera-orbit"?: string;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerProps;
    }
  }
}

export {};
