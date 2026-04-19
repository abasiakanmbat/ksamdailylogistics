import type { LucideIcon } from "lucide-react";
import {
  Bike,
  Boxes,
  Building2,
  Clock3,
  Container,
  FileText,
  Globe2,
  Mail,
  MapPinned,
  PackageCheck,
  Phone,
  Refrigerator,
  ShieldCheck,
  Truck,
  Users,
  Warehouse,
  Zap,
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Fleet" },
];

export const siteConfig = {
  name: "Kamdan Sameday Logistics",
  shortName: "KSL",
  tagline: "Fast same-day delivery across the UK",
  phone: "07717 277225",
  email: "info@ksamedaylogistics.com",
  address: "50 Novers Park Drive, Bristol, United Kingdom BS4 1RQ",
};

export const heroHighlights = [
  "Same-day collection and delivery",
  "Bike, van, and truck options",
  "Tracked movement from pickup to drop-off",
  "Business and specialist logistics support",
];

export const heroSupportCards = [
  {
    title: "Our mission",
    text: "To make logistics in the UK faster, smarter, and more reliable through technology, professionalism, and dedicated service.",
  },
  {
    title: "Our vision",
    text: "To become the UK’s most trusted same-day delivery partner for individuals and businesses of all sizes.",
  },
  {
    title: "Our promise",
    text: "Every job gets the right vehicle, clear updates, and careful handling from collection to delivery.",
  },
];

export const coreStats = [
  {
    value: "Within the hour",
    label: "Fast pickup in your area for urgent delivery requests.",
  },
  {
    value: "Tracked delivery",
    label: "GPS visibility and live updates for peace of mind.",
  },
  {
    value: "Bike, van, or truck",
    label: "Flexible fleet choices for documents, parcels, and bulk loads.",
  },
];

export const serviceCards: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Same-day delivery",
    description: "Fast collection and direct movement for urgent consignments that need to arrive the same day.",
    icon: Zap,
  },
  {
    title: "Multi-drop delivery",
    description: "Optimized routing for businesses that need several stops completed efficiently and on schedule.",
    icon: Boxes,
  },
  {
    title: "Temperature-controlled support",
    description: "Chilled, frozen, and ambient goods handled with extra care across planned and urgent jobs.",
    icon: Refrigerator,
  },
  {
    title: "Two-man delivery",
    description: "Extra handling support for large, awkward, or high-value items that need more than one person.",
    icon: Users,
  },
  {
    title: "Dedicated courier runs",
    description: "Direct collection and delivery without unnecessary stops, delays, or shared loading.",
    icon: PackageCheck,
  },
  {
    title: "Planned routes",
    description: "Reliable support for recurring business deliveries, scheduled collections, and repeat movements.",
    icon: Clock3,
  },
];

export const whyChooseUs: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Lightning-fast service",
    description: "Same-day delivery across the UK with vehicles ready to move at short notice.",
    icon: Zap,
  },
  {
    title: "Real-time tracking",
    description: "Know where your delivery is at every stage with clear GPS-backed updates.",
    icon: Globe2,
  },
  {
    title: "Fully insured and secure",
    description: "Professional handling, secure transport, and insurance support on every trip.",
    icon: ShieldCheck,
  },
  {
    title: "Dedicated support",
    description: "A responsive team that helps with quotes, dispatch updates, and ongoing delivery questions.",
    icon: Phone,
  },
];

export const homeValuePillars: Array<{
  title: string;
  description: string;
}> = [
  {
    title: "Complete logistics solutions",
    description: "From urgent same-day jobs to planned routes and specialist vehicles, every movement is matched to your load and timeline.",
  },
  {
    title: "Fast and efficient deliveries",
    description: "We collect quickly, communicate clearly, and keep every delivery moving with minimal friction.",
  },
  {
    title: "Reliable and trusted",
    description: "Businesses choose Kamdan for dependable service, clear pricing, and careful handling on every run.",
  },
  {
    title: "Dedicated drivers",
    description: "Your goods move from pickup to destination with trained riders and drivers focused on the job in front of them.",
  },
];

export const industries = [
  "Retail & eCommerce",
  "Construction",
  "Aviation",
  "Hospitality",
  "Farming & Horticulture",
  "Marketing & Print",
  "Pharmaceutical & Medical",
  "Film & Production",
  "Haulage",
  "Events",
  "Professional Services",
  "Manufacturing",
  "Education",
  "Artists & Antiques",
  "Utilities",
];

