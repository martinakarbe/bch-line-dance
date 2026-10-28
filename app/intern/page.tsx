import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth-utils";
import { LogOut, Lock, Calendar, Image as ImageIcon, FileText } from "lucide-react";
import Link from "next/link";

export default async function InternPage() {
  const isAuth = await isAuthenticated();

  if (!isAuth) {
    redirect("/intern/login");
  }

  return (
    <div className="min-h-screen bg-[#fdf6ee]">
      {/* Header */}
      <header className="bg-[#fff9f2] border-b-3 border-[#d4a574]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#b45309] rounded-full flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-serif text-xl text-[#3d2314]">
                  Interner Bereich
                </h1>
                <p className="text-sm text-[#78350f]">
                  Nur für Mitglieder
                </p>
              </div>
            </div>
            <form action="/api/auth/logout" method="POST">
              <button
                type="submit"
                className="flex items-center gap-2 px-4 py-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Ausloggen</span>
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <div className="bg-[#fff9f2] rounded-2xl border-3 border-[#d4a574] p-8 mb-8">
            <h2 className="font-serif text-3xl text-[#3d2314] mb-4">
              Willkommen im internen Bereich!
            </h2>
            <p className="text-[#78350f] leading-relaxed">
              Hier findest du interne Informationen, Termine und Materialien, die nur für Mitglieder bestimmt sind. 
            </p>
          </div>
<div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <div className="bg-[#fff9f2] rounded-2xl border-3 border-[#d4a574] p-8 mb-8">
            <h3 className="font-serif text-xl text-[#3d2314]">Tanzbeschreibungen </h3>
             <p className="text-[#78350f] mb-4">
                nur für unsere Mitglieder - in verständlichen Schritten erklärt
              </p>
                <span> <a
                      href="https://www.dropbox.com/scl/fi/rza27po4jpkz42gocyal1/_Alle-T-nze.pdf?rlkey=n1qtc2x7z6g2e77s8wlfr6isi&dl=0" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#b45309] hover:text-[#78350f] font-medium text-sm"
                    >Datei mit allen Tanzbeschreibungen</a>
                    
    </span>
          </div></div>
          {/* Example Content Sections */}
           {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">*/}
            {/* Termine Card */}
             {/* <div className="bg-[#fff9f2] rounded-2xl border-3 border-[#d4a574] p-6 hover:border-[#b45309] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#15803d] rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif text-xl text-[#3d2314]">
                  Interne Termine
                </h3>
              </div>
              <p className="text-[#78350f] mb-4">
                Hier kannst du interne Termine und Veranstaltungen eintragen.
              </p>
              <div className="aspect-video bg-[#d4a574]/20 rounded-lg flex items-center justify-center">
                <span className="text-[#78350f] text-sm">
                  Platzhalter für Bilder
                </span>
              </div>
            </div>*/}

            {/* Bilder Card */}
             {/* 
             <div className="bg-[#fff9f2] rounded-2xl border-3 border-[#d4a574] p-6 hover:border-[#b45309] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#1e40af] rounded-xl flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif text-xl text-[#3d2314]">
                  Fotos & Videos
                </h3>
              </div>
              <p className="text-[#78350f] mb-4">
                Hier kannst du Fotos und Videos von gemeinsamen Aktivitäten
                teilen.
              </p>
              <div className="aspect-video bg-[#d4a574]/20 rounded-lg flex items-center justify-center">
                <span className="text-[#78350f] text-sm">
                  Platzhalter für Bilder
                </span>
              </div>
            </div>
*/}
           {/* Dokumente Card */}
           {/*  <div className="bg-[#fff9f2] rounded-2xl border-3 border-[#d4a574] p-6 hover:border-[#b45309] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#b45309] rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif text-xl text-[#3d2314]">
                  Tanzbeschreibungen 
                </h3>
              </div>
              <p className="text-[#78350f] mb-4">
                nur für unsere Mitglieder - in verständlichen Schritten erklärt
              </p>
             
                  <span className="w-2 h-2 bg-[#b45309] rounded-full" />
                  <span> <a
                      href="https://www.dropbox.com/scl/fi/rza27po4jpkz42gocyal1/_Alle-T-nze.pdf?rlkey=n1qtc2x7z6g2e77s8wlfr6isi&dl=0" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#b45309] hover:text-[#78350f] font-medium text-sm"
                    >Datei mit allen Tanzbeschreibungen</a>
                </span>
                         </div>
*/}
            {/* Notizen Card */}
          {/*  <div className="bg-[#fff9f2] rounded-2xl border-3 border-[#d4a574] p-6 hover:border-[#b45309] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#dc2626] rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif text-xl text-[#3d2314]">
                  Notizen
                </h3>
              </div>
              <p className="text-[#78350f] mb-4">
                Hier kannst du wichtige Notizen und Informationen für die
                Gruppe hinterlegen.
              </p>
              <div className="bg-[#d4a574]/10 rounded-lg p-4 text-[#78350f] text-sm">
                <p className="font-medium mb-2">Beispiel-Notiz:</p>
                <p>
                  Nächstes Treffen am Freitag um 19:00 Uhr im
                  Mehrgenerationenhaus.
                </p>
              </div>
            </div>
          </div>
*/}
          {/* Back to Home */}
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#78350f] hover:text-[#b45309] transition-colors"
            >
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
