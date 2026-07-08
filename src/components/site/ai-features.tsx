import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Reveal } from "./reveal";
import { aiFeatures } from "@/lib/site-data";
import { fadeUp, slideInRight, staggerContainer, viewportOnce } from "@/lib/motion";

const chatLines = [
  { from: "user", text: "What's driving the margin dip in Q3?" },
  { from: "ai", text: "Freight costs rose 14% in the West region. I've drafted a supplier renegotiation plan." },
];

export function AIFeatures() {
  return (
    <section id="products" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-brand" /> SkyERP AI
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Intelligence woven into <span className="text-gradient">every decision</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              SkyERP's AI layer turns your operational data into foresight —
              automating the routine and surfacing what matters most.
            </p>
          </Reveal>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            {aiFeatures.map((f) => (
              <motion.div
                key={f.name}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <f.icon className="h-6 w-6 text-brand" />
                <h3 className="mt-3 text-sm font-semibold">{f.name}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="glass-strong rounded-3xl p-6 shadow-2xl shadow-brand/10"
        >
          <div className="flex items-center gap-2 border-b border-border pb-4">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand/15 text-brand">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold">SkyERP Copilot</span>
            <span className="ml-auto flex items-center gap-1 text-[11px] text-chart-4">
              <span className="h-1.5 w-1.5 rounded-full bg-chart-4" /> Online
            </span>
          </div>

          <div className="mt-5 space-y-4">
            {chatLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.4 }}
                className={line.from === "user" ? "flex justify-end" : "flex justify-start"}
              >
                <p
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                    line.from === "user"
                      ? "bg-brand text-brand-foreground"
                      : "bg-accent text-accent-foreground"
                  }`}
                >
                  {line.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            className="mt-5 flex w-full items-center justify-between rounded-xl border border-border bg-card/60 px-4 py-3 text-left text-sm text-muted-foreground"
          >
            Ask anything about your business…
            <ArrowUpRight className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
