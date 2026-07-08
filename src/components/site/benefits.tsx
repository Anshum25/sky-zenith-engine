import { motion } from "motion/react";
import { SectionHeading } from "./reveal";
import { Counter } from "./counter";
import { benefits, stats } from "@/lib/site-data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Benefits() {
  return (
    <section id="benefits" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="glass-strong grid gap-6 rounded-3xl p-8 sm:grid-cols-2 lg:grid-cols-4 sm:p-10"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="text-center">
              <div className="text-4xl font-bold text-gradient sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20">
          <SectionHeading
            eyebrow="Business Benefits"
            title="Outcomes that move the bottom line"
            description="Enterprises choose SkyERP because it delivers measurable impact — not just software."
          />

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {benefits.map((b) => (
              <motion.div
                key={b.title}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-border bg-card p-6"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand/15 to-cyan/15 text-brand">
                  <b.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
