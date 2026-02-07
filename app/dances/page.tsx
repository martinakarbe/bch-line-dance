import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DanceTable } from "@/components/dances/dance-table";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  ListMusic,
  Lightbulb,
  BarChart3,
  Users2,
  Link2,
  Target,
  List,
  Footprints,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Unsere Tänze",
  description:
    "Entdecke alle Tänze von Buchens Multi-Generation Line Dancer - von Anfänger bis Fortgeschritten, mit Links zu Videos und Stepsheets.",
};

export default function DancesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-8 lg:py-8 bg-[#f5e6d3] overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-[#b45309] px-4 py-2 rounded-full mb-6">
              <ListMusic className="w-5 h-5 text-[#fef3c7]" />
              <span className="text-[#fef3c7] font-medium">
                Unsere Tanzsammlung
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl text-[#3d2314] mb-6 text-balance">
              Unsere Tänze von A-Z
            </h1>
            <p className="text-xl text-[#78350f] max-w-2xl mx-auto leading-relaxed">
              Alle Tänze, die wir bei unseren Treffen tanzen - mit Videos und
              Stepsheets zum Nachschauen und Üben!
            </p>
          </div>
        </section>

        {/* Tip Banner */}
        <section className="bg-[#fdf6ee] py-6 border-b-4 border-[#d4a574]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row w-full md:w-1/2items-center justify-between gap-4 bg-[#fff9f2] p-4 rounded-xl border-2 border-[#d4a574]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#15803d] rounded-full flex items-center justify-center shrink-0">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#3d2314]">
                    Neu beim Line Dance?
                  </p>
                  <p className="text-sm text-[#78350f]">
                    Starte mit den <a href="/resources">Grundschritten</a> und
                    nebenher mit den Beginner-Tänzen (nutze die Filter neben/unter der
                    Suchleiste) und schau dir unsere YouTube-Tutorials an!
                  </p>
                </div>
              </div>
              <Link href="/resources">
                <Button className="bg-[#b45309] hover:bg-[#92400e] text-[#fef3c7] font-bold px-6 py-2 rounded-full border-2 border-[#78350f]">
                  Zu den Tutorials →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Dance Table Section */}
        <section className="py-12 lg:py-16 bg-[#fdf6ee]">
          <div className="container mx-auto px-4">
            <DanceTable />
          </div>
        </section>

        {/* Legend Section */}
        <section className="py-12 lg:py-16 bg-[#f5e6d3]">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl text-[#3d2314] mb-8 text-center flex items-center justify-center gap-3">
              <BarChart3 className="w-7 h-7 text-[#b45309]" /> Gut zu wissen
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {/* Levels */}
              <div className="bg-[#fff9f2] rounded-xl p-5 border-2 border-[#d4a574]">
                <h3 className="font-semibold text-[#3d2314] mb-3 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#b45309]" />{" "}
                  Schwierigkeitsgrade
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="inline-flex h-3 w-3 rounded-full bg-[#15803d]" />
                    <span className="text-[#78350f]">
                      Beginner - Einsteiger
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-flex h-3 w-3 rounded-full bg-[#1e40af]" />
                    <span className="text-[#78350f]">
                      Improver - Aufsteiger
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-flex h-3 w-3 rounded-full bg-[#b45309]" />
                    <span className="text-[#78350f]">
                      Intermediate - Mittel
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-flex h-3 w-3 rounded-full bg-[#dc2626]" />
                    <span className="text-[#78350f]">Advanced - Profi</span>
                  </li>
                </ul>
              </div>

              {/* Dance Types */}
              <div className="bg-[#fff9f2] rounded-xl p-5 border-2 border-[#d4a574]">
                <h3 className="font-semibold text-[#3d2314] mb-3 flex items-center gap-2">
                  <List className="w-5 h-5 text-[#b45309]" /> Legende
                </h3>
                <ul className="space-y-2 text-sm text-[#78350f]">
                  <li className="flex items-center gap-2">
                    <Users2 className="w-4 h-4 text-[#92400e]" /> Paartanz - Mit
                    Partner
                  </li>
                  <li className="flex items-center gap-2">
                    <Footprints className="w-4 h-4 text-[#92400e]" /> Counts
                  </li>
                  <li className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#92400e]" /> Walls
                  </li>
                </ul>
              </div>

              {/* External Links */}
              <div className="bg-[#fff9f2] rounded-xl p-5 border-2 border-[#d4a574]">
                <h3 className="font-semibold text-[#3d2314] mb-3 flex items-center gap-2">
                  <Link2 className="w-5 h-5 text-[#b45309]" /> Stepsheet-Seiten
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="https://get-in-line.de/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#b45309] hover:underline font-medium"
                    >
                      Get-in-Line
                      <ExternalLink className="h-3 w-3" />
                    </a>{" "}
                    - unsere bevorzugte Stepsheet-Seite
                  </li>
                  <li>
                    <a
                      href="https://www.copperknob.co.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#b45309] hover:underline font-medium"
                    >
                      CopperKnob
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.kickit.to/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#b45309] hover:underline font-medium"
                    >
                      Kickit
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Tips */}
              <div className="bg-[#fff9f2] rounded-xl p-5 border-2 border-[#d4a574]">
                <h3 className="font-semibold text-[#3d2314] mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#b45309]" /> Übungstipps
                </h3>
                <p className="text-sm text-[#78350f]">
                  Schau dir die Videos an und übe in deinem Tempo. Bei Fragen
                  helfen wir dir beim Training!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
