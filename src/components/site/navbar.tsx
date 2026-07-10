import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { Logo } from "./logo";
import { navGroups } from "@/lib/site-data";
import { useTheme } from "@/lib/theme";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300",
            scrolled ? "glass-strong shadow-lg shadow-black/5" : "border border-transparent",
          )}
        >
          <a href="#top" className="shrink-0" aria-label="SkyERP home">
            <Logo />
          </a>

          <nav
            className="hidden items-center gap-1 lg:flex"
            onMouseLeave={() => setOpenMenu(null)}
          >
            {navGroups.map((group) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(group.columns ? group.label : null)}
              >
                <a
                  href={group.href}
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                >
                  {group.label}
                  {group.columns && (
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform",
                        openMenu === group.label && "rotate-180",
                      )}
                    />
                  )}
                </a>

                <AnimatePresence>
                  {group.columns && openMenu === group.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full w-[720px] max-w-[calc(100vw-2rem)] pt-3"
                    >
                      <div className="glass-strong grid grid-cols-[1fr_1fr_0.9fr] gap-2 rounded-2xl p-3 shadow-2xl shadow-black/10">
                        {group.columns.map((col) => (
                          <div key={col.heading} className="p-1">
                            <p className="px-3 pb-1.5 pt-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                              {col.heading}
                            </p>
                            {col.items.map((item) => (
                              <a
                                key={item.label}
                                href={group.href}
                                className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent"
                              >
                                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                                  <item.icon className="h-4.5 w-4.5" />
                                </span>
                                <span className="min-w-0">
                                  <span className="block text-sm font-semibold text-foreground">
                                    {item.label}
                                  </span>
                                  <span className="block text-xs text-muted-foreground">
                                    {item.description}
                                  </span>
                                </span>
                              </a>
                            ))}
                          </div>
                        ))}

                        {group.featured && (
                          <a
                            href={group.href}
                            className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br from-brand/12 via-cyan/8 to-transparent p-4"
                          >
                            <div>
                              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/15 text-brand">
                                <group.featured.icon className="h-5 w-5" />
                              </span>
                              <span className="mt-3 block text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                                {group.featured.eyebrow}
                              </span>
                              <span className="mt-1 block text-sm font-bold text-foreground">
                                {group.featured.title}
                              </span>
                              <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                                {group.featured.description}
                              </span>
                            </div>
                            <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand">
                              {group.featured.cta}
                              <ChevronDown className="h-3.5 w-3.5 -rotate-90" />
                            </span>
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>


          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggle}
              aria-label="Toggle color theme"
              className="rounded-xl"
            >
              {theme === "dark" ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </Button>
            <a
              href="#contact"
              className="hidden rounded-xl px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground md:inline-flex"
            >
              Login
            </a>
            <Button asChild className="hidden rounded-xl font-semibold glow-brand sm:inline-flex">
              <a href="#contact">Schedule Demo</a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-xl lg:hidden"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-background/70 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto glass-strong p-6"
            >
              <div className="mb-6 flex items-center justify-between">
                <Logo />
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="flex flex-col gap-1">
                {navGroups.map((group) => (
                  <a
                    key={group.label}
                    href={group.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-3 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-accent"
                  >
                    {group.label}
                  </a>
                ))}
              </nav>
              <div className="mt-6 flex flex-col gap-3">
                <Button asChild variant="outline" className="rounded-xl">
                  <a href="#contact" onClick={() => setMobileOpen(false)}>Login</a>
                </Button>
                <Button asChild className="rounded-xl font-semibold">
                  <a href="#contact" onClick={() => setMobileOpen(false)}>Schedule Demo</a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
