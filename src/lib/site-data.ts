import {
  Boxes,
  Brain,
  Building2,
  CalendarClock,
  ChartNoAxesCombined,
  CircleDollarSign,
  Cpu,
  Factory,
  FileText,
  Gauge,
  GraduationCap,
  HeartPulse,
  Layers,
  LineChart,
  Lock,
  Package,
  Plug,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Store,
  Truck,
  Users,
  Wallet,
  Workflow,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type MenuItem = {
  label: string;
  description: string;
  icon: LucideIcon;
};

export type NavGroup = {
  label: string;
  href: string;
  items?: MenuItem[];
};

export const navGroups: NavGroup[] = [
  {
    label: "Solutions",
    href: "#modules",
    items: [
      { label: "Finance & Accounting", description: "Ledgers, AP/AR, tax & audit", icon: CircleDollarSign },
      { label: "Supply Chain", description: "Procurement to fulfillment", icon: Truck },
      { label: "Human Capital", description: "Payroll, talent & performance", icon: Users },
      { label: "Manufacturing", description: "MRP, shop-floor & quality", icon: Factory },
      { label: "CRM & Sales", description: "Pipeline, quotes & renewals", icon: ChartNoAxesCombined },
      { label: "Projects", description: "Planning, billing & margins", icon: Workflow },
    ],
  },
  {
    label: "Industries",
    href: "#industries",
    items: [
      { label: "Manufacturing", description: "Discrete & process plants", icon: Factory },
      { label: "Retail & eComm", description: "Omnichannel commerce", icon: Store },
      { label: "Distribution", description: "Wholesale & logistics", icon: Package },
      { label: "Healthcare", description: "Compliance-first operations", icon: HeartPulse },
      { label: "Professional Services", description: "Project-based delivery", icon: Building2 },
      { label: "Education", description: "Campus & admin systems", icon: GraduationCap },
    ],
  },
  {
    label: "Products",
    href: "#products",
    items: [
      { label: "SkyERP Core", description: "The unified ERP platform", icon: Boxes },
      { label: "SkyERP AI", description: "Copilot & predictive engine", icon: Brain },
      { label: "SkyERP Analytics", description: "Real-time BI & reporting", icon: LineChart },
      { label: "SkyERP Connect", description: "Integration fabric & APIs", icon: Plug },
    ],
  },
  {
    label: "Resources",
    href: "#blog",
    items: [
      { label: "Blog", description: "Product & industry insights", icon: FileText },
      { label: "Case Studies", description: "Proven customer outcomes", icon: ChartNoAxesCombined },
      { label: "Events", description: "Webinars & summits", icon: CalendarClock },
      { label: "Documentation", description: "Guides for builders", icon: Layers },
    ],
  },
  { label: "Pricing", href: "#pricing" },
  { label: "Company", href: "#partners" },
];

export type Industry = {
  name: string;
  description: string;
  icon: LucideIcon;
  metric: string;
};

export const industries: Industry[] = [
  { name: "Manufacturing", description: "Plan, produce and track with real-time MRP and shop-floor control.", icon: Factory, metric: "-32% downtime" },
  { name: "Retail & eCommerce", description: "Unify POS, inventory and online orders in one omnichannel core.", icon: ShoppingCart, metric: "+21% margin" },
  { name: "Distribution", description: "Warehouse, routing and demand forecasting built for scale.", icon: Truck, metric: "99.4% OTIF" },
  { name: "Healthcare", description: "Compliant procurement, assets and finance for care providers.", icon: HeartPulse, metric: "HIPAA-ready" },
  { name: "Professional Services", description: "Resource planning, billing and utilization in a single view.", icon: Building2, metric: "+18% utilization" },
  { name: "Education", description: "Admissions, finance and campus operations, modernized.", icon: GraduationCap, metric: "1 unified system" },
];

export type Module = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export const modules: Module[] = [
  { name: "Financial Management", description: "GL, AP/AR, multi-entity consolidation, tax and audit trails.", icon: Wallet },
  { name: "Supply Chain", description: "Procurement, inventory, warehousing and demand planning.", icon: Boxes },
  { name: "Manufacturing", description: "BOM, MRP, work orders, capacity and quality management.", icon: Factory },
  { name: "Human Capital", description: "Core HR, payroll, talent, time and performance reviews.", icon: Users },
  { name: "CRM & Sales", description: "Leads, opportunities, quotes, contracts and renewals.", icon: ChartNoAxesCombined },
  { name: "Project Management", description: "Planning, resourcing, timesheets and revenue recognition.", icon: Workflow },
  { name: "Asset Management", description: "Lifecycle tracking, maintenance and depreciation schedules.", icon: Package },
  { name: "Business Intelligence", description: "Dashboards, KPIs and self-serve analytics across modules.", icon: LineChart },
];

export type AIFeature = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export const aiFeatures: AIFeature[] = [
  { name: "SkyERP Copilot", description: "Ask questions in plain language and get instant answers, reports and actions across your data.", icon: Sparkles },
  { name: "Predictive Forecasting", description: "AI models anticipate demand, cash flow and inventory needs weeks ahead.", icon: Brain },
  { name: "Anomaly Detection", description: "Automatically flag fraud, duplicates and outliers before they cost you.", icon: ShieldCheck },
  { name: "Process Automation", description: "Trigger multi-step workflows that run themselves with human-in-the-loop control.", icon: Zap },
];

export const integrations = [
  "Salesforce", "Slack", "Microsoft 365", "Shopify", "Stripe", "HubSpot",
  "QuickBooks", "Workday", "SAP", "Snowflake", "Zapier", "Twilio",
  "Google Cloud", "AWS", "DocuSign", "Tableau",
];

export type CaseStudy = {
  company: string;
  industry: string;
  quote: string;
  metric: string;
  metricLabel: string;
};

export const caseStudies: CaseStudy[] = [
  { company: "Northwind Manufacturing", industry: "Discrete Manufacturing", quote: "SkyERP unified nine plants onto one platform in a single quarter.", metric: "42%", metricLabel: "faster order cycle" },
  { company: "Halcyon Retail Group", industry: "Omnichannel Retail", quote: "We finally have one source of truth from warehouse to checkout.", metric: "3.1x", metricLabel: "inventory turns" },
  { company: "Meridian Health", industry: "Healthcare Network", quote: "Procurement and finance are now audit-ready by default.", metric: "$8.4M", metricLabel: "annual savings" },
];

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  { name: "Amara Okonkwo", role: "CFO", company: "Northwind", quote: "The forecasting accuracy alone paid for the platform within two quarters. It's the backbone of our finance team." },
  { name: "David Chen", role: "VP Operations", company: "Halcyon", quote: "Implementation was the smoothest enterprise rollout we've ever run. Our teams adopted it in days, not months." },
  { name: "Priya Nair", role: "COO", company: "Meridian", quote: "SkyERP Copilot answers questions our analysts used to spend days on. It changed how leadership makes decisions." },
  { name: "Lucas Meyer", role: "Head of Supply Chain", company: "Vertex Logistics", quote: "Real-time visibility across every warehouse transformed our on-time delivery numbers overnight." },
  { name: "Sofia Rossi", role: "CEO", company: "Aurora Foods", quote: "One platform replaced five disconnected systems. The clarity across the business is night and day." },
  { name: "James Carter", role: "CIO", company: "Continental", quote: "The security posture and API fabric made our integration team's job effortless. Enterprise-grade throughout." },
];

