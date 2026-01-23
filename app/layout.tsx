import React from "react";
import type { Metadata, Viewport } from "next";
import { Quicksand, Rye } from "next/font/google";
import { ConsentBanner } from "@/components/consent";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

const rye = Rye({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rye",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BCH Line Dancer | Gemeinsam tanzen in Buchen",
    template: "%s | BCH Line Dancer",
  },
  description:
    "Wir sind eine Gruppe von Line Dancern, die einfach nur gemeinsam üben und sich immer wieder neue Tänze aneignen, just for fun, ohne finanzielle Interessen. Neue Tänzer sind jederzeit willkommen!",
  keywords: [
    "Line Dance",
    "Buchen",
    "Mehrgenerationenhaus",
    "Tanzen",
    "Country Dance",
    "Hobby",
    "Tanzgruppe",
  ],
  authors: [{ name: "BCH Line Dancer" }],
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "BCH Line Dancer | Gemeinsam tanzen in Buchen",
    description:
      "Line Dance Gruppe im Mehrgenerationenhaus Buchen - für Anfänger und Fortgeschrittene",
    locale: "de_DE",
    type: "website",
  },
  generator: "v0.app",
};

export const viewport: Viewport = {
  themeColor: "#c9754a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${quicksand.variable} ${rye.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
