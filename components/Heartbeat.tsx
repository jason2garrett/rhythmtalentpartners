"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Easter egg: enter the Konami code (↑ ↑ ↓ ↓ ← → ← → B A) anywhere on the site
// and the whole page finds its rhythm — a proper cardiac lub-dub. We are, after
// all, in the business of pulses. There's a styled hello in the console too, for
// anyone curious enough to open the hood. Nothing here ships data or blocks UX.
// ─────────────────────────────────────────────────────────────────────────────

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function Heartbeat() {
  const [alive, setAlive] = useState(false);

  useEffect(() => {
    // A quiet hello for the spelunkers.
    console.log(
      "%c🫀 Rhythm Talent Partners",
      "font:600 16px/1.4 system-ui;color:#a855e0",
      "\nVitals look strong. Try the Konami code. ↑↑↓↓←→←→BA",
    );

    let progress = 0;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    function onKey(e: KeyboardEvent) {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      progress = key === KONAMI[progress] ? progress + 1 : key === KONAMI[0] ? 1 : 0;
      if (progress < KONAMI.length) return;
      progress = 0;

      setAlive(true);
      window.setTimeout(() => setAlive(false), 4200);

      if (!reduceMotion) {
        // A real heartbeat is a lub-dub: a small beat, then a bigger one.
        document.body.animate(
          [
            { transform: "scale(1)" },
            { transform: "scale(1.012)", offset: 0.12 },
            { transform: "scale(1)", offset: 0.24 },
            { transform: "scale(1.03)", offset: 0.4 },
            { transform: "scale(1)", offset: 0.6 },
            { transform: "scale(1)" },
          ],
          { duration: 850, iterations: 4, easing: "ease-in-out" },
        );
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <AnimatePresence>
      {alive && (
        <motion.div
          role="status"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "fixed",
            left: "50%",
            bottom: "2rem",
            zIndex: 9999,
            transform: "translateX(-50%)",
          }}
          className="max-w-[22rem] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0f1530]/90 px-5 py-4 text-center shadow-2xl backdrop-blur"
        >
          <div className="bg-gradient-to-r from-[#2ba4e8] via-[#a855e0] to-[#f4bd3a] bg-clip-text text-sm font-semibold text-transparent">
            🫀 70 BPM and hiring.
          </div>
          <p className="mt-1 text-xs leading-relaxed text-slate-300">
            You found our pulse. Strong rhythm detected — we should talk.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
