"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        router.replace("/intern");
        router.refresh();
      } else {
        setError(response.status === 401
          ? "Falsches Passwort"
          : "Die Anmeldung ist derzeit nicht verfügbar. Bitte versuche es später erneut.");
      }
    } catch {
      setError("Ein Fehler ist aufgetreten");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fdf6ee] flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-[#fff9f2] rounded-2xl border-3 border-[#d4a574] p-8 shadow-xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#b45309] rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-serif text-3xl text-[#3d2314] mb-2">
              Interner Bereich
            </h1>
            <p className="text-[#78350f]">
              Bitte gib das Passwort ein, um fortzufahren
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#3d2314] mb-2"
              >
                Passwort
              </label>
              <input
                id="password"
                type="password"
                name="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-[#d4a574] bg-white text-[#3d2314] focus:outline-none focus:border-[#b45309] transition-colors"
                placeholder="••••••••"
                required
              />
            </div>

            {error && (
              <div role="alert" className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#b45309] hover:bg-[#92400e] text-[#fef3c7] font-bold py-3 rounded-lg border-2 border-[#78350f] transition-colors"
            >
              {isLoading ? "Wird geladen..." : "Einloggen"}
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t-2 border-[#d4a574] text-center">
            <div className="flex items-center justify-center gap-2 text-[#78350f] text-sm">
              <Music className="w-4 h-4" />
              <span>BCH Line Dancer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
