import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Mail, Play, HandHeart } from "lucide-react";

const benefits = [
  { text: "Keine Vorkenntnisse nötig - wir zeigen dir alles!" },
  { text: "YouTube-Playlist zum Üben daheim" },
  { text: "Freundlich & entspannt - kein Stress!" },
  { text: "Komplett kostenlos - nur Spaß zählt" },
];

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f5e6d3] relative overflow-hidden">
      {/* Background wood pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            #8b5a2b 0px,
            #8b5a2b 2px,
            transparent 2px,
            transparent 40px
          )`,
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            {/* Main image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-4 border-[#8b5a2b] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/dance-friends.jpg"
                alt="Unsere fröhliche Line Dance Gemeinschaft"
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#b45309] text-[#fef3c7] px-5 py-3 rounded-full shadow-xl rotate-6 hidden sm:flex items-center gap-2">
              <HandHeart className="w-5 h-5" />
              <span className="font-bold">Spaß garantiert!</span>
            </div>
          </div>

          {/* Content side */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#b45309] px-4 py-2 rounded-full mb-6">
              <HandHeart className="w-5 h-5 text-[#fef3c7]" />
              <span className="text-[#fef3c7] font-medium">
                Neugierig geworden?
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl text-[#3d2314] mb-6 text-balance">
              Lust auf Line Dance?
              <br />
              <span className="text-[#b45309]">Dann los!</span>
            </h2>

            <p className="text-lg text-[#78350f] leading-relaxed mb-8">
              Du brauchst keine Tanzerfahrung - nur gute Laune und bequeme
              Schuhe! Wir zeigen dir alles von Anfang an und haben immer Spaß
              dabei.
            </p>

            {/* Benefits list */}
            <ul className="space-y-3 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#15803d] rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#3d2314] font-medium">
                    {benefit.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {false && (<Link href="/contact">
                <Button className="bg-[#b45309] hover:bg-[#92400e] text-[#fef3c7] font-bold text-lg px-8 py-6 rounded-full border-3 border-[#78350f] shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 w-full sm:w-auto">
                  <Mail className="w-5 h-5 mr-2" />
                  Schreib uns!
                </Button>
              </Link>)}
              <Link href="/resources">
                <Button
                  variant="outline"
                  className="bg-transparent border-3 border-[#8b5a2b] text-[#78350f] hover:bg-[#8b5a2b]/10 font-bold text-lg px-8 py-6 rounded-full transition-all w-full sm:w-auto"
                >
                  <Play className="w-5 h-5 mr-2" />
                  YouTube Tutorials
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
