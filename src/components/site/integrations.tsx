import { motion } from "motion/react";
import { SectionHeading } from "./reveal";
import { integrations } from "@/lib/site-data";
import { viewportOnce } from "@/lib/motion";

export function Integrations() {
  const row = [...integrations, ...integrations];
  return (
    <section id="integrations" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Integrations"
          title="Connects with your entire stack"
          description="SkyERP Connect ships with 200+ prebuilt connectors and an open API — plug into the tools your teams already use."
        />
      </div>

      <div className="relative mt-14 space-y-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <motion.div
          className="flex gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {row.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="glass flex shrink-0 items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold"
            >
              <span className="h-2 w-2 rounded-full bg-brand" />
              {name}
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-4"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          {row.reverse().map((name, i) => (
            <div
              key={`r-${name}-${i}`}
              className="glass flex shrink-0 items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold"
            >
              <span className="h-2 w-2 rounded-full bg-violet" />
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
