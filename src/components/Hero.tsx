import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";
import { COMPANY } from "@/data/company";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-deep pt-16">
      {/* Decorative glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-electric/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-cyan/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-8 lg:pb-28 lg:pt-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-cyan">
            <span className="size-1.5 rounded-full bg-cyan" />
            {COMPANY.tagline}
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Powering Your{" "}
            <span className="bg-gradient-to-r from-electric to-cyan bg-clip-text text-transparent">
              Digital World.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Your trusted partner for computer hardware, IT services and business
            technology solutions. From individual upgrades to complete business
            IT setups, {COMPANY.name} helps you stay connected and productive.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-xl bg-electric px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-electric/40 transition-all hover:-translate-y-0.5 hover:bg-electric/90"
            >
              Explore Products
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              <MessageCircle className="size-4" />
              Get a Free Quote
            </a>
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm text-slate-400">
            <MapPin className="size-4 text-cyan" />
            {COMPANY.location}
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-electric/30 via-transparent to-cyan/30 blur-2xl"
          />
          <img
            src={heroImage}
            alt="Modern computer hardware and an IT workspace with a custom PC build"
            width={1280}
            height={1024}
            className="relative w-full rounded-3xl border border-white/10 object-cover shadow-2xl shadow-black/50"
          />
          {/* Floating stat chip */}
          <div className="absolute -bottom-5 left-6 rounded-2xl border border-white/10 bg-navy/90 px-5 py-3.5 shadow-xl backdrop-blur">
            <p className="font-display text-sm font-bold text-white">
              Hardware · Services · B2B Supply
            </p>
            <p className="text-xs text-slate-400">Everything IT, under one roof</p>
          </div>
        </div>
      </div>
    </section>
  );
}
