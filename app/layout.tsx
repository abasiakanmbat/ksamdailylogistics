import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kamdan Sameday Logistics",
    template: "%s | Kamdan Sameday Logistics",
  },
  description:
    "Fast same-day delivery across the UK for parcels, business logistics, planned routes, and specialist transport.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} data-scroll-behavior="smooth">
      <body className="cq-page min-h-screen bg-slate-50 text-slate-950 antialiased">
        <SiteHeader />
        <main className="min-w-0">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
