import { motion } from "motion/react";
import { ArrowUpRight, CalendarClock, MapPin } from "lucide-react";
import { SectionHeading } from "./reveal";
import { blogPosts, events } from "@/lib/site-data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function BlogAndEvents() {
  return (
    <section id="blog" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Resources"
          title="Insights, ideas and events"
          description="Stay ahead with expert perspectives and live sessions from the SkyERP team."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 lg:grid-cols-3"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-brand/20 via-cyan/15 to-violet/20">
                <div className="grid-bg absolute inset-0 opacity-50" />
                <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold backdrop-blur">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold leading-snug group-hover:text-brand">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{post.readTime} read</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div id="events" className="mt-16">
          <h3 className="text-xl font-bold">Upcoming events</h3>
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-6 grid gap-4 sm:grid-cols-3"
          >
            {events.map((ev) => (
              <motion.div
                key={ev.title}
                variants={fadeUp}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                  <span className="text-lg font-bold leading-none">{ev.date}</span>
                  <span className="text-[10px] font-semibold">{ev.month}</span>
                </div>
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold">{ev.title}</div>
                  <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <CalendarClock className="h-3 w-3" /> {ev.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {ev.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
