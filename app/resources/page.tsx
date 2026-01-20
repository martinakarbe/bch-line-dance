import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  BookOpen,
  Play,
  Handshake,
  Link2,
  Rocket,
  Hand,
  ListMusic,
  Sprout,
  Music,
  Flame,
  FileText,
  Video,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Links & Tipps",
  description:
    "YouTube-Playlists, Partner-Links und Lernmaterialien für Line Dance Anfänger und Fortgeschrittene.",
};

interface Playlist {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  color: string;
  level: string;
}

const playlists: Playlist[] = [
  {
    title: "Grundschritte",
    description: "Grapevine, Shuffle, Jazz Box und alle Basics!",
    icon: Sprout,
    link: "https://www.youtube.com/playlist?list=PLVpcdyXxL6-AdzZpBX8zDPO1qwXvigA12",
    color: "bg-[#15803d]",
    level: "Beginner",
  },
  {
    title: "Erste Tänze",
    description: "Einfache Tänze, die du schnell lernen kannst.",
    icon: Music,
    link: "https://www.youtube.com/playlist?list=PLVpcdyXxL6-BgYGOP4DDAJVD1vLdjS---",
    color: "bg-[#1e40af]",
    level: "Beginner",
  },
  {
    title: "Weitere Anfänger-Tänze",
    description: "Mehr einfache Tänze für dein Repertoire.",
    icon: ListMusic,
    link: "https://www.youtube.com/playlist?list=PLVpcdyXxL6-Bf5xFPrx6jnaUfnwwxzaEP",
    color: "bg-[#b45309]",
    level: "Beginner",
  },
  {
    title: "Fortgeschrittene",
    description: "Herausforderungen für erfahrene Tänzer.",
    icon: Flame,
    link: "https://www.youtube.com/playlist?list=PLVpcdyXxL6-AP17qInBhmrct7NtO5qnSt",
    color: "bg-[#dc2626]",
    level: "Advanced",
  },
];

interface ExternalResource {
  name: string;
  description: string;
  link: string;
  icon: LucideIcon;
}

