"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, siteConfig } from "@/lib/content";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="cq-header sticky top-0 z-50 border-b border-white/10 bg-[#031020] backdrop-blur-xl">
      <div className="container-shell site-header-shell">
        <Link href="/" onClick={closeMenu} className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#7ed38a] text-sm font-black tracking-[0.16em] text-[#031020] shadow-soft">
            {siteConfig.shortName}
          </div>
          <div className="site-header-brand-wrap">
            <p className="site-header-brand truncate">{siteConfig.name}</p>
            <p className="site-header-tagline truncate">{siteConfig.tagline}</p>
          </div>
        </Link>

        <nav className="site-header-nav" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/fleet#quote-form" className="site-header-cta" onClick={closeMenu}>
            Get a quote
          </Link>
          <button
            type="button"
            className="site-header-toggle"
            aria-controls="site-mobile-nav"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div id="site-mobile-nav" className={`site-header-drawer${isOpen ? " is-open" : ""}`}>
        <div className="site-header-drawer-inner">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="site-header-drawer-link"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/fleet#quote-form" onClick={closeMenu} className="site-header-drawer-cta">
            Get a quote
          </Link>
        </div>
      </div>
    </header>
  );
}
