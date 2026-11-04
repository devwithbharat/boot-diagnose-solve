import { Mail, MapPin, MessageCircle, Terminal } from "lucide-react";
import { COMPANY, NAV_LINKS, hasWhatsApp, whatsappLink } from "@/data/company";
import { PRODUCT_CATEGORIES } from "@/data/products";

const SOCIAL_PLACEHOLDERS = ["LinkedIn", "Instagram", "Facebook", "X (Twitter)"];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-cyan text-white">
                <Terminal className="size-5" strokeWidth={2.2} />
              </span>
              <span className="font-display text-lg font-bold text-white">
                Bootlytic<span className="font-medium text-electric"> Technologies</span>
              </span>
            </div>
            <p className="mt-3 text-sm font-semibold tracking-wide text-cyan">
              {COMPANY.tagline}
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm">
              <MapPin className="size-4 text-slate-500" />
              {COMPANY.location}
            </p>
            {/* Social placeholders */}
            <div className="mt-5 flex flex-wrap gap-2">
              {(COMPANY.socials.length > 0
                ? COMPANY.socials.map((s) => s.label)
                : SOCIAL_PLACEHOLDERS
              ).map((label) => (
                <span
                  key={label}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400"
                  title={COMPANY.socials.length === 0 ? "Social link placeholder — to be added" : undefined}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm transition-colors hover:text-cyan">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product categories */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Products
            </h3>
            <ul className="mt-4 space-y-2.5">
              {PRODUCT_CATEGORIES.map((category) => (
                <li key={category.name}>
                  <a href="#products" className="text-sm transition-colors hover:text-cyan">
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MessageCircle className="size-4 shrink-0 text-slate-500" />
                {hasWhatsApp ? (
                  <a
                    href={whatsappLink("Hi Bootlytic Technologies, I have an inquiry.") ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-cyan"
                  >
                    WhatsApp us
                  </a>
                ) : (
                  <span className="text-slate-400">WhatsApp — to be added</span>
                )}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-slate-500" />
                <span className="text-slate-400">{COMPANY.email || "Email — to be added"}</span>
              </li>
              <li>
                <a href="#contact" className="font-medium text-cyan transition-colors hover:underline">
                  Send an inquiry →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {year} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Computer Hardware · IT Services · Technology Solutions · B2B Supply
          </p>
        </div>
      </div>
    </footer>
  );
}
