"use client";

import { useSyncExternalStore } from "react";

let cachedResult: boolean | null = null;

function detectWebgl2(): boolean {
  if (cachedResult !== null) return cachedResult;

  try {
    const canvas = document.createElement("canvas");
    cachedResult = Boolean(canvas.getContext("webgl2"));
  } catch {
    cachedResult = false;
  }

  return cachedResult;
}

function subscribe(): () => void {
  // WebGL availability cannot change over the page's lifetime, so there is
  // nothing to subscribe to — this satisfies useSyncExternalStore's contract.
  return () => {};
}

function getServerSnapshot(): boolean | null {
  return null;
}

/** Returns `null` while detection is pending (SSR-safe), then a boolean. */
export function useIsWebglAvailable(): boolean | null {
  return useSyncExternalStore(subscribe, detectWebgl2, getServerSnapshot);
}
