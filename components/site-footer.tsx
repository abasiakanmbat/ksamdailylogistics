import Link from "next/link";
import { Mail, MapPinned, Phone } from "lucide-react";
import { footerQuickLinks, footerServices, navItems, siteConfig } from "@/lib/content";

export function SiteFooter() {
  const pageLinkMap = new Map(navItems.map((item) => [item.label.toLowerCase(), item.href]));

  return (
    <footer className="bg-[#071428] text-white">
      <div className="container-shell py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr_1fr_1fr]">
          <div>
            <h3 className="text-2xl font-semibold text-white">{siteConfig.name}</h3>
            <p className="mt-6 max-w-sm text-lg leading-9 text-slate-300">
              Your trusted partner for reliable, efficient, and cost-effective logistics solutions across the region.
            </p>
          </div>

          <div>
            <p className="text-2xl font-semibold text-white">Quick Links</p>
            <div className="mt-6 space-y-4">
              {footerQuickLinks.map((label) => {
                const href = pageLinkMap.get(label.toLowerCase()) ?? "#";
                return (
                  <Link key={label} href={href} className="block text-lg text-slate-300 transition hover:text-white">
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-2xl font-semibold text-white">Services</p>
            <div className="mt-6 space-y-4 text-lg text-slate-300">
              {footerServices.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-2xl font-semibold text-white">Contact Info</p>
            <div className="mt-6 space-y-5 text-lg text-slate-300">
              <div className="flex items-start gap-4">
                <MapPinned className="mt-1 h-6 w-6 flex-none text-slate-400" />
                <p>{siteConfig.address}</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 flex-none text-slate-400" />
                <p>{siteConfig.phone}</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 flex-none text-slate-400" />
                <p>{siteConfig.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2024 {siteConfig.name}. All rights reserved.</p>
            <div className="flex items-center gap-8">
              <Link href="#" className="transition hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="transition hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
