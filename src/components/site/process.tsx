import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { SectionHeading } from "./reveal";
import { processSteps } from "@/lib/site-data";
import { fadeUp, viewportOnce } from "@/lib/motion";

const layout = [
  { side: "left", top: 12, x: 380 },
  { side: "right", top: 31, x: 620 },
  { side: "left", top: 50, x: 380 },
  { side: "right", top: 69, x: 620 },
  { side: "left", top: 88, x: 380 },
] as const;

const PATH_D =
  "M380 168 C 380 300, 620 300, 620 434 C 620 570, 380 570, 380 700 C 380 830, 620 830, 620 966 C 620 1100, 380 1100, 380 1232";

const nodes = [
  { x: 380, y: 168 },
  { x: 620, y: 434 },
  { x: 380, y: 700 },
  { x: 620, y: 966 },
  { x: 380, y: 1232 },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.65"],
  });
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  // Mobile vertical line progress.
  const lineScaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="process" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Implementation Process"
          title="From discovery to value, in five steps"
          description="A proven, low-risk methodology that gets you live fast and keeps you optimizing — follow the line."
        />

        {/* Desktop: serpentine drawn-on-scroll connector */}
        <div
          ref={ref}
          className="relative mx-auto mt-16 hidden aspect-[1000/1400] w-full max-w-4xl lg:block"
        >
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1000 1400"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="proc-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--brand)" />
                <stop offset="50%" stopColor="var(--cyan)" />
                <stop offset="100%" stopColor="var(--violet)" />
              </linearGradient>
              <filter id="proc-glow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="6" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* faint guide */}
            <path
              d={PATH_D}
              stroke="var(--border)"
              strokeWidth="2"
              strokeDasharray="2 10"
              strokeLinecap="round"
            />
            {/* drawn glowing line */}
            <motion.path
              d={PATH_D}
              stroke="url(#proc-grad)"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#proc-glow)"
              style={{ pathLength }}
            />

            {nodes.map((n, i) => (
              <motion.circle
                key={i}
                cx={n.x}
                cy={n.y}
                r="9"
                fill="var(--background)"
                stroke="url(#proc-grad)"
                strokeWidth="3"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.4 }}
                style={{ transformBox: "fill-box", transformOrigin: "center" }}
              />
            ))}
          </svg>

          {processSteps.map((step, i) => {
            const l = layout[i];
            return (
              <motion.div
                key={step.step}
                className="absolute w-[44%]"
                style={{
                  top: `${l.top}%`,
                  transform: "translateY(-50%)",
                  left: l.side === "left" ? 0 : undefined,
                  right: l.side === "right" ? 0 : undefined,
                }}
                initial={{ opacity: 0, x: l.side === "left" ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-140px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="glass-strong rounded-3xl p-6">
                  <span className="text-3xl font-bold text-gradient">{step.step}</span>
                  <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: vertical drawn line */}
        <div className="relative mt-14 lg:hidden">
          <div className="absolute left-5 top-0 h-full w-px bg-border" />
          <motion.div
            className="absolute left-5 top-0 w-px origin-top"
            style={{
              scaleY: lineScaleY,
              height: "100%",
              background: "linear-gradient(var(--brand), var(--cyan), var(--violet))",
            }}
          />
          <div className="space-y-6 pl-14">
            {processSteps.map((step) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="relative rounded-3xl border border-border bg-card p-6"
              >
                <span className="absolute -left-[2.35rem] top-6 h-4 w-4 rounded-full border-2 border-background bg-brand shadow-lg shadow-brand/40" />
                <span className="text-2xl font-bold text-gradient">{step.step}</span>
                <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
