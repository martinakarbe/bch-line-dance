"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, Music, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Start" },
  { href: "/about", label: "Wer wir sind" },
  { href: "/schedule", label: "Termine" },
  { href: "/dances", label: "Unsere Tänze" },
  { href: "/resources", label: "Links & Tipps" },
  { href: "/contact", label: "Mitmachen" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (!menuRef.current) return;
      const target = event.target as Node | null;
      if (target && !menuRef.current.contains(target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* Decorative rope/wood border top */}
      <div className="h-2 bg-[repeating-linear-gradient(90deg,#d4a574_0px,#d4a574_10px,#8b5a2b_10px,#8b5a2b_20px)]" />

      <div className="bg-[#f5e6d3] border-b-4 border-[#8b5a2b] shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 md:gap-3 group">
              <div className="relative">
                <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <img
                    src="/images/logo.png"
                    alt="Buchens Multi-Generation Line Dancer"
                  />
                </div>
              </div>
              <div>
                <h1 className="font-serif text-xl md:text-2xl lg:text-3xl text-[#78350f] leading-tight tracking-wide drop-shadow-sm">
                  Buchens Multi-Generation Line Dancer
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation (disabled, navigation via burger menu) */}
            <nav className="hidden" aria-label="Hauptnavigation">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Menu Button (all breakpoints) */}
            <div className="flex items-center gap-2">
              <Link href="/contact" className="hidden sm:block">
                <Button className="bg-[#b45309] hover:bg-[#92400e] text-[#fef3c7] font-bold px-4 py-2 rounded-full border-2 border-[#78350f] shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 hover:scale-105">
                  Komm vorbei!
                </Button>
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-[#78350f] hover:bg-[#faebd7] rounded-lg transition-colors"
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
              >
                {isMenuOpen ? (
                  <X className="w-7 h-7" />
                ) : (
                  <Menu className="w-7 h-7" />
                )}
              </button>
            </div>
          </div>

          {/* Navigation Dropdown */}
          <div
            ref={menuRef}
            className={cn(
              // Mobile: slide down under header
              "overflow-hidden transition-all duration-300",
              isMenuOpen ? "max-h-96 pb-4" : "max-h-0",
            )}
          >
            <nav
              className={cn(
                "border-t-2 border-dashed border-[#d4a574] pt-4",
                "lg:border-t-0 lg:border-2 lg:border-[#d4a574] lg:rounded-2xl lg:shadow-lg lg:bg-[#fff9f2]",
                // Desktop: dropdown panel under the header, right-aligned near the burger
                "lg:absolute lg:right-4 lg:top-20 lg:w-auto lg:inline-block lg:origin-top-right lg:transition lg:duration-200",
                isMenuOpen
                  ? "lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto"
                  : "lg:opacity-0 lg:-translate-y-2 lg:pointer-events-none",
              )}
              aria-label="Mobile Navigation"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 text-[#78350f] font-semibold hover:bg-[#faebd7] rounded-lg flex items-center gap-3 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-[#b45309]" />
                    {item.label}
                  </Link>
                ))}
                <div className="sm:hidden pt-3 px-4">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-[#b45309] hover:bg-[#92400e] text-[#fef3c7] font-bold py-3 rounded-full border-2 border-[#78350f]">
                      Komm vorbei!
                    </Button>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Decorative bottom wood grain line */}
      <div className="h-1 bg-[#5c4033] shadow-inner" />
    </header>
  );
}
