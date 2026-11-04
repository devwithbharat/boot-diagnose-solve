import {
  Cable,
  Computer,
  Cpu,
  HardDrive,
  Keyboard,
  MemoryStick,
  Monitor,
  CircuitBoard,
  type LucideIcon,
} from "lucide-react";

/**
 * Featured product categories.
 * No prices, stock levels or ratings by design — the site always invites
 * the visitor to request a quote instead.
 */
export const PRODUCT_CATEGORIES: {
  icon: LucideIcon;
  name: string;
  description: string;
}[] = [
  {
    icon: Cpu,
    name: "Processors",
    description: "Latest CPUs for work, gaming and performance builds.",
  },
  {
    icon: CircuitBoard,
    name: "Motherboards",
    description: "Boards for every platform and budget.",
  },
  {
    icon: MemoryStick,
    name: "RAM & SSD",
    description: "Memory and fast storage upgrades for any system.",
  },
  {
    icon: HardDrive,
    name: "Graphics Cards",
    description: "GPUs for gaming, design and compute workloads.",
  },
  {
    icon: Monitor,
    name: "Monitors",
    description: "Displays for office, creative and gaming setups.",
  },
  {
    icon: Keyboard,
    name: "Accessories",
    description: "Keyboards, mice, webcams, printers, UPS and more.",
  },
  {
    icon: Cable,
    name: "Networking Products",
    description: "Routers, switches, cables and network accessories.",
  },
  {
    icon: Computer,
    name: "Desktops & Laptops",
    description: "Ready systems and custom-built machines.",
  },
];
