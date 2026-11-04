import { useEffect, useState } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/data/company";
import { cn } from "@/lib/utils";

function Wordmark({ dark }: { dark?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-2.5" aria-label={`${COMPANY.name} — home`}>
      <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-cyan text-white shadow-md shadow-electric/30">
        <Terminal className="size-5" strokeWidth={2.2} />
      </span>
      <span
        className={cn(
          "font-display text-lg font-bold tracking-tight",
          dark ? "text-white" : "text-foreground",
        )}
      >
        Bootlytic
        <span className="font-medium text-electric"> Technologies</span>
      </span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-background/90 shadow-lg shadow-navy/5 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Wordmark dark={!scrolled && !open} />

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                scrolled
                  ? "text-muted-foreground hover:bg-muted hover:text-foreground"
                  : "text-slate-300 hover:bg-white/10 hover:text-white",
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-xl bg-electric px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-electric/40 transition-all hover:-translate-y-0.5 hover:bg-electric/90 sm:inline-flex"
          >
            Get a Quote
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-xl lg:hidden",
              scrolled || open
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-white/10",
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background/95 px-4 pb-6 pt-2 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-electric px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
