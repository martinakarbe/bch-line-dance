# BCH Line Dancer Website

Eine kleine statische Website für die **BCH Line Dancer** in Buchen (Odenwald), gebaut mit Next.js (App Router) und React.

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
- **Deployment:** Statischer Export mit `next export` → Upload des `out/`-Ordners per FileZilla auf den Webspace

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

## 5. Production-Build & statischer Export

Für ein Deployment auf deinen Webspace brauchst du einen **statischen Export** der Seite.

### 5.1 Production-Build

```bash
yarn build
```

Das erzeugt einen optimierten Produktionsbuild. Dieser Schritt sollte vor jedem Export einmal sauber durchlaufen.

### 5.2 Statischen Export erstellen

```bash
yarn export
```

- Next.js baut die Seite erneut für den Export.
- Das Ergebnis landet im Ordner **`out/`** im Projekt-Root.

Wichtige Dateien dort:

- `out/index.html` → Startseite
- `out/contact.html` → Kontaktseite
- `out/about.html`, `out/schedule.html`, `out/dances.html`, `out/resources.html`, `out/imprint.html`, `out/privacy.html` usw.

Diesen `out/`-Inhalt lädst du später auf deinen Webspace hoch.

> Hinweis: Es ist eine gute Idee, vor jedem Upload **immer** zuerst `yarn build` und dann `yarn export` auszuführen, damit wirklich der aktuelle Stand exportiert wird.

---

## 6. Deployment mit FileZilla (Webspace)

Der typische Ablauf, um die Seite online zu aktualisieren:

1. **Lokal:**
   - Sicherstellen, dass alle Änderungen committed sind (optional, aber empfehlenswert).
   - Im Projektordner nacheinander ausführen:

     ```bash
     yarn build
     yarn export
     ```

2. **FileZilla öffnen** und mit deinem Webspace verbinden.

3. **Webroot-Verzeichnis öffnen** (rechte Seite in FileZilla), also den Ordner, in dem auch deine `index.html` liegt.

4. **In deinem Projekt links** in FileZilla in den `out/`-Ordner gehen.

5. **Alle Dateien und Ordner aus `out/`** markieren und in das Webroot auf der rechten Seite ziehen.

6. Wenn FileZilla fragt, ob Dateien überschrieben werden sollen → **Ja** (überschreiben).

7. Im Browser deine Domain aufrufen und prüfen, ob die Änderungen sichtbar sind.

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
2. Für Live-Update: `yarn build`, `yarn export`, `out/` per FileZilla hochladen.

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

3. Für ein Live-Update auf dem Webspace:

   ```bash
   yarn build
   yarn export
   ```

   Danach den Inhalt des `out/`-Ordners per FileZilla auf den Server hochladen (siehe Abschnitt „Deployment mit FileZilla“).

---

Viel Spaß beim Weiterentwickeln der BCH Line Dancer Website! Wenn du dir bei einer Änderung unsicher bist, mach vorher eine Kopie der Datei oder committe den aktuellen Stand in Git, damit du immer zurück kannst.
