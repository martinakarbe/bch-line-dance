"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, PartyPopper, Send } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-20 h-20 bg-[#15803d] rounded-full flex items-center justify-center mx-auto mb-4">
          <PartyPopper className="w-10 h-10 text-white" />
        </div>
        <h3 className="font-serif text-2xl text-[#3d2314] mb-2">
          Yeehaw! Nachricht gesendet!
        </h3>
        <p className="text-[#78350f] mb-6">
          Vielen Dank! Wir melden uns so schnell wie möglich bei dir.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          className="bg-[#b45309] hover:bg-[#92400e] text-[#fef3c7] font-bold px-6 py-2 rounded-full border-2 border-[#78350f]"
        >
          Neue Nachricht schreiben
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-[#3d2314] font-semibold">
            Vorname
          </Label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="Max"
            className="bg-white border-2 border-[#d4a574] focus:border-[#b45309] text-[#3d2314] placeholder:text-[#92400e]/50 rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-[#3d2314] font-semibold">
            Nachname
          </Label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Mustermann"
            className="bg-white border-2 border-[#d4a574] focus:border-[#b45309] text-[#3d2314] placeholder:text-[#92400e]/50 rounded-lg"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-[#3d2314] font-semibold">
          E-Mail
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="max@beispiel.de"
          className="bg-white border-2 border-[#d4a574] focus:border-[#b45309] text-[#3d2314] placeholder:text-[#92400e]/50 rounded-lg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="experience" className="text-[#3d2314] font-semibold">
          Tanzerfahrung
        </Label>
        <select
          id="experience"
          name="experience"
          className="flex h-11 w-full bg-white border-2 border-[#d4a574] focus:border-[#b45309] text-[#3d2314] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#b45309]/20"
        >
          <option value="">Bitte wählen...</option>
          <option value="none">Noch nie getanzt 🌱</option>
          <option value="beginner">Anfänger (unter 1 Jahr) 🌿</option>
          <option value="intermediate">Mittelstufe (1-3 Jahre) 🌳</option>
          <option value="advanced">Erfahren (3+ Jahre) 🌲</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-[#3d2314] font-semibold">
          Deine Nachricht
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Hey! Ich würde gerne mal vorbeischauen..."
          className="bg-white border-2 border-[#d4a574] focus:border-[#b45309] text-[#3d2314] placeholder:text-[#92400e]/50 rounded-lg resize-none"
        />
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-[#b45309] hover:bg-[#92400e] text-[#fef3c7] font-bold text-lg py-6 rounded-full border-2 border-[#78350f] shadow-lg hover:shadow-xl transition-all disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Wird gesendet...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Nachricht abschicken!
          </>
        )}
      </Button>

      <p className="text-xs text-[#92400e] text-center">
        Mit dem Absenden stimmst du zu, dass wir deine Daten zur Bearbeitung
        deiner Anfrage verwenden.
      </p>
    </form>
  );
}
