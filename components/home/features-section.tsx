import { Heart, Users, Youtube, Home, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: Heart,
    title: "Für ALLE offen",
    description:
      "Egal ob du noch nie getanzt hast oder schon ein alter Hase bist - bei uns bist du herzlich willkommen! Wir helfen dir gerne bei den ersten Schritten.",
    color: "bg-[#15803d]",
  },
  {
    icon: Users,
    title: "Nette Gemeinschaft",
    description:
      "Hier geht's um Spaß, nicht um Perfektion! Wir sind eine bunte Truppe, die sich einfach gerne trifft und gemeinsam tanzt.",
    color: "bg-[#b45309]",
  },
  {
    icon: Youtube,
    title: "YouTube Tutorials",
    description:
      "Übe zu Hause mit unseren Playlists! Von Grundschritten bis zu ganzen Tänzen - alles kostenlos auf YouTube.",
    color: "bg-[#dc2626]",
  },
  {
    icon: Home,
    title: "Toller Übungsraum",
    description:
      "Das Mehrgenerationenhaus Buchen bietet uns einen super Raum zum Tanzen. Komm einfach vorbei und mach mit!",
    color: "bg-[#1e40af]",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#fdf6ee] relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#f5e6d3] px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 text-[#b45309]" />
            <span className="text-[#78350f] font-medium text-sm">
              Was uns ausmacht
            </span>
            <Star className="w-4 h-4 text-[#b45309]" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#3d2314] mb-4 text-balance">
            Warum Line Dance bei uns?
          </h2>
          <p className="text-lg text-[#78350f] leading-relaxed">
            Bei uns steht der Spaß im Vordergrund! Keine Kurse, kein
            Leistungsdruck - einfach gemeinsam tanzen und eine gute Zeit haben.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-[#fff9f2] rounded-2xl p-6 border-3 border-[#d4a574] hover:border-[#b45309] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Corner decoration */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#f5e6d3] rounded-full border-2 border-[#d4a574] flex items-center justify-center text-[#b45309] font-bold text-sm">
                {index + 1}
              </div>

              <div className="flex gap-4">
                <div
                  className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#3d2314] mb-2 group-hover:text-[#b45309] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[#78350f] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fun bottom text */}
        <div className="text-center mt-16">
          <p className="text-2xl font-serif text-[#b45309]">
            Klingt gut? <span className="text-[#3d2314]">Dann komm vorbei!</span>
          </p>
        </div>
      </div>
    </section>
  );
}
