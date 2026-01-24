import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Users,
  Target,
  MapPin,
  BookOpen,
  Sparkles,
  Calendar,
  Hand,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Wer wir sind",
  description:
    "Erfahre mehr über Buchens Multi-Generation Line Dancer - eine fröhliche Gruppe von Line Dance Fans im Mehrgenerationenhaus Buchen.",
};

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const values: Value[] = [
  {
    icon: Heart,
    title: "Spaß am Tanzen",
    description:
      "Bei uns zählt nur eins: Freude an der Bewegung! Keine Wettkämpfe, kein Stress - einfach tanzen und lachen.",
    color: "bg-[#dc2626]",
  },
  {
    icon: Users,
    title: "Echte Gemeinschaft",
    description:
      "Wir sind wie eine große Familie. Jeder hilft jedem und Neulinge werden sofort herzlich aufgenommen.",
    color: "bg-[#15803d]",
  },
  {
    icon: Target,
    title: "Kein Druck",
    description:
      "Komm wann du kannst, tanz wie du willst. Bei uns gibt es keine Pflichten - nur gute Vibes!",
    color: "bg-[#b45309]",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-[#f5e6d3] overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-[#b45309] px-4 py-2 rounded-full mb-6">
              <Hand className="w-5 h-5 text-[#fef3c7]" />
              <span className="text-[#fef3c7] font-medium">
                Howdy, Partner!
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl text-[#3d2314] mb-6 text-balance">
              Wer wir sind
            </h1>
            <p className="text-xl text-[#78350f] max-w-2xl mx-auto leading-relaxed">
              Eine bunt gemischte Truppe von Line Dance Fans - von Anfängern bis
              Fortgeschrittenen, von jung bis jung geblieben!
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24 bg-[#fdf6ee]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border-4 border-[#8b5a2b] shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/images/dance-friends.jpg"
                    alt="Unsere Line Dance Gemeinschaft"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Decorative badge */}
                <div className="absolute -bottom-4 -right-4 bg-[#b45309] text-[#fef3c7] px-6 py-3 rounded-full shadow-xl -rotate-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-bold">Just for Fun!</span>
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="font-serif text-4xl text-[#3d2314] mb-6 flex items-center gap-3">
                  <BookOpen className="w-8 h-8 text-[#b45309]" /> Unsere Story
                </h2>

                <div className="space-y-4 text-[#78350f] text-lg leading-relaxed">
                  <p>
                    <strong className="text-[#3d2314]">
                      Wir sind keine Tanzschule
                    </strong>{" "}
                    - wir sind einfach eine Gruppe von Menschen, die Line Dance
                    lieben! Jede Woche treffen wir uns, um gemeinsam zu tanzen,
                    neue Schritte zu lernen und vor allem: Spaß zu haben.
                  </p>
                  <p>
                    Unser{" "}
                    <strong className="text-[#3d2314]">
                      Zuhause ist das Mehrgenerationenhaus
                    </strong>{" "}
                    in Buchen - ein toller Ort mit genug Platz zum Tanzen und
                    einer super entspannten Atmosphäre.
                  </p>
                  <p>
                    Das Beste?{" "}
                    <strong className="text-[#3d2314]">
                      Es ist komplett kostenlos!
                    </strong>{" "}
                    Wir machen das aus reiner Freude am Tanzen, ohne finanzielle
                    Interessen. Einfach vorbeikommen und mitmachen!
                  </p>
                </div>

                {/* Location card */}
                <div className="mt-8 bg-[#fff9f2] border-3 border-[#d4a574] rounded-xl p-5 flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#15803d] rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-serif text-xl text-[#3d2314]">
                      Mehrgenerationenhaus Buchen
                    </p>
                    <p className="text-[#78350f]">
                      Hier tanzen wir jeden Dienstag von 19:30 - 22:00 Uhr!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24 bg-[#f5e6d3]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl text-[#3d2314] mb-4">
                Was uns ausmacht
              </h2>
              <p className="text-lg text-[#78350f]">
                Drei Dinge sind uns wichtig
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-[#fff9f2] rounded-2xl p-8 border-3 border-[#d4a574] text-center hover:shadow-xl hover:-translate-y-2 transition-all"
                >
                  <div
                    className={`mx-auto w-20 h-20 ${value.color} rounded-full flex items-center justify-center shadow-lg mb-6`}
                  >
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#3d2314] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#78350f] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newcomers Section */}
        <section className="py-16 lg:py-24 bg-[#3d2314]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 bg-[#b45309] rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-[#fef3c7]" />
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#f5d076] mb-6">
                Neu hier?
              </h2>
              <p className="text-xl text-[#d4a574] leading-relaxed mb-8">
                Perfekt! Bei uns brauchst du keine Vorkenntnisse. Wir zeigen dir
                die Grundschritte und helfen dir bei deinen ersten Tänzen.
                YouTube-Tutorials zum Üben daheim gibt&apos;s auch!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {false && (<Link href="/contact">
                  <Button className="bg-[#b45309] hover:bg-[#92400e] text-[#fef3c7] font-bold text-lg px-8 py-6 rounded-full border-3 border-[#d4a574] shadow-lg w-full sm:w-auto">
                    <Hand className="w-5 h-5 mr-2" />
                    Sag Hallo!
                  </Button>
                </Link>)}
                <Link href="/resources">
                  <Button
                    variant="outline"
                    className="bg-transparent border-3 border-[#d4a574] text-[#fef3c7] hover:bg-[#d4a574]/20 hover:text-[#fef3c7] font-bold text-lg px-8 py-6 rounded-full w-full sm:w-auto"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Grundlagen-Videos
                  </Button>
                </Link>
                <Link href="/schedule">
                  <Button
                    variant="outline"
                    className="bg-transparent border-3 border-[#d4a574] text-[#fef3c7] hover:bg-[#d4a574]/20 hover:text-[#fef3c7] font-bold text-lg px-8 py-6 rounded-full w-full sm:w-auto"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Termine checken
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
