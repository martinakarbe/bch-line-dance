"use client";

import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50">
      {/* Decorative rope/wood border top */}
      <div className="h-2 bg-[repeating-linear-gradient(90deg,#d4a574_0px,#d4a574_10px,#8b5a2b_10px,#8b5a2b_20px)]" />

      <div className="bg-[#f5e6d3] border-b-4 border-[#8b5a2b] shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-14 h-14  rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <img
                    src="/icon.png"
                    alt="Buchen More-Generation Line Dancer"
                  />
                </div>
              </div>
              <div>
                <h1 className="font-serif text-2xl md:text-3xl text-[#78350f] leading-none tracking-wide drop-shadow-sm">
                  BCH Line Dancer
                </h1>
                <p className="text-xs text-[#92400e] font-bold tracking-[0.2em] uppercase">
                  Buchen tanzt!
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Hauptnavigation"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-[#78350f] font-semibold hover:text-[#b45309] hover:bg-[#faebd7] rounded-lg transition-all relative group"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#b45309] group-hover:w-3/4 transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* CTA Button Desktop */}
            <div className="hidden lg:block">
              <Link href="/contact">
                <Button className="bg-[#b45309] hover:bg-[#92400e] text-[#fef3c7] font-bold px-6 py-2 rounded-full border-2 border-[#78350f] shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 hover:scale-105">
                  Komm vorbei!
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#78350f] hover:bg-[#faebd7] rounded-lg transition-colors"
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

          {/* Mobile Navigation */}
          <div
            className={cn(
              "lg:hidden overflow-hidden transition-all duration-300",
              isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
            )}
          >
            <nav
              className="border-t-2 border-dashed border-[#d4a574] pt-4"
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
                <div className="pt-3 px-4">
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
