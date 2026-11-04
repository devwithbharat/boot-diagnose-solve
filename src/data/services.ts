import {
  Briefcase,
  Building2,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Handshake,
  Headset,
  Layers,
  MonitorSmartphone,
  Network,
  ShieldCheck,
  Store,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/** The four premium "What We Offer" cards. */
export const OFFER_CARDS: {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: Cpu,
    title: "Computer Hardware",
    description:
      "Desktops, laptops, processors, motherboards, RAM, SSDs, graphics cards and more — genuine components from trusted brands.",
    href: "#products",
  },
  {
    icon: Wrench,
    title: "IT Support & Services",
    description:
      "Troubleshooting, OS installation, hardware and SSD/RAM upgrades, software setup, maintenance and on-site or remote support.",
    href: "#contact",
  },
  {
    icon: Network,
    title: "Networking Solutions",
    description:
      "Routers, switches, structured cabling, network configuration and reliable Wi-Fi setups for homes and offices.",
    href: "#contact",
  },
  {
    icon: Briefcase,
    title: "B2B Hardware Supply",
    description:
      "Bulk procurement, office computer setups and complete IT infrastructure for businesses, schools and startups.",
    href: "#business",
  },
];

/** Full service groups shown in the Services detail strip. */
export const SERVICE_GROUPS: {
  icon: LucideIcon;
  title: string;
  items: string[];
}[] = [
  {
    icon: MonitorSmartphone,
    title: "Computer Hardware Sales",
    items: [
      "Desktop computers & laptops",
      "Processors & motherboards",
      "RAM & SSD storage",
      "Graphics cards & power supplies",
      "Cabinets & cooling systems",
      "Monitors & peripherals",
    ],
  },
  {
    icon: Network,
    title: "Accessories & Networking",
    items: [
      "Keyboards & mice",
      "Headphones & webcams",
      "Wi-Fi routers & switches",
      "Ethernet cables & connectors",
      "USB hubs, adapters & cables",
      "Printers & UPS systems",
    ],
  },
  {
    icon: Headset,
    title: "IT Support & Technical Services",
    items: [
      "Desktop & laptop troubleshooting",
      "Windows & Linux installation",
      "Hardware, SSD & RAM upgrades",
      "Software installation",
      "Network configuration",
      "Maintenance, repair & on-site support",
    ],
  },
  {
    icon: Briefcase,
    title: "B2B Hardware Supply",
    items: [
      "Bulk hardware procurement",
      "Office computer setup",
      "Business IT infrastructure",
      "Networking equipment supply",
      "Custom desktop configurations",
      "Supply for schools, offices & startups",
    ],
  },
  {
    icon: Layers,
    title: "Custom PC Building",
    items: [
      "Gaming PCs",
      "Office desktops",
      "Developer workstations",
      "High-performance PCs",
      "Configurations built around your budget",
    ],
  },
];

/** Who we help in the Business Solutions section. */
export const BUSINESS_AUDIENCES: { icon: LucideIcon; title: string }[] = [
  { icon: Store, title: "Small & Medium Businesses" },
  { icon: Building2, title: "Offices & Corporate Teams" },
  { icon: Users, title: "Startups" },
  { icon: GraduationCap, title: "Educational Institutions" },
  { icon: Store, title: "Retail Businesses" },
];

export const BUSINESS_HIGHLIGHTS = [
  "Bulk hardware supply at business-friendly terms",
  "Complete office IT setup — systems, networking and software",
  "Ongoing IT support and maintenance plans",
  "Custom desktop configurations for your workload",
];

/** "Why Choose Bootlytic?" selling points. */
export const WHY_CHOOSE_POINTS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: ShieldCheck,
    title: "Reliable Technology Solutions",
    text: "Dependable hardware and practical solutions you can count on, every time.",
  },
  {
    icon: Handshake,
    title: "Customer-Focused Support",
    text: "We listen first, recommend honestly and stay available after the sale.",
  },
  {
    icon: Layers,
    title: "Hardware & Services Under One Roof",
    text: "From a single SSD to a full office network — sourced, installed and serviced by one team.",
  },
  {
    icon: Users,
    title: "Solutions for Individuals & Businesses",
    text: "Personal upgrades and enterprise-grade setups, handled with the same care.",
  },
  {
    icon: CheckCircle2,
    title: "Budget-Conscious Recommendations",
    text: "Suggestions shaped around your actual needs and budget — never overselling.",
  },
  {
    icon: Headset,
    title: "Dedicated Technical Assistance",
    text: "Direct access to technical help when you need it, remote or on-site.",
  },
];
