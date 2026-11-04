import { ArrowRight, MessageSquare } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PRODUCT_CATEGORIES } from "@/data/products";

export function FeaturedProducts() {
  return (
    <section id="products" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Products"
            title="Everything your system needs"
            description="Genuine components and quality peripherals across every category. Pricing depends on current availability — request a quote and we'll respond with the best option for your budget."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCT_CATEGORIES.map((category, i) => (
            <Reveal key={category.name} delay={i * 60}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1.5 hover:border-electric/40 hover:shadow-xl hover:shadow-electric/10">
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-electric transition-colors group-hover:bg-gradient-to-br group-hover:from-electric group-hover:to-cyan group-hover:text-white">
                  <category.icon className="size-6" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display text-base font-bold text-foreground">
                  {category.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-electric"
                >
                  <MessageSquare className="size-4" />
                  Request a Quote
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-electric/20 bg-accent px-6 py-5 sm:flex-row">
            <p className="text-sm font-medium text-foreground">
              Looking for a specific component or a full configuration? We'll
              source it for you.
            </p>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-electric px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-electric/90"
            >
              Request a Quote
              <ArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
