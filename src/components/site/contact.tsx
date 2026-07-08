import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Briefcase, CheckCircle2, Handshake } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading, Reveal } from "./reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { partners } from "@/lib/site-data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Partners() {
  return (
    <section id="partners" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Partners & Careers"
          title="Built with a world-class ecosystem"
          description="We partner with leading consultancies and are always hiring exceptional people to build the future of enterprise software."
        />

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {partners.map((p) => (
            <motion.div
              key={p}
              variants={fadeUp}
              className="glass flex items-center justify-center rounded-2xl py-6 text-sm font-bold tracking-wide text-foreground/70"
            >
              {p}
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Reveal>
            <div className="flex h-full items-center gap-4 rounded-3xl border border-border bg-card p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand">
                <Handshake className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-semibold">Become a partner</h3>
                <p className="text-sm text-muted-foreground">
                  Join our global network of implementation and technology partners.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="flex h-full items-center gap-4 rounded-3xl border border-border bg-card p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-violet/10 text-violet">
                <Briefcase className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-semibold">Careers at SkyERP</h3>
                <p className="text-sm text-muted-foreground">
                  We're hiring across engineering, product, design and go-to-market.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="glass-strong overflow-hidden rounded-[2rem] p-8 shadow-2xl shadow-brand/10 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Schedule a Demo"
                title={
                  <>
                    See SkyERP in action for{" "}
                    <span className="text-gradient">your business</span>
                  </>
                }
                description="Book a personalized walkthrough with our team and discover how SkyERP can transform your operations."
              />
              <ul className="mt-8 space-y-3">
                {[
                  "30-minute tailored demo",
                  "ROI estimate for your business",
                  "No commitment required",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
                toast.success("Thanks! Our team will reach out within 24 hours.");
              }}
              className="rounded-3xl border border-border bg-card p-6"
            >
              {submitted ? (
                <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
                  <CheckCircle2 className="h-12 w-12 text-brand" />
                  <h3 className="mt-4 text-lg font-semibold">Request received</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We'll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">Full name</Label>
                      <Input id="name" required placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" required placeholder="Acme Inc." />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Work email</Label>
                    <Input id="email" type="email" required placeholder="jane@acme.com" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="message">How can we help?</Label>
                    <Textarea id="message" rows={3} placeholder="Tell us about your goals…" />
                  </div>
                  <Button type="submit" className="w-full rounded-xl font-semibold glow-brand">
                    Request Demo <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
