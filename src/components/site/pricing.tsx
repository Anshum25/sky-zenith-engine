import { motion } from "motion/react";
import { Check } from "lucide-react";
import { SectionHeading } from "./reveal";
import { Button } from "@/components/ui/button";
import { pricingTiers } from "@/lib/site-data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Pricing"
          title="Transparent plans that scale with you"
          description="Start with what you need and expand anytime. Every plan includes enterprise-grade security and support."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid items-center gap-6 lg:grid-cols-3"
        >
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className={cn(
                "relative flex flex-col rounded-3xl border p-8",
                tier.highlighted
                  ? "border-brand/40 bg-card glow-brand lg:scale-[1.04]"
                  : "border-border bg-card",
              )}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-xs font-bold text-brand-foreground">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="mb-1 text-sm text-muted-foreground">{tier.cadence}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={cn("mt-8 rounded-xl font-semibold", tier.highlighted && "glow-brand")}
                variant={tier.highlighted ? "default" : "outline"}
              >
                <a href="#contact">{tier.cta}</a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
