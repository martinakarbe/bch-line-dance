import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ObfuscatedEmail } from "@/components/contact/obfuscated-email";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der BCH Line Dancer Website",
};

export default function ImprintPage() {
  return (
    <>
      <Header />
      <main className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zur Startseite
            </Link>
          </Button>

          <h1 className="font-serif text-3xl font-bold text-foreground">
            Impressum
          </h1>

          <div className="mt-8 prose prose-neutral max-w-none">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground mt-8">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="text-muted-foreground">
                BCH Line Dancer
                <br />
                c/o Mehrgenerationenhaus Buchen
                <br />
                Buchen, Deutschland
              </p>
            </section>

            <section className="space-y-4 mt-8">
              <h2 className="text-xl font-semibold text-foreground">Kontakt</h2>
              <p className="text-muted-foreground">
                E-Mail-Adresse:{" "}
                <ObfuscatedEmail
                  withCopy
                  buttonClassName="border-border text-muted-foreground hover:text-foreground"
                />
              </p>
            </section>

            <section className="space-y-4 mt-8">
              <h2 className="text-xl font-semibold text-foreground">
                Haftungsausschluss
              </h2>

              <h3 className="text-lg font-medium text-foreground mt-6">
                1. Inhalt des Onlineangebotes
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Der Autor übernimmt keinerlei Gewähr für die Aktualität,
                Korrektheit, Vollständigkeit oder Qualität der bereitgestellten
                Informationen. Haftungsansprüche gegen den Autor, welche sich
                auf Schäden materieller oder ideeller Art beziehen, die durch
                die Nutzung oder Nichtnutzung der dargebotenen Informationen
                bzw. durch die Nutzung fehlerhafter und unvollständiger
                Informationen verursacht wurden, sind grundsätzlich
                ausgeschlossen, sofern seitens des Autors kein nachweislich
                vorsätzliches oder grob fahrlässiges Verschulden vorliegt.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6">
                2. Verweise und Links
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Bei direkten oder indirekten Verweisen auf fremde Webseiten
                (&quot;Hyperlinks&quot;), die außerhalb des
                Verantwortungsbereiches des Autors liegen, würde eine
                Haftungsverpflichtung ausschließlich in dem Fall in Kraft
                treten, in dem der Autor von den Inhalten Kenntnis hat und es
                ihm technisch möglich und zumutbar wäre, die Nutzung im Falle
                rechtswidriger Inhalte zu verhindern.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6">
                3. Urheber- und Kennzeichenrecht
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Der Autor ist bestrebt, in allen Publikationen die Urheberrechte
                der verwendeten Bilder, Grafiken, Tondokumente, Videosequenzen
                und Texte zu beachten, von ihm selbst erstellte Bilder,
                Grafiken, Tondokumente, Videosequenzen und Texte zu nutzen oder
                auf lizenzfreie Grafiken, Tondokumente, Videosequenzen und Texte
                zurückzugreifen.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6">
                4. Datenschutz
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Sofern innerhalb des Internetangebotes die Möglichkeit zur
                Eingabe persönlicher oder geschäftlicher Daten (Emailadressen,
                Namen, Anschriften) besteht, so erfolgt die Preisgabe dieser
                Daten seitens des Nutzers auf ausdrücklich freiwilliger Basis.
                Weitere Informationen finden Sie in unserer{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Datenschutzerklärung
                </Link>
                .
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6">
                5. Rechtswirksamkeit dieses Haftungsausschlusses
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Dieser Haftungsausschluss ist als Teil des Internetangebotes zu
                betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern
                Teile oder einzelne Formulierungen dieses Textes der geltenden
                Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen
                sollten, bleiben die übrigen Teile des Dokumentes in ihrem
                Inhalt und ihrer Gültigkeit davon unberührt.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
