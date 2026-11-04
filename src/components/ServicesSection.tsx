import { ArrowRight, Headset, Network, Server } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { OFFER_CARDS, SERVICE_GROUPS } from "@/data/services";
import { SectionHeading } from "@/components/SectionHeading";

export function ServicesSection() {
  return (
    <section id="services" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What We Offer"
            title="Complete technology care, end to end"
            description="From a single component to a full business IT setup — we source it, build it, install it and keep it running."
          />
        </Reveal>

        {/* Four premium cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OFFER_CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 80}>
              <a
                href={card.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1.5 hover:border-electric/40 hover:shadow-xl hover:shadow-electric/10"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-cyan text-white shadow-md shadow-electric/25">
                  <card.icon className="size-6" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-electric">
                  Learn More
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Detailed service groups */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={i * 60} className={i === 4 ? "md:col-span-2 lg:col-span-1" : undefined}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-electric">
                    <group.icon className="size-5" strokeWidth={2} />
                  </span>
                  <h3 className="font-display text-base font-bold text-foreground">
                    {group.title}
                  </h3>
                </div>
                <ul className="mt-4 flex-1 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          {/* Support strip */}
          <Reveal delay={300}>
            <div className="flex h-full flex-col justify-between rounded-2xl bg-gradient-to-br from-navy to-navy-deep p-6 text-white">
              <div>
                <span className="flex size-10 items-center justify-center rounded-lg bg-white/10 text-cyan">
                  <Headset className="size-5" strokeWidth={2} />
                </span>
                <h3 className="mt-4 font-display text-base font-bold">
                  Remote &amp; On-Site Support
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Quick diagnosis and practical fixes — wherever you are in and
                  around Belagavi.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-cyan">
                <Server className="size-4" />
                <Network className="size-4" />
                Hardware · Software · Networks
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
