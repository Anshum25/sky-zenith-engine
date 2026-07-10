import { motion, useReducedMotion } from "motion/react";

const orbitLabels = [
  { text: "AI Copilot", angle: -90 },
  { text: "Automation", angle: 0 },
  { text: "Real-time BI", angle: 90 },
  { text: "One Platform", angle: 180 },
];

/**
 * cybercrest.com-style hero centerpiece: a slowly rotating 3D-feel logo mark
 * inside a gradient orbital ring, with a glowing dot travelling the orbit and
 * capability labels pinned around the circle.
 */
export function OrbitLogo() {
  const reduce = useReducedMotion();
  const R = 200; // orbit radius in px (matches viewBox center at 250)

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* Ambient glow behind the mark */}
      <div className="absolute inset-[18%] rounded-full bg-brand/20 blur-3xl" />

      {/* Orbit ring + travelling dot */}
      <svg
        viewBox="0 0 500 500"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="orbit-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.9" />
            <stop offset="50%" stopColor="var(--cyan)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--brand)" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        <circle
          cx="250"
          cy="250"
          r={R}
          fill="none"
          stroke="var(--border)"
          strokeWidth="1"
          opacity="0.5"
        />
        <circle
          cx="250"
          cy="250"
          r={R}
          fill="none"
          stroke="url(#orbit-ring)"
          strokeWidth="2"
          strokeDasharray="6 10"
          strokeLinecap="round"
        />
        <circle
          cx="250"
          cy="250"
          r={R * 0.72}
          fill="none"
          stroke="var(--border)"
          strokeWidth="1"
          strokeDasharray="2 8"
          opacity="0.4"
        />

        {/* Glowing dot rotating around the outer orbit */}
        <motion.g
          style={{ originX: "250px", originY: "250px" }}
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 14, ease: "linear", repeat: Infinity }}
        >
          <circle cx="250" cy={250 - R} r="6" fill="var(--brand)" />
          <circle cx="250" cy={250 - R} r="12" fill="var(--brand)" opacity="0.25" />
        </motion.g>

        {/* Secondary counter-rotating dot on the inner orbit */}
        <motion.g
          style={{ originX: "250px", originY: "250px" }}
          animate={reduce ? undefined : { rotate: -360 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          <circle cx="250" cy={250 - R * 0.72} r="4" fill="var(--cyan)" />
        </motion.g>
      </svg>

      {/* Orbit labels */}
      {orbitLabels.map((l) => {
        const rad = (l.angle * Math.PI) / 180;
        const pct = (R / 500) * 100;
        const left = 50 + Math.cos(rad) * pct;
        const top = 50 + Math.sin(rad) * pct;
        return (
          <span
            key={l.text}
            className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-border/60 bg-card/70 px-2.5 py-1 text-[11px] font-semibold text-muted-foreground backdrop-blur"
            style={{ left: `${left}%`, top: `${top}%` }}
          >
            {l.text}
          </span>
        );
      })}

      {/* Rotating 3D-feel logo mark in the center */}
      <div className="absolute inset-0 grid place-items-center [perspective:1200px]">
        <motion.div
          className="[transform-style:preserve-3d]"
          animate={reduce ? undefined : { rotateY: 360 }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
        >
          <svg viewBox="0 0 40 40" className="h-40 w-40 drop-shadow-[0_18px_40px_rgba(0,0,0,0.35)] sm:h-48 sm:w-48">
            <defs>
              <linearGradient id="orbit-mark" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="oklch(0.68 0.16 262)" />
                <stop offset="55%" stopColor="oklch(0.78 0.14 205)" />
                <stop offset="100%" stopColor="oklch(0.68 0.2 300)" />
              </linearGradient>
            </defs>
            <path d="M20 3 L34 11 V29 L20 37 L6 29 V11 Z" fill="url(#orbit-mark)" opacity="0.18" />
            <path
              d="M20 3 L34 11 V29 L20 37 L6 29 V11 Z"
              fill="none"
              stroke="url(#orbit-mark)"
              strokeWidth="1.4"
            />
            <path
              d="M13 24 L18 18 L23 22 L28 14"
              fill="none"
              stroke="url(#orbit-mark)"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
