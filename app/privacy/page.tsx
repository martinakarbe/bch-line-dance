import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der BCH Line Dancer Website",
};

export default function PrivacyPage() {
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
            Datenschutzerklärung
          </h1>

          <div className="mt-8 prose prose-neutral max-w-none">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground mt-8">
                1. Datenschutz auf einen Blick
              </h2>

              <h3 className="text-lg font-medium text-foreground mt-6">
                Allgemeine Hinweise
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6">
                Datenerfassung auf dieser Website
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>
                  Wer ist verantwortlich für die Datenerfassung auf dieser
                  Website?
                </strong>
                <br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten können Sie dem{" "}
                <Link href="/imprint" className="text-primary hover:underline">
                  Impressum
                </Link>{" "}
                dieser Website entnehmen.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                <strong>Wie erfassen wir Ihre Daten?</strong>
                <br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie
                in ein Kontaktformular eingeben.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung
                beim Besuch der Website durch unsere IT-Systeme erfasst. Das
                sind vor allem technische Daten (z.B. Internetbrowser,
                Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
            </section>

            <section className="space-y-4 mt-8">
              <h2 className="text-xl font-semibold text-foreground">
                2. Hosting
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Diese Website wird extern gehostet. Die personenbezogenen Daten,
                die auf dieser Website erfasst werden, werden auf den Servern
                des Hosters gespeichert. Hierbei kann es sich v.a. um
                IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
                Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
                Daten, die über eine Website generiert werden, handeln.
              </p>
            </section>

            <section className="space-y-4 mt-8">
              <h2 className="text-xl font-semibold text-foreground">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>

              <h3 className="text-lg font-medium text-foreground mt-6">
                Datenschutz
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
                Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
                vertraulich und entsprechend den gesetzlichen
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6">
                Hinweis zur verantwortlichen Stelle
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website entnehmen Sie bitte dem{" "}
                <Link href="/imprint" className="text-primary hover:underline">
                  Impressum
                </Link>
                .
              </p>
            </section>

            <section className="space-y-4 mt-8">
              <h2 className="text-xl font-semibold text-foreground">
                4. Datenerfassung auf dieser Website
              </h2>

              <h3 className="text-lg font-medium text-foreground mt-6">
                Kontaktformular
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                werden Ihre Angaben aus dem Anfrageformular inklusive der von
                Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen bei uns
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
                weiter.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6">
                Google Calendar
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Wir binden auf unserer Website Google Calendar ein. Dadurch kann
                es sein, dass Daten an Google übertragen werden. Weitere
                Informationen finden Sie in der Datenschutzerklärung von Google.
              </p>
            </section>

            <section className="space-y-4 mt-8">
              <h2 className="text-xl font-semibold text-foreground">
                5. Ihre Rechte
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                Herkunft, Empfänger und Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
                können Sie diese Einwilligung jederzeit für die Zukunft
                widerrufen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
