import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Music, ListMusic, Users, Calendar, BadgeCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-barn-dance.jpg"
          alt="Line Dancer beim fröhlichen Tanzen"
          fill
          className="object-cover"
          priority
        />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3d2314]/95 via-[#3d2314]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3d2314]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-[#b45309]/90 backdrop-blur-sm px-5 py-2 rounded-full mb-8 shadow-lg">
            <Music className="w-5 h-5 text-[#fef3c7]" />
            <span className="text-[#fef3c7] font-medium">
              Willkommen bei Buchens Multi-Generation Line Dancer!
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#fef3c7] leading-tight text-balance drop-shadow-lg">
            Yeehaw!
            <br />
            <span className="text-[#f5d076]">Let&apos;s Dance!</span>
          </h1>

          <p className="mt-6 text-xl text-[#faebd7] leading-relaxed max-w-xl drop-shadow">
            Keine Kurse, kein Stress - nur gute Musik, nette Leute und jede
            Menge Spaß beim gemeinsamen Line Dance im Herzen von Buchen!
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button className="bg-[#b45309] hover:bg-[#92400e] text-[#fef3c7] font-bold text-lg px-8 py-6 rounded-full border-3 border-[#d4a574] shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 hover:scale-105 w-full sm:w-auto">
                <Users className="w-5 h-5 mr-2" />
                Komm vorbei!
              </Button>
            </Link>
            <Link href="/dances">
              <Button
                variant="outline"
                className="bg-transparent border-3 border-[#d4a574] text-[#fef3c7] hover:bg-[#d4a574]/20 hover:text-[#fef3c7] font-bold text-lg px-8 py-6 rounded-full transition-all w-full sm:w-auto"
              >
                <ListMusic className="w-5 h-5 mr-2" />
                Unsere Tänze
              </Button>
            </Link>
          </div>

          {/* Fun stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8">
            <div className="text-center p-4 bg-[#3d2314]/60 backdrop-blur-sm rounded-xl border-2 border-[#d4a574]/30">
              <div className="w-10 h-10 bg-[#b45309] rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="w-5 h-5 text-[#fef3c7]" />
              </div>
              <p className="text-[#f5d076] font-bold text-lg">Alle</p>
              <p className="text-[#d4a574] text-sm">willkommen!</p>
            </div>
            <div className="text-center p-4 bg-[#3d2314]/60 backdrop-blur-sm rounded-xl border-2 border-[#d4a574]/30">
              <div className="w-10 h-10 bg-[#b45309] rounded-full flex items-center justify-center mx-auto mb-2">
                <Calendar className="w-5 h-5 text-[#fef3c7]" />
              </div>
              <p className="text-[#f5d076] font-bold text-lg">Wöchentlich</p>
              <p className="text-[#d4a574] text-sm">am Tanzen</p>
            </div>
            <div className="text-center p-4 bg-[#3d2314]/60 backdrop-blur-sm rounded-xl border-2 border-[#d4a574]/30">
              <div className="w-10 h-10 bg-[#b45309] rounded-full flex items-center justify-center mx-auto mb-2">
                <BadgeCheck className="w-5 h-5 text-[#fef3c7]" />
              </div>
              <p className="text-[#f5d076] font-bold text-lg">100%</p>
              <p className="text-[#d4a574] text-sm">kostenlos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-[#fdf6ee]"
        style={{
          clipPath:
            "polygon(0 100%, 100% 100%, 100% 0, 75% 60%, 50% 20%, 25% 70%, 0 30%)",
        }}
      />
    </section>
  );
}
