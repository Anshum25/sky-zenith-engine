import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { Logo } from "./logo";

const footerColumns = [
  {
    title: "Product",
    links: ["SkyERP Core", "SkyERP AI", "Analytics", "Connect", "Pricing", "Security"],
  },
  {
    title: "Solutions",
    links: ["Finance", "Supply Chain", "Manufacturing", "Human Capital", "CRM & Sales", "Projects"],
  },
  {
    title: "Industries",
    links: ["Manufacturing", "Retail", "Distribution", "Healthcare", "Services", "Education"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Partners", "Blog", "Events", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Case Studies", "Webinars", "Help Center", "API", "Status"],
  },
];

const socials = [
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Github, label: "GitHub" },
  { icon: Youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border pt-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(5,1fr)]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The AI-native ERP platform unifying finance, operations and people
              for the world's most ambitious enterprises.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border py-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SkyERP, Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#top" className="transition-colors hover:text-foreground">Privacy</a>
            <a href="#top" className="transition-colors hover:text-foreground">Terms</a>
            <a href="#top" className="transition-colors hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
