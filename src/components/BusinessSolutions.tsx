import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { BUSINESS_AUDIENCES, BUSINESS_HIGHLIGHTS } from "@/data/services";

export function BusinessSolutions() {
  return (
    <section id="business" className="relative overflow-hidden bg-navy-deep py-20 sm:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[300px] w-[500px] rounded-full bg-electric/15 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[250px] w-[400px] rounded-full bg-cyan/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              align="left"
              dark
              eyebrow="Business Solutions"
              title="Technology That Works for Your Business."
              description="Setting up a new office, upgrading an existing one, or equipping an institution? We handle the hardware, the networking and the ongoing support so your team can focus on the work."
            />
            <ul className="mt-8 space-y-3">
              {BUSINESS_HIGHLIGHTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-cyan" />
                  {point}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-electric px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-electric/30 transition-all hover:-translate-y-0.5 hover:bg-electric/90"
            >
              Discuss Your Business Requirements
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-4 sm:grid-cols-2">
              {BUSINESS_AUDIENCES.map((audience, i) => (
                <div
                  key={audience.title}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:bg-white/10"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-cyan text-white">
                    <audience.icon className="size-5" strokeWidth={2} />
                  </span>
                  <p className="text-sm font-semibold text-white">{audience.title}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
