import { motion } from "motion/react";
import { SectionHeading } from "./reveal";
import { industries } from "@/lib/site-data";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

export function Industries() {
  return (
    <section id="industries" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Industries"
          title="Built for the way your industry works"
          description="Prebuilt templates and best practices tuned to the realities of every sector — go live faster with fewer compromises."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((industry) => (
            <motion.article
              key={industry.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-xl hover:shadow-brand/10"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-brand/5 blur-2xl transition-all group-hover:bg-brand/15" />
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                <industry.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{industry.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {industry.description}
              </p>
              <span className="mt-4 inline-flex rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                {industry.metric}
              </span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
