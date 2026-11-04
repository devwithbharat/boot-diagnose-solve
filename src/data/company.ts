/**
 * Central company configuration.
 * Update contact details here once real ones are available — every
 * section on the page reads from this file.
 */
export const COMPANY = {
  name: "Bootlytic Technologies",
  tagline: "Boot. Diagnose. Solve.",
  shortName: "Bootlytic",
  location: "Belagavi, Karnataka, India",
  businessCategories: [
    "Computer Hardware",
    "IT Services",
    "Technology Solutions",
    "B2B Hardware Supply",
  ],
  // ── Contact details (placeholders — replace with real values) ──
  // Phone shown on the site, e.g. "+91 98765 43210"
  phone: "",
  // Email shown on the site, e.g. "hello@bootlytic.com"
  email: "",
  // WhatsApp number in international format, digits only, e.g. "919876543210"
  whatsapp: "",
  // Social links: { label: "LinkedIn", url: "https://..." } — leave empty until real URLs exist
  socials: [] as { label: string; url: string }[],
};

export const hasWhatsApp = COMPANY.whatsapp.trim().length > 0;

export function whatsappLink(message: string): string | null {
  if (!hasWhatsApp) return null;
  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Business Solutions", href: "#business" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];
