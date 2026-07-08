import { motion } from "motion/react";
import { SectionHeading } from "./reveal";
import { modules } from "@/lib/site-data";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

export function Modules() {
  return (
    <section id="modules" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="ERP Modules"
          title="Every function, one connected platform"
          description="Deploy the modules you need today and add more as you grow — all sharing a single real-time data core."
        />

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {modules.map((mod) => (
            <motion.div
              key={mod.name}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="group gradient-border rounded-2xl p-6 transition-shadow hover:shadow-lg hover:shadow-brand/10"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand/15 to-violet/15 text-brand">
                <mod.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold">{mod.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {mod.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
