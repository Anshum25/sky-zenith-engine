import { createFileRoute } from "@tanstack/react-router";
import { LoadingScreen } from "@/components/site/loading-screen";
import { AmbientBackground } from "@/components/site/background";
import { SmoothScroll } from "@/lib/smooth-scroll";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Industries } from "@/components/site/industries";
import { Modules } from "@/components/site/modules";
import { AIFeatures } from "@/components/site/ai-features";
import { Integrations } from "@/components/site/integrations";
import { Benefits } from "@/components/site/benefits";
import { CaseStudies, Testimonials } from "@/components/site/social-proof";
import { Process } from "@/components/site/process";
import { Pricing } from "@/components/site/pricing";
import { FAQ } from "@/components/site/faq";
import { BlogAndEvents } from "@/components/site/blog-events";
import { Partners, ContactCTA } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <SmoothScroll>
      <LoadingScreen />
      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <Industries />
        <Modules />
        <AIFeatures />
        <Integrations />
        <Benefits />
        <CaseStudies />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
        <BlogAndEvents />
        <Partners />
        <ContactCTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