export type BenefitStat = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
};

export const stats: BenefitStat[] = [
  { value: 4200, suffix: "+", label: "Enterprises powered" },
  { value: 99.99, suffix: "%", decimals: 2, label: "Platform uptime" },
  { value: 38, suffix: "%", label: "Avg. cost reduction" },
  { value: 172, suffix: "", label: "Countries served" },
];

export type Benefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const benefits: Benefit[] = [
  { title: "Faster decisions", description: "Real-time data and AI insights across every function eliminate guesswork.", icon: Gauge },
  { title: "Lower total cost", description: "Consolidate legacy systems into one platform and cut licensing overhead.", icon: CircleDollarSign },
  { title: "Enterprise security", description: "SOC 2, ISO 27001, GDPR and role-based access control by default.", icon: Lock },
  { title: "Infinite scale", description: "Cloud-native architecture that grows from startup to global enterprise.", icon: Rocket },
  { title: "Rapid deployment", description: "Go live in weeks with guided implementation and prebuilt templates.", icon: Zap },
  { title: "Automated workflows", description: "Remove manual work with intelligent, event-driven automation.", icon: Cpu },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  { step: "01", title: "Discover", description: "We map your processes, data and goals to design the ideal architecture." },
  { step: "02", title: "Configure", description: "Prebuilt industry templates get tailored to your exact operations." },
  { step: "03", title: "Migrate", description: "Secure, validated data migration with zero-downtime cutover planning." },
  { step: "04", title: "Launch", description: "Guided go-live, training and adoption tracking across your teams." },
  { step: "05", title: "Optimize", description: "Continuous tuning, new modules and dedicated success management." },
];

