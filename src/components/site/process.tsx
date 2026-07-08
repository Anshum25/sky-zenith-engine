import { motion } from "motion/react";
import { SectionHeading } from "./reveal";
import { processSteps } from "@/lib/site-data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Process() {
  return (
    <section id="process" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Implementation Process"
          title="From discovery to value in weeks"
          description="A proven, low-risk methodology that gets you live fast and keeps you optimizing."
        />

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-brand/50 via-border to-transparent lg:block" />

          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-6 lg:space-y-0"
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                className={`relative lg:flex lg:items-center lg:gap-8 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="lg:w-1/2">
                  <div
                    className={`rounded-3xl border border-border bg-card p-6 ${
                      i % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <span className="text-3xl font-bold text-gradient">{step.step}</span>
                    <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-background bg-brand shadow-lg shadow-brand/40 lg:block" />
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
