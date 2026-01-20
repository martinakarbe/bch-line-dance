import { MessageCircle, Star, Quote } from "lucide-react";

const testimonials = [
  {
    content:
      "Ich hab' mich als komplette Anfängerin kaum getraut, aber wurde sofort herzlich aufgenommen. Hier wird niemand ausgelacht - nur gemeinsam gelacht!",
    author: "Maria",
    years: "seit 2023 dabei",
  },
  {
    content:
      "Jeden Mittwoch ist mein Highlight! Line Dance hält fit, macht Spaß und die Truppe ist einfach super. Besser als jedes Fitnessstudio!",
    author: "Hans",
    years: "seit 2022 dabei",
  },
  {
    content:
      "Eine tolle Gemeinschaft für alle Altersgruppen. Hier unterstützt jeder jeden - und die neuen Tänze lernen wir gemeinsam.",
    author: "Petra",
    years: "seit 2021 dabei",
  },
];

export function TestimonialSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#3d2314] relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#5c4033] px-4 py-2 rounded-full mb-4">
            <MessageCircle className="w-4 h-4 text-[#d4a574]" />
            <span className="text-[#d4a574] font-medium text-sm">
              Das sagen unsere Tänzer
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#f5d076] mb-4 text-balance">
            Stimmen aus der Gruppe
          </h2>
          <p className="text-lg text-[#d4a574]">
            Echte Erfahrungen von echten Line Dance Fans!
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-[#fff9f2] rounded-2xl p-6 border-4 border-[#d4a574] shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 group"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 right-6 w-10 h-10 bg-[#b45309] rounded-full flex items-center justify-center border-4 border-[#fff9f2] shadow-lg group-hover:scale-110 transition-transform">
                <Quote className="w-5 h-5 text-[#fef3c7]" />
              </div>

              <blockquote className="pt-4">
                <p className="text-[#3d2314] leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </blockquote>

              <div className="mt-6 pt-4 border-t-2 border-dashed border-[#d4a574]">
                <p className="font-serif text-lg text-[#78350f]">
                  {testimonial.author}
                </p>
                <p className="text-sm text-[#92400e]">{testimonial.years}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-[#d4a574] text-lg mb-4">
            Werde Teil unserer Community!
          </p>
          <div className="flex justify-center gap-2">
            <Star className="w-6 h-6 text-[#b45309]" />
            <Star className="w-6 h-6 text-[#d4a574]" />
            <Star className="w-6 h-6 text-[#b45309]" />
            <Star className="w-6 h-6 text-[#d4a574]" />
            <Star className="w-6 h-6 text-[#b45309]" />
          </div>
        </div>
      </div>
    </section>
  );
}