export type PricingTier = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Growth",
    price: "$49",
    cadence: "/ user / mo",
    description: "For scaling teams unifying their core operations.",
    features: ["Up to 50 users", "Finance + CRM modules", "Standard analytics", "Email support", "99.9% uptime SLA"],
    cta: "Start free trial",
  },
  {
    name: "Enterprise",
    price: "$99",
    cadence: "/ user / mo",
    description: "The full platform for complex, multi-entity operations.",
    features: ["Unlimited users", "All ERP modules", "SkyERP AI Copilot", "Advanced BI & forecasting", "Priority 24/7 support", "SSO & audit logs"],
    highlighted: true,
    cta: "Schedule demo",
  },
  {
    name: "Global",
    price: "Custom",
    cadence: "tailored",
    description: "For global enterprises with bespoke requirements.",
    features: ["Dedicated cloud", "Custom integrations", "White-glove onboarding", "Named success team", "Custom SLAs & compliance"],
    cta: "Contact sales",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  { q: "How long does implementation take?", a: "Most customers go live within 6–12 weeks using our industry templates and guided implementation program. Complex, multi-entity rollouts are phased to minimize disruption." },
  { q: "Is SkyERP secure and compliant?", a: "Yes. SkyERP is SOC 2 Type II, ISO 27001 and GDPR compliant, with role-based access control, encryption at rest and in transit, and full audit logging." },
  { q: "Can SkyERP integrate with our existing tools?", a: "SkyERP Connect provides a robust API fabric and prebuilt connectors for 200+ business applications including Salesforce, Microsoft 365, Stripe and more." },
  { q: "Does it work for global, multi-entity companies?", a: "Absolutely. SkyERP supports multi-currency, multi-language, multi-entity consolidation and regional tax and compliance out of the box." },
  { q: "What does the AI Copilot actually do?", a: "Copilot lets anyone ask questions in plain language, generate reports, forecast outcomes and trigger workflows — grounded in your live ERP data with permissions respected." },
  { q: "What support is included?", a: "Every plan includes support, with Enterprise and Global tiers adding 24/7 priority support and a dedicated customer success team." },
];

export type BlogPost = {
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  { title: "The 2026 guide to AI-native ERP", category: "AI", readTime: "8 min", excerpt: "How predictive intelligence is reshaping enterprise resource planning from the ground up." },
  { title: "Consolidating 6 systems into one platform", category: "Strategy", readTime: "6 min", excerpt: "A practical framework for retiring legacy tools without disrupting operations." },
  { title: "Real-time finance: closing the books in hours", category: "Finance", readTime: "5 min", excerpt: "Why continuous accounting is finally within reach for mid-market enterprises." },
];

export type EventItem = {
  date: string;
  month: string;
  title: string;
  type: string;
  location: string;
};

export const events: EventItem[] = [
  { date: "14", month: "SEP", title: "SkyERP Summit 2026", type: "Conference", location: "San Francisco" },
  { date: "02", month: "OCT", title: "AI in ERP — Live Webinar", type: "Webinar", location: "Online" },
  { date: "21", month: "NOV", title: "Manufacturing Modernization", type: "Workshop", location: "Chicago" },
];

export const partners = [
  "Deloitte", "Accenture", "PwC", "KPMG", "Capgemini", "Infosys", "TCS", "Wipro",
];

export const trustLogos = [
  "NORTHWIND", "HALCYON", "MERIDIAN", "VERTEX", "AURORA", "CONTINENTAL",
];