const externalResources: ExternalResource[] = [
  {
    name: "CopperKnob",
    description:
      "Die größte Stepsheet-Datenbank weltweit mit tausenden Tänzen.",
    link: "https://www.copperknob.co.uk/",
    icon: FileText,
  },
  {
    name: "Kickit",
    description: "Weitere Stepsheet-Sammlung mit klassischen und neuen Tänzen.",
    link: "https://www.kickit.to/",
    icon: FileText,
  },
  {
    name: "Moni Line Dance",
    description: "Tolle Video-Tutorials und Anleitungen auf YouTube.",
    link: "https://www.youtube.com/@monilinedance6529",
    icon: Video,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20 bg-[#f5e6d3] overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-[#b45309] px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-5 h-5 text-[#fef3c7]" />
              <span className="text-[#fef3c7] font-medium">
                Alles zum Lernen!
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl text-[#3d2314] mb-6 text-balance">
              Links & Tipps
            </h1>
            <p className="text-xl text-[#78350f] max-w-2xl mx-auto leading-relaxed">
              YouTube-Playlists zum Üben daheim, Stepsheet-Seiten und hilfreiche
              Links für Line Dancer!
            </p>
          </div>
        </section>

        {/* YouTube Playlists Section */}
        <section className="py-16 lg:py-20 bg-[#fdf6ee]">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="w-14 h-14 bg-[#dc2626] rounded-full flex items-center justify-center shadow-lg">
                <Play className="w-7 h-7 text-white" />
              </div>
              <div className="text-center">
                <h2 className="font-serif text-3xl text-[#3d2314]">
                  YouTube Playlisten
                </h2>
                <p className="text-[#78350f]">Lerne in deinem eigenen Tempo!</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {playlists.map((playlist) => (
                <a
                  key={playlist.title}
                  href={playlist.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#fff9f2] rounded-2xl border-3 border-[#d4a574] overflow-hidden hover:border-[#b45309] hover:shadow-xl transition-all"
                >
                  <div
                    className={`${playlist.color} px-4 py-2 flex items-center justify-between`}
                  >
                    <span className="text-white font-bold text-sm uppercase tracking-wide">
                      {playlist.level}
                    </span>
                    <ExternalLink className="h-4 w-4 text-white/70" />
                  </div>
                  <div className="p-5 flex gap-4">
                    <div
                      className={`w-14 h-14 ${playlist.color} rounded-xl flex items-center justify-center shrink-0`}
                    >
                      <playlist.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-[#3d2314] group-hover:text-[#b45309] transition-colors">
                        {playlist.title}
                      </h3>
                      <p className="text-[#78350f] text-sm mt-1">
                        {playlist.description}
                      </p>
                      <p className="text-[#b45309] font-medium text-sm mt-3 flex items-center gap-1">
                        Playlist ansehen →
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Section */}
        <section className="py-16 lg:py-20 bg-[#f5e6d3]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl text-[#3d2314] mb-2 flex items-center justify-center gap-3">
                <Handshake className="w-7 h-7 text-[#b45309]" /> Unser Partner
              </h2>
              <p className="text-[#78350f]">Hier tanzen wir!</p>
            </div>

            <div className="max-w-xl mx-auto">
              <a
                href="https://www.mehrgenerationenhaeuser.de/mehrgenerationenhaeuser/haeuser-in-ihrer-naehe/steckbrief-mehrgenerationenhaus/mehrgenerationenhaus-buchen"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[#fff9f2] rounded-2xl border-3 border-[#d4a574] p-6 hover:border-[#b45309] hover:shadow-xl transition-all"
              >
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-24 h-24 bg-[#faebd7] rounded-xl flex items-center justify-center border-2 border-[#d4a574] text-center p-3">
                    <div>
                      <img
                        src="/logos/mgh-logo.svg"
                        alt="Mehrgenerationenhaus Buchen"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-serif text-2xl text-[#3d2314] group-hover:text-[#b45309] transition-colors">
                      Mehrgenerationenhaus Buchen
                    </h3>
                    <p className="text-[#b45309] font-medium text-sm mt-1">
                      Miteinander - Füreinander
                    </p>
                    <p className="text-[#78350f] mt-2">
                      Unser Trainingsort mit tollen Räumlichkeiten für
                      gemeinsames Tanzen!
                    </p>
                    <p className="text-[#b45309] font-medium text-sm mt-3 flex items-center gap-1 justify-center sm:justify-start">
                      Website besuchen
                      <ExternalLink className="h-3 w-3" />
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* External Resources Section */}
        <section className="py-16 lg:py-20 bg-[#fdf6ee]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl text-[#3d2314] mb-2 flex items-center justify-center gap-3">
                <Link2 className="w-7 h-7 text-[#b45309]" /> Hilfreiche Links
              </h2>
              <p className="text-[#78350f]">
                Weitere Ressourcen für Line Dancer
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {externalResources.map((resource) => (
                <a
                  key={resource.name}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#fff9f2] rounded-xl border-2 border-[#d4a574] p-5 hover:border-[#b45309] hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="w-10 h-10 bg-[#f5e6d3] rounded-lg flex items-center justify-center">
                      <resource.icon className="w-5 h-5 text-[#b45309]" />
                    </div>
                    <ExternalLink className="h-4 w-4 text-[#92400e]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#3d2314] group-hover:text-[#b45309] transition-colors">
                    {resource.name}
                  </h3>
                  <p className="text-[#78350f] text-sm mt-2">
                    {resource.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#3d2314]">
          <div className="container mx-auto px-4 text-center">
            <div className="w-16 h-16 bg-[#b45309] rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8 text-[#fef3c7]" />
            </div>
            <h2 className="font-serif text-3xl text-[#f5d076] mb-4">
              Bereit loszulegen?
            </h2>
            <p className="text-[#d4a574] mb-8 max-w-md mx-auto">
              Komm vorbei und lerne mit uns zusammen - wir freuen uns auf dich!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-[#b45309] hover:bg-[#92400e] text-[#fef3c7] font-bold text-lg px-8 py-6 rounded-full border-3 border-[#d4a574] shadow-lg w-full sm:w-auto">
                  <Hand className="w-5 h-5 mr-2" />
                  Kontakt aufnehmen
                </Button>
              </Link>
              <Link href="/dances">
                <Button
                  variant="outline"
                  className="bg-transparent border-3 border-[#d4a574] text-[#fef3c7] hover:bg-[#d4a574]/20 hover:text-[#fef3c7] font-bold text-lg px-8 py-6 rounded-full w-full sm:w-auto"
                >
                  <ListMusic className="w-5 h-5 mr-2" />
                  Alle Tänze ansehen
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
