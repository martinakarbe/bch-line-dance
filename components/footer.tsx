import Link from "next/link";
import {
  MapPin,
  Mail,
  Youtube,
  Heart,
  ExternalLink,
  Music,
  Star,
} from "lucide-react";
import { getObfuscatedContactEmail } from "@/lib/contact-email";

const quickLinks = [
  { href: "/about", label: "Wer wir sind" },
  { href: "/schedule", label: "Termine" },
  { href: "/dances", label: "Unsere Tänze" },
  { href: "/resources", label: "Links & Tipps" },
];

const legalLinks = [
  { href: "/imprint", label: "Impressum" },
  { href: "/privacy", label: "Datenschutz" },
];

export function Footer() {
  return (
    <footer className="mt-auto">
      {/* Decorative top border - barn wood pattern */}
      <div className="h-4 bg-[repeating-linear-gradient(90deg,#8b5a2b_0px,#8b5a2b_30px,#6b4423_30px,#6b4423_32px,#8b5a2b_32px,#8b5a2b_60px)]" />

      <div className="bg-[#3d2314]">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* About Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-[#b45309] rounded-full flex items-center justify-center border-4 border-[#d4a574] shadow-lg">
                  <Music className="w-7 h-7 text-[#fef3c7]" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-[#f5d076]">
                    Buchens Multi-Generation Line Dancer
                  </h3>
                  <p className="text-[#d4a574] text-sm">Buchen (Odenwald)</p>
                </div>
              </div>
              <p className="text-[#d4a574] leading-relaxed mb-6 max-w-md">
                Wir sind eine fröhliche Truppe von Line Dance Fans, die sich zum
                gemeinsamen Tanzen und Lachen treffen. Keine Kurse, kein Druck -
                nur pure Freude an der Bewegung zur Musik!
              </p>
              <div className="inline-flex items-center gap-2 bg-[#5c4033] px-4 py-2 rounded-full">
                <Heart className="w-4 h-4 text-[#dc2626] fill-current" />
                <span className="text-[#f5d076] font-medium text-sm">
                  Just for fun - seit Jahren!
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-xl text-[#f5d076] mb-4 flex items-center gap-2">
                <Star className="w-4 h-4 text-[#b45309]" /> Schnellzugriff
              </h4>
              <nav aria-label="Footer Navigation">
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[#d4a574] hover:text-[#fef3c7] transition-colors flex items-center gap-2 group py-1"
                      >
                        <span className="text-[#b45309] opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </span>
                        <span className="group-hover:translate-x-1 transition-transform">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif text-xl text-[#f5d076] mb-4 flex items-center gap-2">
                <Star className="w-4 h-4 text-[#b45309]" /> So findest du uns
              </h4>
              <ul className="space-y-4">
                <li>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#5c4033] rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#b45309]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#fef3c7]">
                        Mehrgenerationenhaus
                      </p>
                      <p className="text-sm text-[#d4a574]">
                        Buchen (Odenwald)
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@bchlinedancer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-8 h-8 bg-[#5c4033] rounded-lg flex items-center justify-center group-hover:bg-[#dc2626] transition-colors">
                      <Youtube className="w-4 h-4 text-[#dc2626] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[#d4a574] group-hover:text-[#fef3c7] transition-colors flex items-center gap-1">
                      YouTube Kanal
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#5c4033] rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-[#b45309]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#fef3c7]">E-Mail</p>
                      <p className="text-sm text-[#d4a574]">
                        {getObfuscatedContactEmail()}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider - rope style */}
          <div className="my-10 flex items-center gap-4">
            <div className="flex-1 h-px bg-[#5c4033]" />
            <div className="flex gap-2">
              <Star className="w-4 h-4 text-[#b45309]" />
              <Star className="w-4 h-4 text-[#d4a574]" />
              <Star className="w-4 h-4 text-[#b45309]" />
            </div>
            <div className="flex-1 h-px bg-[#5c4033]" />
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="flex items-center gap-2 text-[#92400e]">
              Mit <Heart className="w-4 h-4 text-[#dc2626] fill-current" />{" "}
              gemacht in Buchen
            </p>
            <nav aria-label="Rechtliches">
              <ul className="flex items-center gap-6">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#92400e] hover:text-[#d4a574] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="text-[#92400e]">
              © {new Date().getFullYear()} Buchens Multi-Generation Line Dancer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
