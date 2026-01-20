import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Calendar,
  Clock,
  MapPin,
  Home,
  Map,
  Mail,
  HelpCircle,
  Plus,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Termine",
  description:
    "Finde heraus, wann und wo die BCH Line Dancer trainieren. Unser Kalender zeigt alle kommenden Termine.",
};

interface ScheduleItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const scheduleInfo: ScheduleItem[] = [
  {
    icon: Calendar,
    title: "Regelmäßiges Training",
    description: "Wir treffen uns jede Woche zum gemeinsamen Tanzen.",
    color: "bg-[#15803d]",
  },
  {
    icon: Clock,
    title: "Trainingszeiten",
    description: "Alle aktuellen Zeiten im Kalender unten!",
    color: "bg-[#b45309]",
  },
  {
    icon: MapPin,
    title: "Trainingsort",
    description: "Mehrgenerationenhaus Buchen",
    color: "bg-[#1e40af]",
  },
];

export default function SchedulePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20 bg-[#f5e6d3] overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-[#b45309] px-4 py-2 rounded-full mb-6">
              <Calendar className="w-5 h-5 text-[#fef3c7]" />
              <span className="text-[#fef3c7] font-medium">
                Wann gehts los?
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl text-[#3d2314] mb-6 text-balance">
              Unsere Termine
            </h1>
            <p className="text-xl text-[#78350f] max-w-2xl mx-auto leading-relaxed">
              Schau in unseren Kalender und komm vorbei, wenn es dir passt!
            </p>
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-12 bg-[#fdf6ee]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {scheduleInfo.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#fff9f2] rounded-xl border-3 border-[#d4a574] p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div
                    className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-serif text-xl text-[#3d2314] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#78350f]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="py-12 lg:py-16 bg-[#f5e6d3]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl text-[#3d2314] mb-2 flex items-center justify-center gap-3">
                <Calendar className="w-8 h-8 text-[#b45309]" /> Unser Kalender
              </h2>
              <p className="text-[#78350f]">Alle Termine im Überblick</p>
            </div>

            {/* Google Calendar Embed */}
            <div className="bg-[#fff9f2] rounded-2xl border-4 border-[#8b5a2b] overflow-hidden shadow-xl max-w-5xl mx-auto">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=bchlinedancer%40gmail.com&ctz=Europe%2FBerlin&showTitle=0&showNav=1&showPrint=0&showTabs=1&showCalendars=0&mode=MONTH"
                className="w-full h-[500px] md:h-[600px] border-0"
                title="BCH Line Dancer Kalender"
                loading="lazy"
              />
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-[#78350f] bg-[#fff9f2] px-4 py-2 rounded-full border border-[#d4a574]">
                <Clock className="w-4 h-4 text-[#b45309]" />
                <span>Zeitzone: Mitteleuropäische Zeit (Berlin)</span>
              </div>
              <a
                href="https://calendar.google.com/calendar/u/0?cid=YmNobGluZWRhbmNlckBnbWFpbC5jb20"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#b45309] hover:text-[#78350f] font-medium"
              >
                <Plus className="w-4 h-4" />
                Zu Google Kalender hinzufügen
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 lg:py-20 bg-[#fdf6ee]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-serif text-4xl text-[#3d2314] mb-6 flex items-center gap-3">
                    <MapPin className="w-8 h-8 text-[#b45309]" /> Wo wir tanzen
                  </h2>
                  <p className="text-lg text-[#78350f] leading-relaxed mb-6">
                    Wir trainieren im{" "}
                    <strong className="text-[#3d2314]">
                      Mehrgenerationenhaus in Buchen
                    </strong>{" "}
                    - ein wunderbarer Ort mit viel Platz zum Tanzen!
                  </p>

                  {/* Location card */}
                  <div className="bg-[#fff9f2] border-3 border-[#d4a574] rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#15803d] rounded-full flex items-center justify-center">
                        <Home className="w-5 h-5 text-white" />
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
                </div>

                {/* Map placeholder */}
                <div className="bg-[#f5e6d3] rounded-2xl border-3 border-[#d4a574] aspect-square flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-16 bg-[#b45309] rounded-full flex items-center justify-center mb-4">
                    <Map className="w-8 h-8 text-[#fef3c7]" />
                  </div>
                  <p className="text-[#78350f] font-medium mb-2">
                    Mehrgenerationenhaus Buchen
                  </p>
                  <p className="text-[#92400e] text-sm mb-4">
                    Buchen (Odenwald), Deutschland
                  </p>
                  <a
                    href="https://www.google.com/maps/search/Mehrgenerationenhaus+Buchen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#b45309] hover:bg-[#92400e] text-[#fef3c7] font-bold px-4 py-2 rounded-full text-sm transition-colors"
                  >
                    Route planen →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#3d2314]">
          <div className="container mx-auto px-4 text-center">
            <div className="w-16 h-16 bg-[#5c4033] rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-[#d4a574]" />
            </div>
            <h2 className="font-serif text-3xl text-[#f5d076] mb-4">
              Fragen zu den Terminen?
            </h2>
            <p className="text-[#d4a574] mb-8 max-w-md mx-auto">
              Kein Problem! Schreib uns einfach - wir helfen dir gerne weiter.
            </p>
            <Link href="/contact">
              <Button className="bg-[#b45309] hover:bg-[#92400e] text-[#fef3c7] font-bold text-lg px-8 py-6 rounded-full border-3 border-[#d4a574] shadow-lg">
                <Mail className="w-5 h-5 mr-2" />
                Kontakt aufnehmen
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
