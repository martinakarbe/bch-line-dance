import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact/contact-form";
import {
  ExternalLink,
  MapPin,
  Calendar,
  Heart,
  BadgeCheck,
  Home,
  Map,
  Mail,
  Sparkles,
  Footprints,
  Shirt,
  Droplets,
  Smile,
  Backpack,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Mitmachen",
  description: "Kontaktiere die BCH Line Dancer - wir freuen uns auf dich!",
};

interface InfoCard {
  icon: LucideIcon;
  title: string;
  content: string;
  subtext: string;
}

const infoCards: InfoCard[] = [
  {
    icon: MapPin,
    title: "Trainingsort",
    content: "Mehrgenerationenhaus",
    subtext: "Buchen (Odenwald)",
  },
  {
    icon: Calendar,
    title: "Trainingszeiten",
    content: "Wöchentlich",
    subtext: "Siehe Kalender",
  },
  {
    icon: Heart,
    title: "Für alle offen",
    content: "Anfänger willkommen",
    subtext: "Keine Vorkenntnisse nötig",
  },
  {
    icon: BadgeCheck,
    title: "100% Kostenlos",
    content: "Nur Spaß zählt",
    subtext: "Keine Gebühren!",
  },
];

interface WhatToBring {
  icon: LucideIcon;
  text: string;
}

const whatToBring: WhatToBring[] = [
  { icon: Footprints, text: "Bequeme Schuhe (glatte Sohle ideal)" },
  { icon: Shirt, text: "Bequeme Kleidung zum Bewegen" },
  { icon: Droplets, text: "Eine Flasche Wasser" },
  { icon: Smile, text: "Gute Laune!" },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20 bg-[#f5e6d3] overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-[#b45309] px-4 py-2 rounded-full mb-6">
              <Heart className="w-5 h-5 text-[#fef3c7]" />
              <span className="text-[#fef3c7] font-medium">
                Wir freuen uns auf dich!
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl text-[#3d2314] mb-6 text-balance">
              Komm vorbei!
            </h1>
            <p className="text-xl text-[#78350f] max-w-2xl mx-auto leading-relaxed">
              Du möchtest mitmachen oder hast Fragen? Schreib uns einfach - wir
              antworten schnell!
            </p>
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-8 bg-[#fdf6ee] border-b-4 border-[#d4a574]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {infoCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-[#fff9f2] rounded-xl border-2 border-[#d4a574] p-4 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#b45309] rounded-full flex items-center justify-center mx-auto mb-2">
                    <card.icon className="w-6 h-6 text-[#fef3c7]" />
                  </div>
                  <h3 className="text-sm font-medium text-[#92400e]">
                    {card.title}
                  </h3>
                  <p className="font-serif text-lg text-[#3d2314]">
                    {card.content}
                  </p>
                  <p className="text-xs text-[#78350f]">{card.subtext}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 lg:py-20 bg-[#fdf6ee]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Additional Info */}
              <div>
                <h2 className="font-serif text-3xl text-[#3d2314] mb-2 flex items-center gap-3">
                  <MapPin className="w-7 h-7 text-[#b45309]" /> So findest du
                  uns
                </h2>
                <p className="text-[#78350f] mb-8">
                  Unser Training findet im Mehrgenerationenhaus statt.
                </p>

                <div className="space-y-4">
                  {/* Location card */}
                  <div className="bg-[#fff9f2] rounded-xl border-3 border-[#d4a574] p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-[#15803d] rounded-full flex items-center justify-center">
                        <Home className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-serif text-xl text-[#3d2314]">
                          Mehrgenerationenhaus
                        </p>
                        <p className="text-[#78350f] text-sm">
                          Buchen (Odenwald)
                        </p>
                      </div>
                    </div>
                    <a
                      href="https://www.google.com/maps/search/Mehrgenerationenhaus+Buchen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#b45309] hover:text-[#78350f] font-medium text-sm"
                    >
                      <Map className="w-4 h-4" />
                      In Google Maps öffnen
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  {/* First visit tip */}
                  <div className="bg-[#b45309]/10 rounded-xl border-3 border-[#b45309] p-5">
                    <h3 className="font-serif text-xl text-[#3d2314] mb-3 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#b45309]" /> Erster
                      Besuch?
                    </h3>
                    <p className="text-[#78350f] leading-relaxed">
                      Super! Du brauchst keine Vorkenntnisse. Komm einfach
                      vorbei, schau zu oder mach direkt mit. Wir zeigen dir
                      alles!
                    </p>
                  </div>

                  {/* What to bring */}
                  <div className="bg-[#fff9f2] rounded-xl border-3 border-[#d4a574] p-5">
                    <h3 className="font-serif text-xl text-[#3d2314] mb-4 flex items-center gap-2">
                      <Backpack className="w-5 h-5 text-[#b45309]" /> Was du
                      mitbringen solltest
                    </h3>
                    <ul className="space-y-2">
                      {whatToBring.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 text-[#78350f]"
                        >
                          <item.icon className="w-5 h-5 text-[#b45309]" />
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
