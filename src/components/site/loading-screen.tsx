import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const WORD = ["S", "K", "Y", "•", "E", "R", "P"];

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setProgress(100);
      const t = setTimeout(() => setDone(true), 400);
      return () => clearTimeout(t);
    }
    let frame = 0;
    const start = performance.now();
    const total = 2400;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / total);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) frame = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 450);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduce]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[120] flex flex-col items-center justify-center bg-white"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative flex items-center justify-center px-6">
            {/* Wordmark — letters reveal from a clipped baseline, staggered from centre. */}
            <div className="relative flex items-end">
              {WORD.map((ch, i) => {
                const fromCenter = Math.abs(i - (WORD.length - 1) / 2);
                return (
                  <span key={i} className="overflow-hidden">
                    <motion.span
                      className={`block font-display text-5xl font-extrabold leading-[0.9] tracking-tight text-neutral-900 sm:text-7xl ${
                        ch === "•" ? "px-2 text-[0.55em] sm:px-3" : ""
                      }`}
                      initial={{ y: "110%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.15 + (2.5 - fromCenter) * 0.08,
                      }}
                    >
                      {ch}
                    </motion.span>
                  </span>
                );
              })}
            </div>

            {/* Hand-drawn sketch arc sweeping across the wordmark. */}
            <svg
              className="pointer-events-none absolute left-1/2 top-1/2 h-[240px] w-[760px] max-w-[95vw] -translate-x-1/2 -translate-y-1/2"
              viewBox="0 0 760 240"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <motion.path
                d="M30 205 C 210 55, 470 35, 730 130"
                stroke="#9a9a9a"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.3, ease: [0.65, 0, 0.35, 1], delay: 0.4 }}
              />
            </svg>
          </div>

          {/* Counter */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <span className="font-display text-sm font-semibold tabular-nums tracking-widest text-neutral-900">
              {progress.toString().padStart(2, "0")}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
