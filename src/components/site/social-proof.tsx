import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { SectionHeading } from "./reveal";
import { caseStudies, testimonials } from "@/lib/site-data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Case Studies"
          title="Proven results across the enterprise"
          description="Real transformations from companies running their operations on SkyERP."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 lg:grid-cols-3"
        >
          {caseStudies.map((c) => (
            <motion.article
              key={c.company}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand/5 blur-2xl transition-all group-hover:bg-brand/15" />
              <div className="text-5xl font-bold text-gradient">{c.metric}</div>
              <div className="mt-1 text-sm font-medium text-muted-foreground">
                {c.metricLabel}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-foreground/90">"{c.quote}"</p>
              <div className="mt-6 border-t border-border pt-4">
                <div className="text-sm font-semibold">{c.company}</div>
                <div className="text-xs text-muted-foreground">{c.industry}</div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by leaders who run at scale"
          description="From CFOs to operations chiefs, teams trust SkyERP to power their most critical work."
        />

        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className="break-inside-avoid rounded-3xl border border-border bg-card p-6"
            >
              <Quote className="h-6 w-6 text-brand/50" />
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand to-violet text-sm font-bold text-brand-foreground">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
