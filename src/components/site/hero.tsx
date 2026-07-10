import { motion } from "motion/react";
import {
  Activity,
  ArrowRight,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { OrbitLogo } from "./orbit-logo";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { trustLogos } from "@/lib/site-data";

function FloatingCard({
  className,
  delay,
  children,
}: {
  className?: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={`glass absolute hidden rounded-2xl p-3 shadow-xl md:block ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6 }}
    >
      <div className="animate-float">{children}</div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <motion.div variants={staggerContainer(0.12)} initial="hidden" animate="show">
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-1.5 text-xs font-semibold text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              AI-native ERP for the modern enterprise
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-balance text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl"
          >
            Run your entire business on{" "}
            <span className="text-gradient">one intelligent platform</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            SkyERP unifies finance, supply chain, HR, manufacturing and CRM with
            real-time analytics and an AI copilot — so global teams move faster,
            decide smarter and scale without limits.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-xl font-semibold glow-brand">
              <a href="#contact">
                Schedule a Demo <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl font-semibold">
              <a href="#modules">
                <PlayCircle className="mr-1 h-4 w-4" /> Explore Platform
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-brand" /> SOC 2 & ISO 27001
            </span>
            <span className="flex items-center gap-1.5">
              <Activity className="h-4 w-4 text-brand" /> 99.99% uptime
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-brand" /> 4,200+ enterprises
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <OrbitLogo />

          <FloatingCard className="-left-2 top-10" delay={1}>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-chart-4/15 text-chart-4">
                <TrendingUp className="h-4 w-4" />
              </span>
              <div>
                <div className="text-xs font-bold">Forecast accuracy</div>
                <div className="text-[10px] text-muted-foreground">96.4% this quarter</div>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="-right-2 bottom-10" delay={1.2}>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand/15 text-brand">
                <Sparkles className="h-4 w-4" />
              </span>
              <div>
                <div className="text-xs font-bold">AI Copilot</div>
                <div className="text-[10px] text-muted-foreground">3 insights ready</div>
              </div>
            </div>
          </FloatingCard>
        </motion.div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by industry leaders worldwide
        </p>
        <div className="mt-6 grid grid-cols-2 gap-6 opacity-70 sm:grid-cols-3 lg:grid-cols-6">
          {trustLogos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="text-center text-sm font-bold tracking-wider text-foreground/60"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
