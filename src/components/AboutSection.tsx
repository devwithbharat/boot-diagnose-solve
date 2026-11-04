import { ArrowRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { COMPANY } from "@/data/company";

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionHeading
              eyebrow="About Us"
              title="Building Smarter Technology Experiences."
              description={`${COMPANY.name} is a technology-focused business based in ${COMPANY.location}. We aim to make computer hardware, IT products and technical services accessible to individuals and businesses through dependable products, practical solutions and customer-focused support.`}
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {COMPANY.businessCategories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-muted-foreground"
                >
                  {category}
                </span>
              ))}
            </div>
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-deep"
            >
              Talk to Our Team
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-electric" />
              Serving {COMPANY.location} and surrounding areas
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
