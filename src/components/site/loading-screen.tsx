import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "./logo";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
};

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate particles only on the client to avoid SSR hydration mismatch.
  useEffect(() => {
    setParticles(
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 1.2,
        duration: 2 + Math.random() * 2.5,
      })),
    );
  }, []);

  useEffect(() => {
    let frame = 0;
    const start = performance.now();
    const total = 1600;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / total);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 350);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(16px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="grid-bg absolute inset-0 opacity-60" />
          <div
            className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl animate-aurora"
            style={{
              background:
                "conic-gradient(from 0deg, var(--brand), var(--cyan), var(--violet), var(--brand))",
            }}
          />

          {particles.map((p) => (
            <motion.span
              key={p.id}
              className="absolute rounded-full bg-brand"
              style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0.9, 0], y: [0, -40], scale: [0, 1, 0] }}
              transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          <div className="relative flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Logo className="scale-150" />
            </motion.div>

            <div className="flex flex-col items-center gap-3">
              <div className="h-1 w-56 overflow-hidden rounded-full bg-muted">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background:
                      "linear-gradient(90deg, var(--brand), var(--cyan), var(--violet))",
                  }}
                />
              </div>
              <div className="flex w-56 items-center justify-between text-xs font-medium text-muted-foreground">
                <span>Initializing platform</span>
                <span className="tabular-nums text-foreground">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
