import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import Navigation from "@/components/Navigation";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "KSA M Day Logistics - Reliable Transportation & Logistics Solutions",
//   description: "Your trusted partner for reliable, efficient, and cost-effective logistics solutions across the region. Freight transportation, warehousing, express delivery, and more.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
//     >
//       <body className="min-h-full flex flex-col">
//         <Navigation />
//         <main className="flex-1">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }


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
    <html lang="en" data-scroll-behavior="smooth">
      <body className="min-h-screen bg-slate-50 text-slate-950 antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
