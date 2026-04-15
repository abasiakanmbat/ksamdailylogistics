import Link from "next/link";
import { navItems, siteConfig } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#031020] backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#7ed38a] text-sm font-black tracking-[0.16em] text-[#031020] shadow-soft">
            {siteConfig.shortName}
          </div>
          <div>
            <p className="text-sm font-semibold text-white sm:text-base">{siteConfig.name}</p>
            <p className="text-xs text-slate-300">{siteConfig.tagline}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/fleet#quote-form"
          className="inline-flex items-center rounded-full bg-[#7ed38a] px-5 py-2.5 text-sm font-semibold text-[#031020] transition hover:bg-[#98dfa1]"
        >
          Get a quote
        </Link>
      </div>
    </header>
  );
}
