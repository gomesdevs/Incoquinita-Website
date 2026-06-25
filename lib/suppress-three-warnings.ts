"use client";

if (typeof window !== "undefined") {
  const originalWarn = console.warn;
  console.warn = function (...args: unknown[]) {
    const message = typeof args[0] === "string" ? args[0] : "";
    // Suppress THREE.Clock deprecation warning — upstream issue in three.js 0.184+,
    // used internally by @react-three/fiber 9.x. Fixed in R3F 10.x (major bump).
    if (message.includes("THREE.Clock") && message.includes("deprecated")) {
      return;
    }
    originalWarn.apply(console, args);
  };
}

export {};