export const faqs = [
  {
    question: "What is a dedicated same-day courier service?",
    answer:
      "It means your consignment is collected and moved directly to its destination without being mixed into a broader shared route.",
  },
  {
    question: "What is your fastest courier service?",
    answer:
      "Our same-day service is built for urgent bookings, with rapid collection and direct delivery using the right vehicle size for the load.",
  },
  {
    question: "How do I book a delivery with Kamdan Sameday Logistics?",
    answer:
      "Share your pickup point, drop-off point, delivery window, and load details. Our team will match the right vehicle and quote for the job.",
  },
  {
    question: "How much notice do you need?",
    answer:
      "Urgent jobs can often be arranged quickly. Larger, specialist, or multi-stop deliveries benefit from a little more planning time.",
  },
  {
    question: "What can you transport?",
    answer:
      "We support documents, parcels, fragile items, eCommerce loads, multi-drop deliveries, bulk consignments, and selected specialist movements.",
  },
];

export const aboutIntro = {
  heading: "Built for speed, reliability, and trust.",
  body:
    "Kamdan Sameday Logistics is a UK-based logistics company focused on fast, secure, and affordable delivery services for businesses and individuals. Our goal is simple: move your shipment from point A to point B the same day, without excuses.",
};

export const missionVision = [
  {
    title: "Our mission",
    description:
      "To make logistics in the UK faster, smarter, and more reliable through technology, professionalism, and dedication to customer satisfaction.",
  },
  {
    title: "Our vision",
    description:
      "To become the UK’s most trusted same-day delivery partner for individuals and businesses of all sizes.",
  },
];

export const whatWeDo: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Same-day delivery",
    description: "Fast and reliable door-to-door delivery within the same day.",
    icon: Zap,
  },
  {
    title: "Nationwide delivery",
    description: "Secure movement of goods across UK regions with clear tracking updates.",
    icon: Globe2,
  },
  {
    title: "E-commerce delivery",
    description: "Flexible support for online stores and growing small businesses.",
    icon: PackageCheck,
  },
  {
    title: "Corporate logistics",
    description: "Tailored logistics services for companies with regular delivery needs.",
    icon: Building2,
  },
  {
    title: "Express dispatch",
    description: "Quick pickups and drop-offs for urgent business or personal requests.",
    icon: Bike,
  },
  {
    title: "Storage support",
    description: "Safe short-term storage before dispatch where needed.",
    icon: Warehouse,
  },
];

export const aboutReasons = [
  "Fast, efficient, and always on time.",
  "Real-time tracking and instant updates.",
  "Affordable pricing with no hidden charges.",
  "Professional riders and well-trained dispatch agents.",
  "Excellent customer support available every day.",
];

export const servicesIntro = {
  heading: "Logistics services that fit the load.",
  body:
    "We deliver small parcels, fragile items, routine business consignments, and bulk loads using the right vehicle for each job.",
};

export const servicesPageCards: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Courier services",
    description:
      "A trusted same-day courier service built to move urgent documents, parcels, fragile items, and time-sensitive business deliveries quickly and securely.",
    icon: FileText,
  },
  {
    title: "Specialist services",
    description:
      "Support for irregular loads, sensitive consignments, high-value goods, and jobs that need careful handling or specialist delivery planning.",
    icon: Container,
  },
  {
    title: "Storage and route support",
    description:
      "Short-term storage, repeat routes, and tailored logistics support for businesses that need more than a one-off courier run.",
    icon: Warehouse,
  },
];

export const fleetIntro = {
  heading: "A fleet built for speed, safety, and efficiency.",
  body:
    "Our fleet is maintained to a high standard and equipped to give customers reliable movement, clear visibility, and the right vehicle for every load size.",
};

export const fleetOptions: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Motorbikes",
    description: "Perfect for urgent documents and small parcels that need to move fast through busy urban areas.",
    icon: Bike,
  },
  {
    title: "Vans",
    description: "Ideal for medium-sized packages, scheduled business runs, and multiple-drop deliveries.",
    icon: Truck,
  },
  {
    title: "Truck fleet",
    description: "Designed for bulk consignments, larger shipments, and professional long-haul logistics work.",
    icon: Container,
  },
];

export const fleetReasons = [
  "GPS tracking and 24/7 monitoring.",
  "Regular maintenance and inspection.",
  "Professional, trained drivers.",
  "Insurance support on every trip.",
  "Nationwide and regional service reach.",
];

export const footerQuickLinks = [
  "Home",
  "Services",
  "Fleet",
  "About Us",
  "Contact",
];

export const footerServices = [
  "Freight Transportation",
  "Warehousing & Storage",
  "Express Delivery",
  "Customs Clearance",
  "Supply Chain Solutions",
];

export const contactCards = [
  {
    title: "Address",
    value: siteConfig.address,
    icon: MapPinned,
  },
  {
    title: "Phone",
    value: siteConfig.phone,
    icon: Phone,
  },
  {
    title: "Email",
    value: siteConfig.email,
    icon: Mail,
  },
];
