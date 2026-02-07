# Buchens Multi-Generation Line Dancer Website

Eine kleine statische Website für **Buchens Multi-Generation Line Dancer** in Buchen (Odenwald), gebaut mit Next.js (App Router) und React.

Die Seite zeigt u.a.
- **Startseite** mit Hero, Call-to-Action und Infos
- **Wer wir sind** (`/about`)
- **Termine** mit eingebettetem Google Kalender (`/schedule`)
- **Tanzübersicht** (`/dances`)
- **Links & Tipps** (`/resources`)
- **Kontaktseite** (`/contact`) mit Kontaktformular (aktuell nur Demo, ohne Versand)

---

## 1. Technischer Überblick (kurz & anfängerfreundlich)

- **Framework:** [Next.js](https://nextjs.org/) 16 (React-basiertes Web-Framework)
- **Sprache:** TypeScript / JavaScript
- **Styling:** Tailwind CSS + eigene CSS-Dateien
- **Icons & UI:** `lucide-react`, shadcn/ui-Komponenten
- **Deployment:** Automatisches Deployment über [Vercel](https://vercel.com) (Git-Push → Build & Live-Update)

Du musst kein Profi-Entwickler sein, um kleine Änderungen (Texte, Links, Bilder) vorzunehmen.

---

## 2. Voraussetzungen

Damit du das Projekt lokal starten kannst, brauchst du:

- **Node.js** (empfohlen: Version 18 oder neuer)
- **Yarn** (wird aktuell im Projekt verwendet)

Prüfen, ob beides installiert ist:

```bash
node -v
yarn -v
```

Wenn einer der Befehle nicht gefunden wird, zuerst Node.js installieren (z.B. von nodejs.org) und danach Yarn (`npm install -g yarn`).

---

## 3. Projekt lokal installieren

1. Im Terminal in den Projektordner wechseln, z.B.:

   ```bash
   cd /Users/<dein-name>/Development/bch-line-dance
   ```

2. Abhängigkeiten installieren:

   ```bash
   yarn install
   ```

   Das lädt alle benötigten Pakete in den `node_modules`-Ordner.

---

## 4. Entwicklung: Lokalen Dev-Server starten

Um die Seite lokal zu bearbeiten und im Browser zu sehen:

```bash
yarn dev
```

Danach im Browser öffnen:

- http://localhost:3000

Bei jeder Änderung an den Dateien im `app/`- oder `components/`-Ordner lädt die Seite automatisch neu (Hot Reload).

---

## 5. Production-Build & Deployment mit Vercel

Für ein Deployment über Vercel brauchst du **keinen statischen Export** mehr, sondern nur einen normalen Next.js-Production-Build.

### 5.1 Production-Build lokal testen (optional)

```bash
yarn build
```

Das erzeugt einen optimierten Produktionsbuild und prüft, ob das Projekt baubar ist. Das ist hilfreich, bevor du Änderungen ins Remote-Repository pushst.

### 5.2 Deployment über Vercel (Git-basiert)

Der typische Ablauf, um die Seite online zu aktualisieren:

1. Änderungen lokal machen und mit `yarn dev` testen.
2. Änderungen committen und ins Git-Remote (z.B. GitHub) pushen.
3. Vercel ist mit dem Repository verknüpft und startet automatisch einen neuen Build.
4. Nach erfolgreichem Build ist die neue Version unter der Produktions-URL erreichbar.

Hinweis: Vercel erstellt für Branches bzw. Pull Requests automatische **Preview Deployments**, mit denen du Änderungen vor dem Merge testen kannst.

Für die einmalige Einrichtung in Vercel:

1. Auf https://vercel.com einloggen.
2. "Add New Project" wählen und dieses Repository verbinden.
3. Framework: **Next.js** (wird automatisch erkannt).
4. Build Command: `next build` (Standard).
5. Danach die eigene Domain im Projekt unter **Settings → Domains** hinzufügen und die DNS-Einträge laut Vercel-Dokumentation setzen.

---

## 7. Wichtige Verzeichnisse & Dateien

Ein kurzer Überblick, wo du was findest:

- `app/`
  - `page.tsx` – Startseite (`/`)
  - `about/page.tsx` – "Wer wir sind" (`/about`)
  - `schedule/page.tsx` – Termine (`/schedule`)
  - `dances/page.tsx` – Tanzübersicht (`/dances`)
  - `resources/page.tsx` – Links & Tipps (`/resources`)
  - `contact/page.tsx` – Kontaktseite (`/contact`)
  - `imprint/page.tsx` – Impressum (`/imprint`)
  - `privacy/page.tsx` – Datenschutz (`/privacy`)

- `components/`
  - `header.tsx`, `footer.tsx` – Kopf- und Fußzeile (Navigation, Kontakt-Links)
  - `home/` – Hero-, CTA- und weitere Startseiten-Sektionen
  - `dances/dance-table.tsx` – Tabelle / Karten für die Tänze
  - `contact/contact-form.tsx` – Kontaktformular-Komponente (aktuell nur Fake-Submit ohne echten Versand)
  - `ui/` – wiederverwendbare UI-Komponenten (Buttons, Inputs, Dialoge, ...)

- `lib/`
  - `dances.ts` – Daten zu allen Tänzen (Name, Level, Songs, Links)

- `public/`
  - `images/` – Bilder (Hero, Community-Fotos etc.)
  - Icons und Platzhaltergrafiken

- `styles/`
  - `globals.css` – zusätzliche globale Styles

- `next.config.mjs` – Next.js-Konfiguration
- `package.json` – Projekt-Skripte und Abhängigkeiten

---

## 8. Typische Aufgaben für Anfänger

Ein paar Beispiele, was du gefahrlos anpassen kannst:

- **Texte ändern**
  - z.B. in `app/about/page.tsx` oder `app/contact/page.tsx`

- **Links anpassen**
  - Menüeinträge in `components/header.tsx`
  - Footer-Links in `components/footer.tsx`

- **Bilder austauschen**
  - Dateien in `public/images/` ersetzen (Dateinamen beibehalten oder in den Komponenten anpassen).

Nach jeder Änderung:

1. Lokal mit `yarn dev` prüfen.
2. Änderungen committen und ins Git-Remote pushen → Vercel baut und deployed automatisch.

---

## 9. Bekannte Einschränkungen / TODOs

- Das **Kontaktformular** sendet aktuell noch **keine echte E-Mail**. Die Eingaben werden nur lokal verarbeitet und eine Erfolgsmeldung angezeigt.
- Wenn in Zukunft ein echter Mailversand gewünscht ist, braucht es z.B. eine kleine API-Route (Next.js API Route) oder einen externen Dienst (z.B. Resend, Formspree, Netlify Forms o.ä.).

---

## 10. Git & GitHub

Der Code liegt auf GitHub:

- Repository (SSH): `git@github.com:martinakarbe/bch-line-dance.git`

### Repository klonen

Wenn du das Projekt auf einem neuen Rechner einrichten willst:

```bash
git clone git@github.com:martinakarbe/bch-line-dance.git
cd bch-line-dance
yarn install
```

### Typischer Git-Workflow

1. Änderungen lokal machen und testen:

   ```bash
   yarn dev
   ```

2. Änderungen speichern und hochladen:

   ```bash
   git add .
   git commit -m "Beschreibe deine Änderung kurz"
   git push
   ```

3. Für ein Live-Update in der Produktion:

   - Änderungen committen und mit `git push` ins Remote-Repository hochladen.
   - Vercel startet automatisch einen neuen Build und stellt die Seite nach erfolgreichem Build live.

---

Viel Spaß beim Weiterentwickeln der BCH Line Dancer Website! Wenn du dir bei einer Änderung unsicher bist, mach vorher eine Kopie der Datei oder committe den aktuellen Stand in Git, damit du immer zurück kannst.
