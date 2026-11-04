import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WHY_CHOOSE_POINTS } from "@/data/services";

export function WhyChooseUs() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Bootlytic?"
            title="A technology partner, not just a shop"
            description="We focus on honest advice, dependable products and support that continues long after the invoice."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_POINTS.map((point, i) => (
            <Reveal key={point.title} delay={i * 70}>
              <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-electric/40 hover:shadow-lg hover:shadow-electric/5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-electric">
                  <point.icon className="size-5" strokeWidth={2} />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {point.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
