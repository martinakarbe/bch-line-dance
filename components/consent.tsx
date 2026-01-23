"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const CONSENT_STORAGE_KEY = "bch-consent-v1";

export type ConsentState = {
  calendar: boolean;
  decided: boolean;
};

const defaultConsent: ConsentState = {
  calendar: false,
  decided: false,
};

function loadConsent(): ConsentState {
  if (typeof window === "undefined") return defaultConsent;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return defaultConsent;
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    return {
      ...defaultConsent,
      ...parsed,
      decided: parsed.decided ?? true,
    };
  } catch {
    return defaultConsent;
  }
}

function saveConsent(state: ConsentState) {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

export function useConsent() {
  const [consent, setConsent] = React.useState<ConsentState>(defaultConsent);
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    const initial = loadConsent();
    setConsent(initial);
    setHydrated(true);
  }, []);

  const updateConsent = React.useCallback(
    (updater: (prev: ConsentState) => ConsentState) => {
      setConsent((prev) => {
        const next = updater(prev);
        saveConsent(next);
        return next;
      });
    },
    []
  );

  return { consent, hydrated, updateConsent };
}

export function ConsentBanner() {
  const { consent, hydrated, updateConsent } = useConsent();

  if (!hydrated || consent.decided) return null;

  const acceptAll = () => {
    updateConsent(() => ({ calendar: true, decided: true }));
  };

  const onlyNecessary = () => {
    updateConsent(() => ({ calendar: false, decided: true }));
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-4">
      <div className="max-w-3xl w-full bg-[#3d2314] text-[#fef3c7] rounded-2xl shadow-lg border border-[#d4a574] p-4 md:p-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1 text-sm">
          <p className="font-semibold">Datenschutzeinstellungen</p>
          <p className="text-xs md:text-sm text-[#fcd34d]">
            Wir verwenden ein technisch notwendiges Cookie für die Navigation.
            Zusätzlich können Inhalte von Google (Kalender) eingebunden werden.
            Du kannst dem zustimmen oder nur die notwendigen Funktionen nutzen.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mt-2 md:mt-0">
          <Button
            size="sm"
            className="bg-[#b45309] hover:bg-[#92400e] text-[#fef3c7]"
            onClick={onlyNecessary}
          >
            Nur notwendige
          </Button>
          <Button
            size="sm"
            className="bg-[#b45309] hover:bg-[#92400e] text-[#fef3c7]"
            onClick={acceptAll}
          >
            Kalender akzeptieren
          </Button>
        </div>
      </div>
    </div>
  );
}

type CalendarWithConsentProps = {
  src: string;
  title: string;
  className?: string;
};

export function CalendarWithConsent({
  src,
  title,
  className,
}: CalendarWithConsentProps) {
  const { consent, hydrated, updateConsent } = useConsent();

  const enableCalendar = () => {
    updateConsent((prev) => ({ ...prev, calendar: true, decided: true }));
  };

  if (!hydrated) {
    return null;
  }

  if (!consent.calendar) {
    return (
      <div className="bg-[#fff9f2] rounded-2xl border-4 border-dashed border-[#8b5a2b] max-w-5xl mx-auto p-6 text-center space-y-3">
        <p className="text-[#78350f] text-sm md:text-base">
          Der Kalender wird von Google bereitgestellt. Beim Laden können Daten
          an Google übertragen und Cookies gesetzt werden.
        </p>
        <Button
          className="bg-[#b45309] hover:bg-[#92400e] text-[#fef3c7]"
          onClick={enableCalendar}
        >
          Kalender laden und zustimmen
        </Button>
      </div>
    );
  }

  return (
    <div className={className}>
      <iframe
        src={src}
        className="w-full h-[500px] md:h-[600px] border-0"
        title={title}
        loading="lazy"
      />
    </div>
  );
}
